"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let raf: number;
    let disposed = false;

    import("three").then((THREE) => {
      if (disposed) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 1, 3000);
      camera.position.z = 500;

      // White stars
      const N = 2200;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 2400;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 2400;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 1600 - 300;
      }
      const geoW = new THREE.BufferGeometry();
      geoW.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(geoW, new THREE.PointsMaterial({
        size: 1.2, sizeAttenuation: true,
        color: 0xffffff, transparent: true, opacity: 0.55,
      })));

      // Purple accent stars
      const N2 = 380;
      const pos2 = new Float32Array(N2 * 3);
      for (let i = 0; i < N2; i++) {
        pos2[i * 3]     = (Math.random() - 0.5) * 2000;
        pos2[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        pos2[i * 3 + 2] = (Math.random() - 0.5) * 1200;
      }
      const geoP = new THREE.BufferGeometry();
      geoP.setAttribute("position", new THREE.BufferAttribute(pos2, 3));
      const purpleStars = new THREE.Points(geoP, new THREE.PointsMaterial({
        size: 2.4, sizeAttenuation: true,
        color: 0x8040FF, transparent: true, opacity: 0.38,
      }));
      scene.add(purpleStars);

      // Teal accent stars
      const pos3 = new Float32Array(N2 * 3);
      for (let i = 0; i < N2; i++) {
        pos3[i * 3]     = (Math.random() - 0.5) * 2200;
        pos3[i * 3 + 1] = (Math.random() - 0.5) * 2200;
        pos3[i * 3 + 2] = (Math.random() - 0.5) * 1400;
      }
      const geoT = new THREE.BufferGeometry();
      geoT.setAttribute("position", new THREE.BufferAttribute(pos3, 3));
      const tealStars = new THREE.Points(geoT, new THREE.PointsMaterial({
        size: 2.0, sizeAttenuation: true,
        color: 0x7FFFD4, transparent: true, opacity: 0.28,
      }));
      scene.add(tealStars);

      let t = 0;
      const animate = () => {
        if (disposed) return;
        raf = requestAnimationFrame(animate);
        t += 0.00028;

        geoW.attributes.position.array as Float32Array;
        purpleStars.rotation.y = t * 0.09;
        purpleStars.rotation.x = Math.sin(t * 0.04) * 0.04;
        tealStars.rotation.y = -t * 0.07;
        tealStars.rotation.x = Math.cos(t * 0.05) * 0.03;

        // Gentle camera breathe
        camera.position.x = Math.sin(t * 0.25) * 18;
        camera.position.y = Math.cos(t * 0.18) * 12;

        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        if (!canvas) return;
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(raf);
        renderer.dispose();
      };
    });

    return () => { disposed = true; cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
