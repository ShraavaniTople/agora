"use client";
import { useState, useEffect } from "react";

export default function BottomBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: 36,
        paddingLeft: 24,
        paddingRight: 24,
        background: "rgba(5,2,16,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.10em",
        color: "rgba(255,255,255,0.30)",
        fontFamily: "var(--font-geist-mono)",
      }}
    >
      <span>©2026 AGORA</span>
      <span style={{ color: "rgba(255,255,255,0.20)" }}>
        (UTC-5) · {time}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10 }}>♪</span> Sound
      </span>
    </div>
  );
}
