"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

const projects = [
  {
    id: "panelly",
    title: "Panelly",
    image: "/projects/panelly/panelly.png",
    tech: ["Next.js", "Supabase"],
    role: "Full-stack",
    summary: "A magazine-like project showcase with beautiful layouts.",
  },
  {
    id: "travel-planner",
    title: "Custom Signature Generator",
    image: "/projects/signature/signature.png",
    tech: ["React", "Firebase"],
    role: "Frontend",
    summary: "Plan trips with collaborative itineraries.",
  },
];

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-8 py-24">
      <FadeIn>
        <SectionTitle number="02" title="Projects" />
      </FadeIn>

      <div className="mt-12 grid gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setActive(p.id)} index={i} />
        ))}
      </div>

      {active && (
        <ProjectModal project={projects.find((p) => p.id === active)!} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
