"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    const onPointerMove = (event: PointerEvent) => {
      bubble.style.transform = `translate3d(${event.clientX + 10}px, ${event.clientY + 10}px, 0)`;
      bubble.classList.add("custom-cursor-bubble-visible");
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest("a, button, [data-cursor]")) {
        bubble.classList.add("custom-cursor-bubble-active");
      }
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const fromInteractive = event.target.closest("a, button, [data-cursor]");
      const toInteractive = event.relatedTarget instanceof Element
        ? event.relatedTarget.closest("a, button, [data-cursor]")
        : null;

      if (fromInteractive && !toInteractive) {
        bubble.classList.remove("custom-cursor-bubble-active");
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <div ref={bubbleRef} aria-hidden="true" className="custom-cursor-bubble" />
  );
}
