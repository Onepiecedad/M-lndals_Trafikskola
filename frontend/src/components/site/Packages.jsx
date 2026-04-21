import React from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useLang } from "../../contexts/LanguageContext";
import { packages } from "../../mock/mock";
import useReveal from "../../hooks/useReveal";

export default function Packages({ onBook }) {
  const { t, lang } = useLang();
  return (
    <section id="packages" className="relative py-24 lg:py-32 bg-[var(--mts-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={t.packages.eyebrow} title={t.packages.title} sub={t.packages.sub} />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((p, i) => (
            <PackageCard
              key={p.id}
              pkg={p}
              lang={lang}
              index={i}
              onBook={() => onBook({ type: "package", id: p.id, name: lang === "sv" ? p.name_sv : p.name_en, price: p.price })}
              cta={t.packages.cta}
              popularLabel={t.packages.mostPopular}
              fromLabel={t.packages.from}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub, center = false, invert = false }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      <div
        className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-[var(--mts-red)]" />
        <span
          className={`text-[11px] uppercase tracking-[0.3em] font-semibold ${
            invert ? "text-white/80" : "text-[var(--mts-red)]"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-display text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.02] tracking-tight ${
          invert ? "text-white" : "text-[var(--mts-ink)]"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-[16.5px] leading-relaxed ${
            invert ? "text-white/70" : "text-[var(--mts-muted)]"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function PackageCard({ pkg, lang, index, onBook, cta, popularLabel, fromLabel }) {
  const { ref, visible } = useReveal();
  const popular = pkg.popular;
  const includes = lang === "sv" ? pkg.includes_sv : pkg.includes_en;
  const name = lang === "sv" ? pkg.name_sv : pkg.name_en;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal ${visible ? "in" : ""} group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 ${
        popular
          ? "bg-[var(--mts-ink)] text-white border-[var(--mts-ink)] shadow-[0_30px_80px_-30px_rgba(11,11,15,0.5)]"
          : "bg-white border-[var(--mts-line)] hover:border-[var(--mts-ink)]/30 hover:shadow-[0_30px_80px_-40px_rgba(11,11,15,0.25)]"
      }`}
    >
      {popular && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-[var(--mts-red)] text-white text-[10.5px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
          <Star className="w-3 h-3 fill-white" />
          {popularLabel}
        </div>
      )}
      <div className="p-8">
        <div className="font-display text-[28px] leading-tight">{name}</div>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-[11.5px] uppercase tracking-[0.22em] opacity-60">{fromLabel}</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[52px] leading-none tabular">{pkg.price}</span>
          <span className="text-sm opacity-60 mb-2">kr</span>
        </div>

        <div className={`h-px my-7 ${popular ? "bg-white/10" : "bg-[var(--mts-line)]"}`} />

        <ul className="space-y-3.5">
          {includes.map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start text-[14.5px]">
              <span
                className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center shrink-0 ${
                  popular ? "bg-[var(--mts-red)]/20 text-[var(--mts-red)]" : "bg-[var(--mts-red)]/10 text-[var(--mts-red)]"
                }`}
              >
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span className={popular ? "text-white/85" : "text-[var(--mts-ink)]/85"}>{item}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onBook}
          className={`btn-shine w-full mt-8 h-12 rounded-full font-semibold ${
            popular
              ? "bg-[var(--mts-red)] hover:bg-[var(--mts-red-dark)] text-white"
              : "bg-[var(--mts-ink)] hover:bg-[var(--mts-red)] text-white"
          }`}
        >
          {cta} <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
