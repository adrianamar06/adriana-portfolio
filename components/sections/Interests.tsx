"use client";

import Image from "next/image";
import FadeIn from "../ui/FadeIn";

const interests = [
  {
    number: "01",
    title: "Group Fitness",
    description:
      "I enjoy bringing people together for movement with purpose.",
    label: "WHAT I LOVE DOING",
    image: "/interests/leadership.jpg",
    size: "lg:col-span-2",
  },

  {
    number: "02",
    title: "Photography",
    description:
      "People, personalities, and little moments.",
    label: "WHAT I NOTICE",
    image: "/interests/photography.jpg",
    size: "",
  },
  {
    number: "03",
    title: "Coffee",
    description:
      "Hot: latte. Iced: Brown sugar shaken espresso. Obviously.",
    label: "LOVE",
    image: "/interests/coffee.jpg",
    size: "",
  },
  {
    number: "04",
    title: "Traveling",
    description:
      "New places, perspectives, and stories.",
    label: "CURIOUS",
    image: "/interests/travel.jpg",
    size: "",
  },
  {
    number: "05",
    title: "Baking",
    description:
      "Banana bread is basically my signature.",
    label: "MY SPECIALTY",
    image: "/interests/banana-bread.jpg",
    size: "",
  },
];

export default function Interests() {
  return (
    <FadeIn>
      <section
        id="interests"
        className="mx-auto max-w-6xl px-8 py-28"
      >

        {/* Heading */}
        <div className="mb-12">

          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sky-500">
            04 — Beyond the screen
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Things I love.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
            The people, places, and little things that keep me curious,
            creative, and grounded.
          </p>

        </div>

        {/* Gallery */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {interests.map((interest) => (
            <article
              key={interest.number}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${interest.size}`}
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <Image
                  src={interest.image}
                  alt={interest.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white/80">
                  {interest.number}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-semibold text-slate-900">
                    {interest.title}
                  </h3>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {interest.label}
                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {interest.description}
                </p>

                {/* Editorial Detail */}
                <div className="mt-6 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />

                  <span className="h-px w-8 bg-sky-200 transition-all duration-500 group-hover:w-14" />

                </div>

              </div>
            </article>
          ))}

        </div>
      </section>
    </FadeIn>
  );
}