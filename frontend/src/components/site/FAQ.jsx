import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { faqs } from "../../mock/mock";
import { SectionHeader } from "./Packages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import useReveal from "../../hooks/useReveal";

export default function FAQ() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal();
  return (
    <section className="relative py-24 lg:py-32 bg-white border-y border-[var(--mts-line)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} center />
        <div ref={ref} className={`reveal ${visible ? "in" : ""} mt-12`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-[var(--mts-line)] rounded-2xl bg-[var(--mts-cream)] px-6 data-[state=open]:bg-white data-[state=open]:border-[var(--mts-ink)]/30 transition-colors"
              >
                <AccordionTrigger className="text-left py-5 text-[16px] font-semibold hover:no-underline">
                  {lang === "sv" ? f.q_sv : f.q_en}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-[var(--mts-muted)] pb-6">
                  {lang === "sv" ? f.a_sv : f.a_en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
