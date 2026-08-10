"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Heart,
  GraduationCap,
  Laptop,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const cards = [
  {
    icon: GraduationCap,
    title: "Student",
    text: "Information Technology student passionate about creating meaningful technology.",
  },
  {
    icon: Globe,
    title: "Leader",
    text: "I love leading a diverse team, exploring their strengths to better serve our community.",
  },
  {
    icon: Laptop,
    title: "Builder",
    text: "I enjoy turning silly ideas into polished real world projects.",
  },
  {
    icon: Heart,
    title: "Community",
    text: "Leadership, mentoring, and collaboration motivate everything I build.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAFAF7] py-36"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-sky-100 blur-[140px] opacity-60" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100 blur-[120px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-8">

        <SectionTitle
          number="01"
          title="About Me"
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border border-sky-200" />

            <Image
              src="/about.png"
              alt="Adriana"
              width={450}
              height={550}
              className="relative rounded-[40px] shadow-2xl"
            />

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="mb-5 uppercase tracking-[0.4em] text-sm text-sky-500">
              Nice to meet you!
            </p>

 {/*           <h2 className="text-5xl font-black leading-tight text-slate-900">

              I love building
              <br />
              technology that
              <br />
              feels human.

            </h2> */}

            <p className="mt-8 text-lg leading-9 text-slate-600">

              I'm an Information Technology student who enjoys blending
              software engineering, thoughtful design, and creativity to
              build digital experiences people genuinely enjoy using.

            </p>

     {/*       <p className="mt-6 text-lg leading-9 text-slate-600">

              Whether I'm developing full-stack applications, organizing
              hackathons, or leading technical teams, I'm always thinking
              about accessibility, collaboration, and the people behind
              the technology.

            </p> */}

            <div className="mt-14 grid gap-5 sm:grid-cols-2">

              {cards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition"
                >
                  <card.icon
                    size={18}
                    className="mb-4 text-sky-500"
                  />

                  <h3 className="font-semibold text-lg text-slate-800">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {card.text}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}