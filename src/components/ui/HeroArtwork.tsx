"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Chrome-purple matcap — gives the "liquid metal" look without HDR env maps */
function buildMatcap(): THREE.Texture {
  const size = 512;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;

  ctx.save();
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.clip();

  /* Base — deep space purple */
  ctx.fillStyle = "rgb(6,3,22)";
  ctx.fillRect(0, 0, size, size);

  /* Hot-white primary highlight, top-left (chrome catching daylight) */
  const h1 = ctx.createRadialGradient(size * 0.27, size * 0.22, 0, size * 0.27, size * 0.22, size * 0.44);
  h1.addColorStop(0,    "rgba(255,252,255,1.0)");
  h1.addColorStop(0.10, "rgba(238,215,255,0.96)");
  h1.addColorStop(0.28, "rgba(160,88,255,0.72)");
  h1.addColorStop(0.55, "rgba(80,18,190,0.28)");
  h1.addColorStop(1.0,  "rgba(0,0,0,0)");
  ctx.fillStyle = h1;
  ctx.fillRect(0, 0, size, size);

  /* Purple body — midtone glow */
  const h2 = ctx.createRadialGradient(size * 0.60, size * 0.54, 0, size * 0.60, size * 0.54, size * 0.42);
  h2.addColorStop(0,    "rgba(88,22,228,0.80)");
  h2.addColorStop(0.44, "rgba(52,10,152,0.42)");
  h2.addColorStop(1.0,  "rgba(0,0,0,0)");
  ctx.fillStyle = h2;
  ctx.fillRect(0, 0, size, size);

  /* Teal reflection — bottom-right */
  const h3 = ctx.createRadialGradient(size * 0.82, size * 0.77, 0, size * 0.82, size * 0.77, size * 0.24);
  h3.addColorStop(0,    "rgba(127,255,212,0.74)");
  h3.addColorStop(0.45, "rgba(60,200,170,0.34)");
  h3.addColorStop(1.0,  "rgba(0,0,0,0)");
  ctx.fillStyle = h3;
  ctx.fillRect(0, 0, size, size);

  /* Cool rim — right edge */
  const h4 = ctx.createRadialGradient(size * 0.90, size * 0.38, 0, size * 0.90, size * 0.38, size * 0.20);
  h4.addColorStop(0,   "rgba(205,225,255,0.54)");
  h4.addColorStop(1.0, "rgba(0,0,0,0)");
  ctx.fillStyle = h4;
  ctx.fillRect(0, 0, size, size);

  /* Shadow pool — bottom */
  const h5 = ctx.createRadialGradient(size * 0.46, size * 0.90, 0, size * 0.46, size * 0.90, size * 0.26);
  h5.addColorStop(0,   "rgba(14,4,48,0.78)");
  h5.addColorStop(1.0, "rgba(0,0,0,0)");
  ctx.fillStyle = h5;
  ctx.fillRect(0, 0, size, size);

  ctx.restore();
  return new THREE.CanvasTexture(c);
}

function buildGlowSpriteTex(r: number, g: number, b: number, peak = 0.60): THREE.Texture {
  const s = 256;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const ctx = c.getContext("2d")!;
  const grad = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0,    `rgba(${r},${g},${b},${peak})`);
  grad.addColorStop(0.32, `rgba(${r},${g},${b},${peak * 0.42})`);
  grad.addColorStop(0.65, `rgba(${r},${g},${b},${peak * 0.12})`);
  grad.addColorStop(1.0,  "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

export default function HeroArtwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let destroyed = false;

    const W = window.innerWidth;
    const H = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x050210, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    const camera = new THREE.PerspectiveCamera(44, W / H, 0.1, 1000);
    camera.position.set(0, 0, 12);

    const scene = new THREE.Scene();

    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    /* Stars */
    {
      const n = 2800;
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const r = 85 + Math.random() * 65;
        const t = Math.random() * Math.PI * 2;
        const p = Math.acos(2 * Math.random() - 1);
        pos[i * 3]     = r * Math.sin(p) * Math.cos(t);
        pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
        pos[i * 3 + 2] = r * Math.cos(p);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(g,
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.17, transparent: true, opacity: 0.42, sizeAttenuation: true })
      ));
    }

    /* Purple glow aura behind knot */
    const purpleGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: buildGlowSpriteTex(99, 33, 238, 0.58),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    purpleGlow.scale.set(28, 28, 1);
    purpleGlow.position.set(2.6, 0.1, -2);
    scene.add(purpleGlow);

    /* Teal accent glow */
    const tealGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: buildGlowSpriteTex(127, 255, 212, 0.38),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    tealGlow.scale.set(15, 15, 1);
    tealGlow.position.set(5.5, -2.2, -1);
    scene.add(tealGlow);

    /* Main group — chrome knot, right side */
    const group = new THREE.Group();
    group.position.set(2.5, 0, 0);
    scene.add(group);

    const matcap = buildMatcap();
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.85, 0.74, 360, 52, 2, 3),
      new THREE.MeshMatcapMaterial({ matcap })
    );
    group.add(knot);

    /* Hair-thin wireframe overlay — barely visible, adds depth */
    group.add(new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.90, 0.76, 120, 26, 2, 3),
      new THREE.MeshBasicMaterial({ color: 0xAA70FF, wireframe: true, transparent: true, opacity: 0.036 })
    ));

    /* Dust cloud */
    {
      const n = 480;
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 15;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      group.add(new THREE.Points(g,
        new THREE.PointsMaterial({ color: 0xAA70FF, size: 0.030, transparent: true, opacity: 0.45, sizeAttenuation: true })
      ));
    }

    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    let curY = 0, curX = 0, frame = 0, raf = 0;

    const tick = () => {
      if (destroyed) return;
      frame++;

      const tY = frame * 0.0020 + mouse.x * 0.10;
      const tX = -mouse.y * 0.06;
      curY += (tY - curY) * 0.022;
      curX += (tX - curX) * 0.022;

      group.rotation.y = curY;
      group.rotation.x = curX;
      group.position.y = Math.sin(frame * 0.0058) * 0.22;

      /* Breathing glow */
      const pulse = 1 + Math.sin(frame * 0.016) * 0.10;
      purpleGlow.scale.set(28 * pulse, 28 * pulse, 1);

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
      matcap.dispose();
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
