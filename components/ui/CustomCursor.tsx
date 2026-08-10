"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${x - 28}px, ${y - 28}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${x - 120}px, ${y - 120}px, 0)`;
    };

    window.addEventListener("mousemove", onMouseMove);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("pointerenter", () => {
          ringRef.current?.classList.add("cursor-grow");
          dotRef.current?.classList.add("cursor-grow");
        });
        el.addEventListener("pointerleave", () => {
          ringRef.current?.classList.remove("cursor-grow");
          dotRef.current?.classList.remove("cursor-grow");
        });
      });
    };

    addHover();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="custom-cursor-glow" />
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
