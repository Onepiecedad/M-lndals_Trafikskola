import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { SectionHeader } from "./Packages";
import useReveal from "../../hooks/useReveal";
import { Car, CalendarClock, Sparkles } from "lucide-react";

const IMAGE_A = "https://images.pexels.com/photos/9518244/pexels-photo-9518244.jpeg?auto=compress&w=1400";
const IMAGE_B = "https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?w=1400&q=90";

export default function About() {
  const { t } = useLang();
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white border-y border-[var(--mts-line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative" ref={ref}>
            <div
              className={`reveal ${visible ? "in" : ""} relative aspect-[4/5] rounded-3xl overflow-hidden`}
            >
              <img src={IMAGE_A} alt="Instructor and student" className="w-full h-full object-cover" />
            </div>
            <div
              className={`reveal ${visible ? "in" : ""} hidden sm:block absolute -bottom-10 -right-4 lg:right-10 w-52 lg:w-64 aspect-[4/5] rounded-3xl overflow-hidden border-[10px] border-[var(--mts-cream)] shadow-2xl`}
              style={{ transitionDelay: "200ms" }}
            >
              <img src={IMAGE_B} alt="Modern car interior" className="w-full h-full object-cover" />
            </div>
            <div
              className={`reveal ${visible ? "in" : ""} hidden lg:flex absolute top-6 -left-6 flex-col items-center justify-center w-28 h-28 rounded-full bg-[var(--mts-red)] text-white shadow-xl`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="font-display text-4xl leading-none">90+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] mt-1">Years</div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} />
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--mts-ink)]/80">{t.about.p1}</p>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--mts-ink)]/80">{t.about.p2}</p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <Feature icon={<Car />} title={t.about.feature1t} desc={t.about.feature1d} />
              <Feature icon={<CalendarClock />} title={t.about.feature2t} desc={t.about.feature2d} />
              <Feature icon={<Sparkles />} title={t.about.feature3t} desc={t.about.feature3d} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="p-5 rounded-2xl bg-[var(--mts-cream)] border border-[var(--mts-line)] hover:border-[var(--mts-ink)]/30 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-[var(--mts-ink)] text-white grid place-items-center mb-3 [&>svg]:w-4 [&>svg]:h-4">
        {icon}
      </div>
      <div className="font-semibold text-[14.5px] mb-1">{title}</div>
      <div className="text-[13px] text-[var(--mts-muted)] leading-relaxed">{desc}</div>
    </div>
  );
}
