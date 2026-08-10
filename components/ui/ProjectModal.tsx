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
};

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void; }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <button onClick={onClose} className="text-slate-500">Close</button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={1200} height={800} className="w-full h-80 object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700">Role</h4>
            <p className="mb-4">{project.role}</p>
            <h4 className="text-sm font-semibold text-slate-700">Tech</h4>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((t) => <span key={t} className="rounded-full bg-sky-50 px-3 py-1 text-sm text-slate-700">{t}</span>)}
            </div>
            <h4 className="text-sm font-semibold text-slate-700">Problem</h4>
            <p className="mb-4 text-slate-600">Short problem statement demonstrating design intent and constraints.</p>
            <h4 className="text-sm font-semibold text-slate-700">Solution</h4>
            <p className="mb-4 text-slate-600">Summary of the implemented solution and impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
