import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { offers } from "../../mock/mock";
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const { lang } = useLang();
  const items = [...offers, ...offers];
  return (
    <div className="bg-[var(--mts-ink)] text-white py-5 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap mts-marquee">
        {items.map((o, i) => (
          <div key={i} className="flex items-center gap-4 px-8 shrink-0">
            <Sparkles className="w-4 h-4 text-[var(--mts-gold)]" />
            <span className="text-[13.5px] uppercase tracking-[0.22em] font-medium">
              {o[lang] || o.en}
            </span>
            <span className="text-white/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
