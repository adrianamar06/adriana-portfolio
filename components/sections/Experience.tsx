import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const work = [
  {
    year: "May 2026 - August 2026",
    title: "IT & Data Intern",
    company: "Help Us Grow Foundation",
    desc: "Managed student data, automated reports, and improved data organization using Google Sheets and AI tools.",
  },
  {
    year: "January 2026 - Present",
    title: "Multimedia Production Assistant",
    company: "USF Housing & Residential Education",
    desc: "Produced digital media, photography, and promotional content for campus events.",
  },
  {
    year: "August 2026 - December 2026",
    title: "Peer Mentor",
    company: "University of South Florida",
    desc: "Provided academic support to incoming freshmen, ensuring academic and personal success.",
  },
];

const leadership = [
  {
    year: "May 2026 - Present",
    title: "Vice President of Technology",
    company: "SHPE USF",
    desc: "Lead a team developing HackaBull, HackJam, websites, Discord, and technical initiatives.",
  },
  {
    year: "January 2026 - May 2026",
    title: "Hacker's Experience Lead",
    company: "SHPE USF",
    desc: "Planned community events and increased member engagement.",
  },
  {
    year: "August 2025 - December 2025",
    title: "Technology Director",
    company: "SHPE USF",
    desc: "C",
  },
];

function Timeline({
  items,
}: {
  items: {
    year: string;
    title: string;
    company: string;
    desc: string;
  }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-slate-200" />

      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.title} className="relative pl-12">
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-white bg-sky-400 shadow-md" />

            <p className="text-sm font-medium uppercase tracking-widest text-sky-500">
              {item.year}
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="font-medium text-slate-600">
              {item.company}
            </p>

            <p className="mt-2 leading-7 text-slate-500">
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
        <SectionTitle
          number="05"
          title="Experience"
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          {/* Work */}

          <div>
            <h2 className="mb-10 text-3xl font-bold text-slate-900">
              Professional Experience
            </h2>

            <Timeline items={work} />
          </div>

          {/* Leadership */}

          <div>
            <h2 className="mb-10 text-3xl font-bold text-slate-900">
              Leadership
            </h2>

            <Timeline items={leadership} />
          </div>

        </div>
      </FadeIn>
    </section>
  );
}