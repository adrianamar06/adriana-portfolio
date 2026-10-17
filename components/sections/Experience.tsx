import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const work = [
  {
    year: "January 2026 — Present",
    title: "Multimedia Production Assistant",
    company: "USF Housing & Residential Education",
    desc: "Produce photography, video, and promotional media for campus events, partnering with staff from production through post-production.",
  },
  {
    year: "May 2026 — August 2026",
    title: "IT & Data Management Intern",
    company: "Help Us Grow Foundation",
    desc: "Managed records for 550+ students and coordinated 60+ lesson plans; improved content creation and communication workflows with Monday.com, custom GPTs, and Avochato.",
  },
  {
    year: "August 2025 — December 2025",
    title: "Peer Mentor",
    company: "University of South Florida",
    desc: "Guided incoming students through academic planning, mentorship, and campus resources as they transitioned to university life.",
  },
];

const leadership = [
  {
    year: "May 2026 — Present",
    title: "Vice President of Technology",
    company: "SHPE USF",
    desc: "Lead a 29-member committee through 8 team leads; oversee two annual hackathons for 500+ participants and $15K in event operations. Founded Build Labs, an 8-week technical program for 25 students.",
  },
  {
    year: "January 2026 — May 2026",
    title: "Hacker's Experience Lead",
    company: "SHPE USF",
    desc: "Led cross-functional coordination of participant logistics, event resources, and the hacker experience for large-scale hackathons.",
  },
  {
    year: "August 2025 — December 2025",
    title: "Technology Director",
    company: "SHPE USF",
    desc: "Developed technical partnerships and worked with student organizations to coordinate workshops, events, and technology initiatives.",
  },
];

type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  desc: string;
};

function Timeline({
  items,
}: {
  items: ExperienceItem[];
}) {
  return (
    <div className="relative">

      {/* Timeline Line */}
      <div className="absolute left-3 top-0 h-full w-px bg-slate-200" />

      <div className="space-y-12">

        {items.map((item) => (
          <div
            key={item.title}
            className="group relative pl-12"
          >

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-[#F5F6F2] bg-sky-400 shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-sky-500" />

            {/* Date */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              {item.year}
            </p>

            {/* Position */}
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            {/* Organization */}
            <p className="mt-1 font-medium text-slate-600">
              {item.company}
            </p>

            {/* Description */}
            <p className="mt-3 max-w-xl leading-7 text-slate-500">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <FadeIn>

        {/* Section Header */}
        <SectionTitle
          number="03"
          title="Experience"
        />

        {/* Two Columns */}
        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          {/* Professional Experience */}
          <div>

            <div className="mb-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                Work
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Professional Experience
              </h2>
            </div>

            <Timeline items={work} />

          </div>

          {/* Leadership */}
          <div>

            <div className="mb-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                Leadership
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Leadership
              </h2>
            </div>

            <Timeline items={leadership} />

          </div>

        </div>

      </FadeIn>
    </section>
  );
}