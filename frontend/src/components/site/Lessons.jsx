import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { lessons } from "../../mock/mock";
import { SectionHeader } from "./Packages";
import useReveal from "../../hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

export default function Lessons({ onBook }) {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal();
  return (
    <section id="lessons" className="relative py-24 lg:py-32 bg-white border-y border-[var(--mts-line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={t.lessons.eyebrow} title={t.lessons.title} sub={t.lessons.sub} />

            <div
              ref={ref}
              className={`reveal ${visible ? "in" : ""} mt-10 relative aspect-[4/5] rounded-3xl overflow-hidden`}
            >
              <img
                src="https://images.unsplash.com/photo-1693291539335-0a289dead8e2?w=1400&q=90"
                alt="Manual gear shift"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[11px] uppercase tracking-[0.25em] text-white/70 mb-2">
                  Manual · Automat
                </div>
                <div className="font-display text-2xl leading-tight">
                  {lang === "sv"
                    ? "Moderna bilar. Erfarna lärare."
                    : "Modern cars. Experienced instructors."}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--mts-line)] overflow-hidden bg-[var(--mts-cream)]">
              <div className="grid grid-cols-12 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[var(--mts-muted)] border-b border-[var(--mts-line)]">
                <div className="col-span-5">{t.lessons.col1}</div>
                <div className="col-span-3">{t.lessons.col2}</div>
                <div className="col-span-2 text-right">{t.lessons.col3}</div>
                <div className="col-span-2 text-right"> </div>
              </div>
              {lessons.map((l, i) => (
                <LessonRow
                  key={i}
                  qty={lang === "sv" ? l.qty_sv : l.qty_en}
                  dur={l.dur}
                  price={l.price}
                  onBook={() =>
                    onBook({
                      type: "lesson",
                      id: `lesson-${i}`,
                      name: lang === "sv" ? l.qty_sv : l.qty_en,
                      price: l.price,
                    })
                  }
                  bookLabel={t.lessons.book}
                />
              ))}
            </div>

            <div className="mt-6 text-[13px] text-[var(--mts-muted)] leading-relaxed">
              *{" "}
              {lang === "sv"
                ? "Priser i SEK. Lektioner, presentkort och paket är giltiga 2 år från betalningsdatum. Priser kan justeras efter 1 år."
                : "Prices in SEK. Lessons, gift cards and packages are valid 2 years from date of payment. Prices may adjust after 1 year."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LessonRow({ qty, dur, price, onBook, bookLabel }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""} grid grid-cols-12 items-center px-6 py-5 border-b border-[var(--mts-line)] last:border-b-0 hover:bg-white transition-colors group`}
    >
      <div className="col-span-5 font-display text-[21px] leading-tight">{qty}</div>
      <div className="col-span-3 text-[14px] text-[var(--mts-muted)]">{dur}</div>
      <div className="col-span-2 text-right font-semibold tabular">
        {price} <span className="text-sm text-[var(--mts-muted)]">kr</span>
      </div>
      <div className="col-span-2 text-right">
        <button
          onClick={onBook}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--mts-ink)] hover:text-[var(--mts-red)] transition-colors"
        >
          {bookLabel}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
