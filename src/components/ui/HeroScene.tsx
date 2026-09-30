"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function fibSphere(n: number, r: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const t = phi * i;
    pts.push(new THREE.Vector3(Math.cos(t) * rad * r, y * r, Math.sin(t) * rad * r));
  }
  return pts;
}

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let destroyed = false;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setClearColor(0x050210, 1);

    // ── Camera ────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(52, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 9);

    // ── Scene ─────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff, 0.08));

    // ── Mouse ─────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── Stars ─────────────────────────────────────────────────
    const starPos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = 80 + Math.random() * 60;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      starPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      starPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      starPos[i * 3 + 2] = r * Math.cos(p);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.28, sizeAttenuation: true, transparent: true, opacity: 0.75 })
    ));

    // ── Globe ─────────────────────────────────────────────────
    const R = 2.75;
    const N = 150;
    const CONN = 1.52;
    const group = new THREE.Group();
    group.position.set(2.6, -0.05, 0);

    // Atmosphere halos (BackSide spheres)
    const haloGeos: THREE.BufferGeometry[] = [];
    const halos = [
      { r: 5.2, color: 0x6321EE, opacity: 0.018 },
      { r: 3.8, color: 0x6321EE, opacity: 0.038 },
      { r: 3.05, color: 0x6321EE, opacity: 0.075 },
      { r: 2.95, color: 0x7FFFD4, opacity: 0.028 },
    ];
    for (const h of halos) {
      const g = new THREE.SphereGeometry(h.r, 32, 32);
      haloGeos.push(g);
      group.add(new THREE.Mesh(g,
        new THREE.MeshBasicMaterial({ color: h.color, transparent: true, opacity: h.opacity, side: THREE.BackSide })
      ));
    }

    // Core dark sphere
    const coreGeo = new THREE.SphereGeometry(R, 64, 64);
    group.add(new THREE.Mesh(coreGeo,
      new THREE.MeshStandardMaterial({ color: 0x040110, emissive: 0x280870, emissiveIntensity: 0.42, roughness: 1 })
    ));

    // Wireframe grid
    const wireGeo = new THREE.SphereGeometry(R * 1.003, 22, 11);
    group.add(new THREE.Mesh(wireGeo,
      new THREE.MeshBasicMaterial({ color: 0x6321EE, transparent: true, opacity: 0.075, wireframe: true })
    ));

    // Network nodes + connection lines — also capture edge list for pulses
    const nodes = fibSphere(N, R);
    const edges: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];
    const lineVerts: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < CONN) {
          lineVerts.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
          edges.push({ a: nodes[i].clone(), b: nodes[j].clone() });
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
    group.add(new THREE.LineSegments(lineGeo,
      new THREE.LineBasicMaterial({ color: 0x8040EE, transparent: true, opacity: 0.38 })
    ));
    group.add(new THREE.LineSegments(lineGeo,
      new THREE.LineBasicMaterial({ color: 0x7FFFD4, transparent: true, opacity: 0.08 })
    ));

    // Node dots
    const nodePts = new Float32Array(nodes.flatMap(p => [p.x, p.y, p.z]));
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePts, 3));
    group.add(new THREE.Points(nodeGeo,
      new THREE.PointsMaterial({ color: 0x7FFFD4, size: 0.13, sizeAttenuation: true, transparent: true, opacity: 0.96 })
    ));
    group.add(new THREE.Points(nodeGeo,
      new THREE.PointsMaterial({ color: 0xAA70FF, size: 0.22, sizeAttenuation: true, transparent: true, opacity: 0.28 })
    ));

    // ── Data pulse particles (travel along connection edges) ──
    const PULSE_N = 48;
    const pulseArr = new Float32Array(PULSE_N * 3);
    const pulseGeo = new THREE.BufferGeometry();
    pulseGeo.setAttribute("position", new THREE.BufferAttribute(pulseArr, 3));
    group.add(new THREE.Points(pulseGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.10, sizeAttenuation: true, transparent: true, opacity: 0.95 })
    ));
    const pulseState = Array.from({ length: PULSE_N }, () => ({
      ei: Math.floor(Math.random() * edges.length),
      t: Math.random(),
      speed: 0.28 + Math.random() * 0.52,
    }));

    // Lights inside globe group
    const pl1 = new THREE.PointLight(0x6321EE, 9, 26, 2);
    pl1.position.set(-4, 5, 5);
    group.add(pl1);
    const pl2 = new THREE.PointLight(0x7FFFD4, 4.5, 18, 2);
    pl2.position.set(5, -3, -3);
    group.add(pl2);

    scene.add(group);

    // ── Floating particle cloud ────────────────────────────────
    const pCount = 750;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 4.5 + Math.random() * 8;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pPos[i * 3]     = r * Math.sin(p) * Math.cos(t) + 2.4;
      pPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pPos[i * 3 + 2] = r * Math.cos(p);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const particleMesh = new THREE.Points(pGeo,
      new THREE.PointsMaterial({ color: 0x7FFFD4, size: 0.058, sizeAttenuation: true, transparent: true, opacity: 0.5 })
    );
    scene.add(particleMesh);

    // ── Expanding pulse rings ─────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(R, 0.014, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6321EE, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(2.6, -0.05, 0);
    scene.add(ring);

    const ring2Geo = new THREE.TorusGeometry(R, 0.01, 8, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x7FFFD4, transparent: true, opacity: 0.25 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.position.set(2.6, -0.05, 0);
    ring2.rotation.x = Math.PI / 4;
    scene.add(ring2);

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ────────────────────────────────────────
    let raf = 0;
    let autoRotY = 0;
    let curRotY = 0;
    let curRotX = 0;
    let ring1Scale = 1;
    let ring2Scale = 2.0;
    let lastT = performance.now();

    const animate = () => {
      if (destroyed) return;
      raf = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;

      const scrollFraction = window.scrollY / window.innerHeight;

      autoRotY += dt * 0.16;
      const targetY = autoRotY + mouse.x * 0.38 + scrollFraction * 0.55;
      const targetX = -mouse.y * 0.20 + scrollFraction * 0.12;
      curRotY += (targetY - curRotY) * 0.05;
      curRotX += (targetX - curRotX) * 0.05;
      group.rotation.y = curRotY;
      group.rotation.x = curRotX;

      // Advance data pulses along edges
      for (let i = 0; i < PULSE_N; i++) {
        const ps = pulseState[i];
        ps.t += dt * ps.speed;
        if (ps.t > 1) {
          ps.t = 0;
          ps.ei = Math.floor(Math.random() * edges.length);
          ps.speed = 0.28 + Math.random() * 0.52;
        }
        const { a, b } = edges[ps.ei];
        pulseArr[i * 3]     = a.x + (b.x - a.x) * ps.t;
        pulseArr[i * 3 + 1] = a.y + (b.y - a.y) * ps.t;
        pulseArr[i * 3 + 2] = a.z + (b.z - a.z) * ps.t;
      }
      pulseGeo.attributes.position.needsUpdate = true;

      particleMesh.rotation.y += dt * 0.018;
      particleMesh.rotation.x += dt * 0.006;

      // Expanding pulse rings
      ring1Scale += dt * 0.44;
      if (ring1Scale > 3.9) ring1Scale = 1;
      ring.scale.setScalar(ring1Scale);
      ringMat.opacity = Math.max(0, 0.50 * (1 - (ring1Scale - 1) / 2.9));

      ring2Scale += dt * 0.44;
      if (ring2Scale > 3.9) ring2Scale = 1;
      ring2.scale.setScalar(ring2Scale);
      ring2Mat.opacity = Math.max(0, 0.25 * (1 - (ring2Scale - 1) / 2.9));

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      starGeo.dispose();
      lineGeo.dispose();
      nodeGeo.dispose();
      pulseGeo.dispose();
      pGeo.dispose();
      ringGeo.dispose();
      ring2Geo.dispose();
      coreGeo.dispose();
      wireGeo.dispose();
      for (const g of haloGeos) g.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
