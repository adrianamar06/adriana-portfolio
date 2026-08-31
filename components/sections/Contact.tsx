import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adrianamartinez06",
  },
  {
    name: "GitHub",
    href: "https://github.com/adrianamar06",
  },
  {
    name: "Email",
    href: "mailto:adrianamelissa06@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <FadeIn>
        <SectionTitle
          number="05"
          title="Let's connect"
        />

        <div className="mt-20 grid lg:grid-cols-2">
          <div />

          <div>
            <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-sky-500">
              Find me online
            </p>

            <div className="border-t border-slate-200">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={
                    link.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center justify-between border-b border-slate-200 py-7 text-2xl font-medium text-slate-900 transition-colors hover:text-sky-500"
                >
                  <span>{link.name}</span>

                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}