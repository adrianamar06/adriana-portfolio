import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const interests = [
  {
    title: "Technology",
    description: "Building, experimenting, and turning ideas into something real.",
    image: "/interests/technology.jpg",
    size: "large",
  },
  {
    title: "Photography",
    description: "Finding little moments worth remembering.",
    image: "/interests/photography.jpg",
    size: "small",
  },
  {
    title: "Healthcare",
    description: "Exploring where technology and healthcare meet.",
    image: "/interests/healthcare.jpg",
    size: "small",
  },
  {
    title: "Leadership",
    description: "Creating communities and bringing people together.",
    image: "/interests/leadership.jpg",
    size: "large",
  },
  {
    title: "Creativity",
    description: "Design, visual storytelling, and making things feel different.",
    image: "/interests/creativity.jpg",
    size: "small",
  },
];

export default function Interests() {
  return (
    <section
      id="interests"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <FadeIn>
        <SectionTitle
          number="03"
          title="Things I'm into"
        />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
          A collection of things that inspire me, keep me curious,
          and influence the way I create.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Technology */}
          <div className="group relative overflow-hidden rounded-[2rem] md:row-span-2">
            <div className="relative h-[520px]">
              <Image
                src={interests[0].image}
                alt={interests[0].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/70">
                  01
                </p>

                <h3 className="text-3xl font-semibold">
                  {interests[0].title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                  {interests[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Photography */}
          <div className="group relative overflow-hidden rounded-[2rem]">
            <div className="relative h-[250px]">
              <Image
                src={interests[1].image}
                alt={interests[1].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  {interests[1].title}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {interests[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="group relative overflow-hidden rounded-[2rem]">
            <div className="relative h-[250px]">
              <Image
                src={interests[2].image}
                alt={interests[2].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  {interests[2].title}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {interests[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="group relative overflow-hidden rounded-[2rem] lg:col-span-2">
            <div className="relative h-[300px]">
              <Image
                src={interests[3].image}
                alt={interests[3].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/70">
                  04
                </p>

                <h3 className="text-3xl font-semibold">
                  {interests[3].title}
                </h3>

                <p className="mt-2 max-w-lg text-sm text-white/80">
                  {interests[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Creativity */}
          <div className="group relative overflow-hidden rounded-[2rem]">
            <div className="relative h-[300px]">
              <Image
                src={interests[4].image}
                alt={interests[4].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white">
                <h3 className="text-2xl font-semibold">
                  {interests[4].title}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {interests[4].description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}