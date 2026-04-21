import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { courses } from "../../mock/mock";
import { SectionHeader } from "./Packages";
import { Clock, ArrowRight } from "lucide-react";
import useReveal from "../../hooks/useReveal";

export default function Courses({ onBook }) {
  const { t, lang, pick } = useLang();
  return (
    <section id="courses" className="relative py-24 lg:py-32 bg-[var(--mts-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={t.courses.eyebrow} title={t.courses.title} sub={t.courses.sub} />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <CourseCard
              key={c.id}
              course={c}
              i={i}
              pick={pick}
              nowLabel={t.courses.now}
              wasLabel={t.courses.was}
              bookLabel={t.courses.book}
              onBook={() =>
                onBook({
                  type: "course",
                  id: c.id,
                  name: pick(c, "name"),
                  price: c.price,
                })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, i, pick, nowLabel, wasLabel, bookLabel, onBook }) {
  const { ref, visible } = useReveal();
  const name = pick(course, "name");
  const desc = pick(course, "desc");
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 70}ms` }}
      className={`reveal ${visible ? "in" : ""} group relative bg-white rounded-3xl border border-[var(--mts-line)] p-7 hover:border-[var(--mts-ink)]/30 hover:shadow-[0_30px_80px_-40px_rgba(11,11,15,0.25)] transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="font-display text-[26px] leading-tight pr-6">{name}</div>
        <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--mts-ink)] text-white grid place-items-center transition-all duration-500 group-hover:bg-[var(--mts-red)] group-hover:rotate-[-12deg]">
          <ArrowRight className="w-4 h-4 rtl-flip" />
        </div>
      </div>

      <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--mts-muted)] min-h-[48px]">
        {desc}
      </p>

      <div className="flex items-center gap-4 mt-6 text-[13px] text-[var(--mts-muted)]">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" /> {course.duration}
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          {course.oldPrice && (
            <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.2em] text-[var(--mts-red)] font-bold mb-0.5">
              <span>{nowLabel}</span>
              <span className="text-[var(--mts-muted)] line-through font-medium">
                {wasLabel} {course.oldPrice} kr
              </span>
            </div>
          )}
          <div className="font-display text-[40px] leading-none tabular">
            {course.price}
            <span className="text-base text-[var(--mts-muted)] font-sans"> kr</span>
          </div>
        </div>
        <button
          onClick={onBook}
          className="text-[13px] font-semibold text-[var(--mts-ink)] hover:text-[var(--mts-red)] transition-colors link-underline"
        >
          {bookLabel}
        </button>
      </div>
    </div>
  );
}
