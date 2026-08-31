"use client";

import { useEffect } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image: string;
  tech: string[];
  role: string;
  summary: string;
  github?: string;
  devpost?: string;
  liveDemo?: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          aria-label="Close project"
        >
          ×
        </button>

        {/* Header */}
        <div className="pr-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-500">
            {project.role}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {project.title}
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            {project.summary}
          </p>
        </div>

        {/* Image */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Technologies
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-sky-50 px-4 py-2 text-sm text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Role
            </p>

            <p className="mt-3 text-slate-700">
              {project.role}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-sky-500 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
              >
                Live Demo ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-500"
              >
                GitHub ↗
              </a>
            )}

            {project.devpost && (
              <a
                href={project.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-500"
              >
                Devpost ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}