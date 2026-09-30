"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroArtwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let destroyed = false;

    const W = window.innerWidth;
    const H = window.innerHeight;

    // ── Renderer ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x050210, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;

    // ── Camera ────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 1000);
    camera.position.set(0, 0, 9);

    const scene = new THREE.Scene();

    // ── Mouse ─────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── Stars ─────────────────────────────────────────────────────
    const starPos = new Float32Array(2800 * 3);
    for (let i = 0; i < 2800; i++) {
      const r = 70 + Math.random() * 60;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      starPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      starPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      starPos[i * 3 + 2] = r * Math.cos(p);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.22, transparent: true, opacity: 0.55, sizeAttenuation: true })
    ));

    // ── Main group — right side ───────────────────────────────────
    const group = new THREE.Group();
    group.position.set(2.2, 0.1, 0);
    scene.add(group);

    // Faceted crystal — flat-shaded icosahedron (not a sphere)
    const crystalGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x080020,
      emissive: new THREE.Color(0x5218cc),
      emissiveIntensity: 0.28,
      metalness: 0.95,
      roughness: 0.10,
      flatShading: true,   // KEY — angular faceted crystal look, not a sphere
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    group.add(crystal);

    // Thin wireframe overlay on the facets
    const wireGeo = new THREE.IcosahedronGeometry(2.64, 1);
    group.add(new THREE.Mesh(wireGeo,
      new THREE.MeshBasicMaterial({ color: 0x7B35FF, wireframe: true, transparent: true, opacity: 0.10 })
    ));

    // Atmospheric glow halos (BackSide spheres)
    const halos: [number, number, number][] = [
      [5.0, 0x6321EE, 0.018],
      [3.8, 0x6321EE, 0.040],
      [3.0, 0x6321EE, 0.070],
      [2.8, 0x7FFFD4, 0.024],
    ];
    for (const [r, col, op] of halos) {
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(r, 32, 32),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op, side: THREE.BackSide })
      ));
    }

    // Floating particles orbiting the crystal
    const pCount = 550;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 3.2 + Math.random() * 3.8;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      pPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pPos[i * 3 + 2] = r * Math.cos(p);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    group.add(new THREE.Points(pGeo,
      new THREE.PointsMaterial({ color: 0x9940FF, size: 0.048, transparent: true, opacity: 0.70, sizeAttenuation: true })
    ));

    // ── Lighting ─────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.04));

    // Strong purple key light — creates facet highlights
    const keyLight = new THREE.PointLight(0x8833FF, 16, 22);
    keyLight.position.set(0, 5, 7);
    scene.add(keyLight);

    // Teal fill light — cool accent on opposite facets
    const fillLight = new THREE.PointLight(0x7FFFD4, 8, 18);
    fillLight.position.set(-5, -3, 4);
    scene.add(fillLight);

    // Rim white light — edge separation from background
    const rimLight = new THREE.PointLight(0xffffff, 5, 16);
    rimLight.position.set(4, -4, 8);
    scene.add(rimLight);

    // Warm back fill — subtle depth
    const backLight = new THREE.PointLight(0x6321EE, 4, 14);
    backLight.position.set(-2, 2, -4);
    scene.add(backLight);

    // ── Resize ───────────────────────────────────────────────────
    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    // ── Animation loop ────────────────────────────────────────────
    let curRotY = 0, curRotX = 0;
    let frame = 0, raf = 0;

    const tick = () => {
      if (destroyed) return;
      frame++;

      // Smooth rotation with mouse parallax
      const targetY = frame * 0.0032 + mouse.x * 0.09;
      const targetX = -mouse.y * 0.055;
      curRotY += (targetY - curRotY) * 0.032;
      curRotX += (targetX - curRotX) * 0.032;

      group.rotation.y = curRotY;
      group.rotation.x = curRotX;

      // Gentle cinematic float
      group.position.y = 0.1 + Math.sin(frame * 0.007) * 0.14;

      // Breathing light pulse
      keyLight.intensity = 16 + Math.sin(frame * 0.025) * 2.5;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100vh",
        pointerEvents: "none", zIndex: 2,
      }}
    />
  );
}
