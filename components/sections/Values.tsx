import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const values = ["Design with empathy.", "Build for everyone.", "Stay curious.", "Never stop learning."];

export default function Values() {
  return (
    <section id="values" className="mx-auto max-w-6xl px-8 py-24">
      <FadeIn>
        <SectionTitle number="06" title="What I Believe" />
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map((v) => (
          <div key={v} className="rounded-2xl border border-slate-100 bg-white p-8 text-xl font-semibold text-slate-900">{v}</div>
        ))}
      </div>
    </section>
  );
}
