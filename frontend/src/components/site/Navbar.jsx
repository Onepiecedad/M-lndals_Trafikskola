import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { useLang } from "../../contexts/LanguageContext";
import { contact } from "../../mock/mock";

export default function Navbar({ onBook }) {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#packages", label: t.nav.packages },
    { href: "#lessons", label: t.nav.lessons },
    { href: "#courses", label: t.nav.courses },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const light = !scrolled; // white text over hero
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--mts-cream)]/90 backdrop-blur-xl border-b border-[var(--mts-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[var(--mts-red)] text-white grid place-items-center font-display text-xl shadow-[0_8px_24px_-8px_rgba(215,38,61,0.6)]">
            M
          </div>
          <div className="leading-tight">
            <div className={`font-display text-[19px] tracking-tight ${light ? "text-white" : "text-[var(--mts-ink)]"}`}>Mölndals Trafikskola</div>
            <div className={`text-[11px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-[var(--mts-muted)]"}`}>Sedan 1935</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[14.5px] font-semibold link-underline transition-colors ${
                light ? "text-white hover:text-white" : "text-[var(--mts-ink)] hover:text-[var(--mts-red)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={contact.phoneHref}
            className={`flex items-center gap-2 text-[13.5px] font-medium transition-colors ${
              light ? "text-white/90 hover:text-[var(--mts-red)]" : "text-[var(--mts-ink)]/80 hover:text-[var(--mts-red)]"
            }`}
          >
            <Phone className="w-4 h-4" />
            {contact.phone}
          </a>
          <button
            onClick={toggle}
            className={`flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
              light
                ? "border-white/30 text-white hover:border-white/70"
                : "border-[var(--mts-line)] text-[var(--mts-ink)] hover:border-[var(--mts-ink)]"
            }`}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "sv" ? "SV" : lang === "en" ? "EN" : "AR"}
          </button>
          <Button
            onClick={onBook}
            className={`btn-shine rounded-full px-6 h-11 font-semibold transition-colors ${
              light
                ? "bg-[var(--mts-red)] hover:bg-[var(--mts-red-dark)] text-white"
                : "bg-[var(--mts-ink)] hover:bg-[var(--mts-red)] text-white"
            }`}
          >
            {t.nav.book}
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 ${light ? "text-white" : "text-[var(--mts-ink)]"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--mts-cream)] border-t border-[var(--mts-line)]">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--mts-line)]">
              <a href={contact.phoneHref} className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" /> {contact.phone}
              </a>
              <button
                onClick={toggle}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[var(--mts-line)]"
              >
                <Globe className="w-3.5 h-3.5" />
                {lang === "sv" ? "SV" : lang === "en" ? "EN" : "AR"}
              </button>
            </div>
            <Button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="w-full rounded-full bg-[var(--mts-ink)] hover:bg-[var(--mts-red)] text-white h-12 font-semibold"
            >
              {t.nav.book}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
