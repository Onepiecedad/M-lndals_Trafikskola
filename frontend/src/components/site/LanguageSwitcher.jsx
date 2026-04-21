import React from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLang } from "../../contexts/LanguageContext";

// Country flags via flagcdn (SVG)
// se = Sweden, gb = United Kingdom (England), ps = Palestine
const LANGS = [
  { code: "sv", label: "Svenska", short: "SV", flag: "https://flagcdn.com/w80/se.png" },
  { code: "en", label: "English", short: "EN", flag: "https://flagcdn.com/w80/gb.png" },
  { code: "ar", label: "العربية", short: "AR", flag: "https://flagcdn.com/w80/ps.png" },
];

export default function LanguageSwitcher({ variant = "light" }) {
  const { lang, setLang } = useLang();
  const current = LANGS.find((l) => l.code === lang) || LANGS[0];
  const onDark = variant === "light"; // white text on dark hero

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Change language"
          className={`flex items-center gap-2 h-10 pl-1.5 pr-3 rounded-full border transition-colors ${
            onDark
              ? "border-white/25 text-white hover:border-white/70 bg-white/5 backdrop-blur-md"
              : "border-[var(--mts-line)] text-[var(--mts-ink)] hover:border-[var(--mts-ink)] bg-white"
          }`}
        >
          <span className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-black/10 shrink-0">
            <img src={current.flag} alt={current.label} className="w-full h-full object-cover" />
          </span>
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em]">
            {current.short}
          </span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52 rounded-2xl p-1.5 border border-[var(--mts-line)] bg-white shadow-[0_20px_60px_-20px_rgba(11,11,15,0.25)]"
      >
        {LANGS.map((l) => {
          const active = l.code === lang;
          return (
            <DropdownMenuItem
              key={l.code}
              onSelect={(e) => {
                e.preventDefault();
                setLang(l.code);
              }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-[14px] ${
                active
                  ? "bg-[var(--mts-ink)] text-white focus:bg-[var(--mts-ink)] focus:text-white"
                  : "text-[var(--mts-ink)] focus:bg-[var(--mts-cream)]"
              }`}
            >
              <span className="w-7 h-5 rounded overflow-hidden ring-1 ring-black/10 shrink-0">
                <img src={l.flag} alt={l.label} className="w-full h-full object-cover" />
              </span>
              <span className="flex-1 font-medium">{l.label}</span>
              {active && <Check className="w-4 h-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
