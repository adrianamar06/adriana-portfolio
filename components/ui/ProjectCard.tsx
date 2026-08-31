"use client";

import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image: string;
  tech: string[];
  role: string;
  summary: string;
  github?: string;
  link?: string;
  linkLabel?: string;
};

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
  index: number;
};

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl bg-white p-6 shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">

      {/* Project Image */}
      <div className="overflow-hidden rounded-md">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Information */}
      <div className="flex items-center justify-between gap-6">

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600">
            {project.summary}
          </p>
        </div>

        {/* View Button */}
        <button
          onClick={onOpen}
          className="shrink-0 rounded-full bg-sky-500 px-4 py-2 text-sm text-white transition hover:bg-sky-600"
        >
          View
        </button>

      </div>
    </div>
  );
}