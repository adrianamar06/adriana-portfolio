import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import StackCard from "../ui/StackCard";

const data = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript", "TypeScript"] },
  { title: "Frameworks", items: ["Next.js", "React", "Tailwind"] },
  { title: "Cloud", items: ["Supabase", "Firebase"] },
  { title: "Tools", items: ["Git", "Figma"] },
];

export default function TechStack() {
  return (
    <section id="tech" className="mx-auto max-w-6xl px-8 py-24">
      <FadeIn>
        <SectionTitle number="02" title="Tech Stack" />
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((col) => (
          <StackCard key={col.title} title={col.title} items={col.items} />
        ))}
      </div>
    </section>
  );
}
