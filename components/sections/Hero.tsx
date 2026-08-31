"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F6F2]">

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/textures/paper-texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      />

      {/* Floating Decorations */}

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute left-[12%] top-[24%]"
      >
        <Sparkles
          size={20}
          className="text-sky-300"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute right-[18%] top-[18%]"
      >
        <Sparkles
          size={16}
          className="text-blue-300"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-10">

        {/* LEFT */}
        <div className="max-w-3xl">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-5">

              <div className="h-px w-14 bg-sky-400" />

              <p className="text-sm uppercase tracking-[0.45em] text-sky-500">
                Hi, I'm Adriana!
              </p>

            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="text-6xl font-blue leading-[0.9] tracking-[-0.06em] text-slate-900 lg:text-8xl"
          >
            Building
            <br />
            experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
            }}
            className="mt-10 max-w-xl text-lg leading-9 text-slate-600"
          >
            Information Technology student at USF, passionate about
            creating experiences that people enjoy.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="mt-12 flex gap-5"
          >
            <Button href="#projects">
              Explore My Work
            </Button>

            <Button
              href="/resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </motion.div>

        </div>

        {/* RIGHT — Avatar */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative hidden lg:block"
        >
          <Image
            src="/avatar.png"
            alt="Adriana"
            width={550}
            height={560}
            priority
            className="object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}