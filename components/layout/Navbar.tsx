"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      const currentSection = sections.find(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > activationLine;
      });

      setActiveSection(currentSection?.id ?? null);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const linkClass = (sectionId: string) =>
    `relative shrink-0 py-1 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-sky-500 after:transition-transform ${
      activeSection === sectionId
        ? "text-sky-600 after:scale-x-100"
        : "text-slate-700 after:scale-x-0 hover:text-sky-500"
    }`;

  return (
    <header className="fixed left-1/2 top-3 z-50 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 sm:top-5">
      <nav className="flex items-center gap-4 overflow-x-auto rounded-full bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md sm:gap-8 sm:px-6">
        {/* Logo */}
        <a
          href="#"
          className="shrink-0 font-bold text-sky-500 transition-colors hover:text-sky-600"
        >
          Adriana
        </a>

        {/* Navigation */}
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeSection === id ? "location" : undefined}
            className={linkClass(id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}