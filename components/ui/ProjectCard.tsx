"use client";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  image: string;
  tech: string[];
  role: string;
  summary: string;
};

export default function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number; }) {
  return (
    <div className={`group relative flex flex-col gap-4 rounded-2xl bg-white p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg`}>
      <div className="overflow-hidden rounded-md">
        <Image src={project.image} alt={project.title} width={1200} height={700} className="w-full h-56 object-cover transition-transform group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
          <p className="text-sm text-slate-600">{project.summary}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onOpen} className="rounded-full bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 transition" data-cursor>
            View
          </button>
        </div>
      </div>
    </div>
  );
}