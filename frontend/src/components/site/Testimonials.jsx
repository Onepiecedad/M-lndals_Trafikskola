import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { testimonials } from "../../mock/mock";
import { SectionHeader } from "./Packages";
import useReveal from "../../hooks/useReveal";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const { t, lang } = useLang();
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--mts-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((tm, i) => (
            <Card key={i} tm={tm} i={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ tm, i, lang }) {
  const { ref, visible } = useReveal();
  const text = lang === "sv" ? tm.text_sv : tm.text_en;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 90}ms` }}
      className={`reveal ${visible ? "in" : ""} relative bg-white rounded-3xl p-7 border border-[var(--mts-line)] hover:shadow-[0_30px_80px_-40px_rgba(11,11,15,0.25)] transition-all duration-500 hover:-translate-y-1`}
    >
      <Quote className="w-8 h-8 text-[var(--mts-red)] opacity-20 absolute top-5 right-5" />
      <div className="flex items-center gap-1.5">
        {[...Array(tm.rating)].map((_, idx) => (
          <Star key={idx} className="w-4 h-4 fill-[var(--mts-gold)] text-[var(--mts-gold)]" />
        ))}
      </div>
      <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--mts-ink)]/90 font-serif italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-7 flex items-center gap-3">
        <img src={tm.image} alt={tm.name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-[14px]">{tm.name}</div>
          <div className="text-[12px] text-[var(--mts-muted)]">{tm.city}</div>
        </div>
      </div>
    </div>
  );
}
