import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-8 py-24">
      <FadeIn>
        <SectionTitle number="07" title="Let's build something amazing together" />
      </FadeIn>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="mailto:hi@adriana.com" className="rounded-full bg-sky-500 px-6 py-3 text-white">Email</a>
          <a href="#" className="rounded-full border border-slate-200 px-6 py-3">LinkedIn</a>
          <a href="#" className="rounded-full border border-slate-200 px-6 py-3">GitHub</a>
        </div>
        <p className="text-sm text-slate-600">Maybe a little butterfly lands here.</p>
      </div>
    </section>
  );
}
