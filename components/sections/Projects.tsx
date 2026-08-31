"use client";

import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "../../data/projects";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  const activeProject = projects.find(
    (project) => project.id === active
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      <FadeIn>
        <SectionTitle
          number="02"
          title="Projects"
        />
      </FadeIn>

      <div className="mt-12 grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActive(project.id)}
            index={index}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}