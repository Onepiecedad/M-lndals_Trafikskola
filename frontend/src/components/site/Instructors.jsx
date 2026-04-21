import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { instructors } from "../../mock/mock";
import { SectionHeader } from "./Packages";
import useReveal from "../../hooks/useReveal";

export default function Instructors() {
  const { t, pick } = useLang();
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--mts-ink)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(215,38,61,0.18),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow={t.instructors.eyebrow}
          title={t.instructors.title}
          invert
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {instructors.map((p, i) => (
            <Card key={i} p={p} i={i} pick={pick} yearsLabel={t.instructors.years} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ p, i, pick, yearsLabel }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 90}ms` }}
      className={`reveal ${visible ? "in" : ""} group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-500`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.06]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[var(--mts-ink)] via-[var(--mts-ink)]/85 to-transparent">
        <div className="font-display text-[26px] leading-tight">{p.name}</div>
        <div className="text-[13px] uppercase tracking-[0.18em] text-white/60 mt-1">
          {pick(p, "role")}
        </div>
        <div className="mt-3 text-[13px] text-[var(--mts-gold)]">
          {p.years}+ {yearsLabel}
        </div>
      </div>
    </div>
  );
}
