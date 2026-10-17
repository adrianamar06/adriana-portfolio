"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";
import FadeIn from "../ui/FadeIn";

type Interest = {
  number: string;
  title: string;
  summary: string;
  overview: string;
  label: string;
  images: [string, string | null, string | null];
  size: string;
};

const interests: Interest[] = [
  {
    number: "01",
    title: "Group Fitness",
    summary: "I enjoy bringing people together for movement with purpose.",
    overview:
      "Group fitness brings movement and community together. I enjoy the shared energy of working toward something alongside other people.",
    label: "WHAT I LOVE DOING",
    images: ["/interests/fitness.jpg", "/interests/fitness2.jpg", "/interests/fitness3.jpg"],
    size: "lg:col-span-2",
  },

  {
    number: "02",
    title: "Photography",
    summary: "I love noticing people, personalities, and little moments.",
    overview:
      "Photography helps me slow down and pay attention to the details that make people and everyday moments feel distinct.",
    label: "WHAT I NOTICE",
    images: ["/interests/photography.jpg", "/interests/photography2.jpg", null],
    size: "",
  },
  {
    number: "03",
    title: "Coffee",
    summary: "Hot latte or iced brown sugar shaken espresso, depending on the day.",
    overview:
      "I have a favorite for either mood: the comfort of a hot latte or the sweetness of an iced brown sugar shaken espresso. Love to pair it with a dessert and share with loved ones.",
    label: "LOVE",
    images: ["/interests/coffee.jpg", "/interests/coffee2.jpeg", "/interests/coffee3.jpeg"],
    size: "",
  },
  {
    number: "04",
    title: "Traveling",
    summary: "I love discovering new places, perspectives, and stories.",
    overview:
      "Traveling lets me step into unfamiliar places, see things from a different perspective, and come home with new stories. Plus, great pictures.",
    label: "CURIOUS",
    images: ["/interests/travel.jpg", "/interests/travel2.jpeg", "/interests/travel3.jpeg"],
    size: "",
  },
  {
    number: "05",
    title: "Baking",
    summary: "Banana bread is basically my signature.",
    overview:
      "If you know me, you have probably tried my baked goods. Baking gives me a chance to be creative and make something comforting to share.",
    label: "MY SPECIALTY",
    images: ["/interests/banana-bread.jpg", "/interests/banana-bread2.jpg", "/interests/bake.jpg"],
    size: "",
  },
];

export default function Interests() {
  const [activeInterest, setActiveInterest] = useState<(typeof interests)[number] | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  return (
    <>
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
              role="button"
              tabIndex={0}
              aria-label={`Open ${interest.title} details`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveInterest(interest);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  triggerRef.current = event.currentTarget;
                  setActiveInterest(interest);
                }
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-4 ${interest.size}`}
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <Image
                  src={interest.images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white/80">
                  {interest.number}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-800 opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <ArrowUpRight size={18} />
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
                  {interest.summary}
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

      {activeInterest && (
        <InterestModal
          interest={activeInterest}
          triggerRef={triggerRef}
          onClose={() => setActiveInterest(null)}
        />
      )}
    </>
  );
}

function InterestModal({
  interest,
  triggerRef,
  onClose,
}: {
  interest: (typeof interests)[number];
  triggerRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = interest.images[activeImageIndex];

  const showImage = (direction: -1 | 1) => {
    setActiveImageIndex((currentIndex) =>
      (currentIndex + direction + interest.images.length) % interest.images.length,
    );
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [triggerRef]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="interest-modal-title"
      aria-describedby="interest-modal-description"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          showImage(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          showImage(1);
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm sm:p-6"
    >
      <div className="relative my-auto grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl bg-white shadow-2xl md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-h-0 flex-col bg-slate-50">
          <div className="relative min-h-72 flex-1 sm:min-h-96 md:min-h-[28rem]">
            {activeImage ? (
              <Image
                src={activeImage}
                alt={`${interest.title}, photo ${activeImageIndex + 1}`}
                fill
                sizes="(max-width: 767px) 100vw, 55vw"
                className="object-cover"
              />
            ) : (
              <div className="grid h-full min-h-72 place-items-center bg-sky-50 text-sky-700 sm:min-h-96 md:min-h-[28rem]">
                <div className="flex flex-col items-center gap-3">
                  <ImagePlus size={30} strokeWidth={1.5} />
                  <span className="text-sm font-medium">Photo placeholder</span>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => showImage(-1)}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-800 shadow-md transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => showImage(1)}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-800 shadow-md transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <ChevronRight size={22} />
            </button>
            <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/65 px-3 py-1 text-xs font-medium text-white">
              {String(activeImageIndex + 1).padStart(2, "0")} / {String(interest.images.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-4">
            {interest.images.map((image, index) => (
              <button
                key={`${interest.title}-photo-${index}`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={image ? `Show ${interest.title} photo ${index + 1}` : `Photo ${index + 1} placeholder`}
                aria-pressed={activeImageIndex === index}
                className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${activeImageIndex === index ? "border-sky-500" : "border-transparent hover:border-sky-200"}`}
              >
                {image ? (
                  <Image src={image} alt="" fill sizes="(max-width: 767px) 30vw, 18vw" className="object-cover" />
                ) : (
                  <span className="flex h-full flex-col items-center justify-center gap-1 bg-white text-sky-600">
                    <ImagePlus size={18} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium">Add photo</span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-7 sm:p-9 md:p-10">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close interest details"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-sky-50 text-slate-600 transition-colors hover:bg-sky-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 pr-12 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            <span>{interest.number}</span>
            <span className="h-px w-8 bg-sky-200" />
            <span>{interest.label}</span>
          </div>

          <h2 id="interest-modal-title" className="mt-5 text-3xl font-bold text-slate-900">
            {interest.title}
          </h2>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Overview
          </p>

          <p id="interest-modal-description" className="mt-3 text-base leading-7 text-slate-600">
            {interest.overview}
          </p>
        </div>
      </div>
    </div>
  );
}