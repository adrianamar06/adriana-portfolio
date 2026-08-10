"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Top Left Blob */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-sky-200/35 blur-[120px]"
      />

      {/* Bottom Right Blob */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-[150px]"
      />

      {/* Middle Glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 blur-[100px]"
      />
    </>
  );
}