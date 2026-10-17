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
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.title} details`}
      className="group relative flex aspect-square w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      <div className="relative h-[72%] w-full shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
            {project.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-slate-600">
            {project.summary}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-sky-500 px-4 py-2 text-sm text-white transition-colors group-hover:bg-sky-600">
          View
        </span>
      </div>
    </button>
  );
}