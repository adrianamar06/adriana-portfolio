"use client";
import React, { useEffect, useState } from "react";

export default function FloatingButterfly({ initial = 4 }: { initial?: number }) {
  const [butterflies, setButterflies] = useState(() => {
    return Array.from({ length: initial }).map((_, i) => ({
      id: i + 1,
      left: `${10 + i * 18}%`,
      top: `${8 + (i % 3) * 6}%`,
    }));
  });

  useEffect(() => {
    const onSpawn = (e: any) => {
      const next = { id: Date.now(), left: `${Math.random() * 80}%`, top: `${Math.random() * 50}%` };
      setButterflies((s) => [...s.slice(-8), next]);
    };

    window.addEventListener("spawnButterfly", onSpawn as EventListener);
    return () => window.removeEventListener("spawnButterfly", onSpawn as EventListener);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none">
      {butterflies.map((b) => (
        <div
          key={b.id}
          className={`absolute z-30 opacity-95 transform-gpu butterfly`}
          style={{ left: b.left, top: b.top }}
        >
          <span className="block text-[18px] leading-none">🦋</span>
        </div>
      ))}
    </div>
  );
}
