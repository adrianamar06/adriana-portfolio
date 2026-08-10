import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

export default function Leadership() {
  const stats = [
    { label: "Members", value: "30+" },
    { label: "Hackathons", value: "2" },
    { label: "Participants", value: "300+" },
    { label: "Sponsors", value: "15+" },
  ];

  return (
    <section id="leadership" className="mx-auto max-w-6xl px-8 py-24">
      <FadeIn>
        <SectionTitle number="04" title="Leadership" />
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow">
            <div className="text-3xl font-bold text-sky-600">{s.value}</div>
            <div className="mt-2 text-sm text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
