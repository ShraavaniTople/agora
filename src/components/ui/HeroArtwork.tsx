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

    // ── Renderer ────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x050210, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;

    // ── Camera ───────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 1000);
    camera.position.set(0, 0, 9);

    const scene = new THREE.Scene();

    // ── Mouse ────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── Stars ─────────────────────────────────────────────────────
    {
      const pos = new Float32Array(3000 * 3);
      for (let i = 0; i < 3000; i++) {
        const r = 70 + Math.random() * 60;
        const t = Math.random() * Math.PI * 2;
        const p = Math.acos(2 * Math.random() - 1);
        pos[i * 3]     = r * Math.sin(p) * Math.cos(t);
        pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
        pos[i * 3 + 2] = r * Math.cos(p);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(g,
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.20, transparent: true, opacity: 0.50, sizeAttenuation: true })
      ));
    }

    // ── Main group — right-centre ─────────────────────────────────
    const group = new THREE.Group();
    group.position.set(1.9, 0.1, 0);
    scene.add(group);

    // Torus knot — trefoil (p=2, q=3): absolutely nothing like a sphere
    const knotGeo  = new THREE.TorusKnotGeometry(2.4, 0.62, 240, 38, 2, 3);
    const knotMat  = new THREE.MeshStandardMaterial({
      color:              new THREE.Color(0x120040),
      emissive:           new THREE.Color(0x5218cc),
      emissiveIntensity:  0.30,
      metalness:          0.98,
      roughness:          0.06,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    group.add(knot);

    // Thin wireframe halo on the knot itself (not a sphere)
    group.add(new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.44, 0.65, 100, 18, 2, 3),
      new THREE.MeshBasicMaterial({ color: 0x7B35FF, wireframe: true, transparent: true, opacity: 0.07 })
    ));

    // Floating dust particles (cloud around the knot — not a ring or sphere)
    {
      const n = 700;
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        // Random points in a box around the knot, biased toward the center
        pos[i * 3]     = (Math.random() - 0.5) * 12;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      group.add(new THREE.Points(g,
        new THREE.PointsMaterial({ color: 0x9940FF, size: 0.040, transparent: true, opacity: 0.60, sizeAttenuation: true })
      ));
    }

    // ── Lighting ─────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.03));

    // Purple key — top-left, strong
    const key = new THREE.PointLight(0x8833FF, 22, 26);
    key.position.set(-2, 6, 7);
    scene.add(key);

    // Teal fill — bottom-right
    const fill = new THREE.PointLight(0x7FFFD4, 12, 22);
    fill.position.set(5, -4, 4);
    scene.add(fill);

    // White rim — behind-right (makes edges pop from dark bg)
    const rim = new THREE.PointLight(0xffffff, 7, 20);
    rim.position.set(4, 3, -3);
    scene.add(rim);

    // Deep purple back glow
    const back = new THREE.PointLight(0x6321EE, 6, 16);
    back.position.set(-3, 0, -5);
    scene.add(back);

    // ── Resize ───────────────────────────────────────────────────
    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    // ── Animate ───────────────────────────────────────────────────
    let curY = 0, curX = 0, frame = 0, raf = 0;

    const tick = () => {
      if (destroyed) return;
      frame++;

      const tY = frame * 0.0028 + mouse.x * 0.08;
      const tX = -mouse.y * 0.05;
      curY += (tY - curY) * 0.028;
      curX += (tX - curX) * 0.028;

      group.rotation.y = curY;
      group.rotation.x = curX;
      // Gentle vertical float
      group.position.y = 0.1 + Math.sin(frame * 0.0065) * 0.16;
      // Subtle breathing light
      key.intensity = 22 + Math.sin(frame * 0.020) * 3.5;

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
