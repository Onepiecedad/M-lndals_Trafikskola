import React, { useEffect, useState } from "react";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useLang } from "../../contexts/LanguageContext";
import { stats } from "../../mock/mock";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/2022395/2022395-uhd_2560_1440_24fps.mp4";
const POSTER =
  "https://images.unsplash.com/photo-1612805144400-88c7821bf36f?w=2000&q=90";

export default function Hero({ onBook }) {
  const { t, lang } = useLang();
  const [videoReady, setVideoReady] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const v = document.getElementById("hero-video");
    if (v) v.play().catch(() => {});
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        // only apply while hero is in viewport range
        if (y < window.innerHeight * 1.2) {
          setOffset(y);
        }
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const bgTranslate = `translate3d(0, ${offset * 0.35}px, 0) scale(${1 + Math.min(offset, 600) * 0.0004})`;
  const contentTranslate = `translate3d(0, ${offset * 0.12}px, 0)`;
  const contentOpacity = Math.max(0, 1 - offset / 600);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--mts-ink)] text-white">
      {/* Background video with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: bgTranslate }}
      >
        <video
          id="hero-video"
          className={`absolute inset-0 w-full h-[115%] object-cover transition-opacity duration-[1500ms] ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={VIDEO_SRC}
          poster={POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
        />
        <img
          src={POSTER}
          alt=""
          className={`absolute inset-0 w-full h-[115%] object-cover transition-opacity duration-[1500ms] ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(215,38,61,0.25),transparent_60%)] pointer-events-none" />

      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 lg:pt-44 lg:pb-24 min-h-[100svh] flex flex-col justify-center will-change-transform"
        style={{ transform: contentTranslate, opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-[fadeIn_.9s_ease]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--mts-red)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--mts-red)]"></span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-semibold">
            {t.hero.badge} · Mölndal, Sverige
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[96px] leading-[0.95] tracking-tight max-w-5xl">
          <span className="block">{t.hero.title1}</span>
          <span className="block">
            <span className="italic text-[var(--mts-red)]">{t.hero.title2}</span>{" "}
            <span className="text-white/95">—</span>
          </span>
          <span className="block text-white/95">{t.hero.title3}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-[17px] sm:text-[19px] leading-relaxed text-white/75">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            onClick={onBook}
            className="btn-shine rounded-full bg-[var(--mts-red)] hover:bg-[var(--mts-red-dark)] text-white h-14 px-8 text-[15px] font-semibold tracking-wide shadow-[0_20px_40px_-20px_rgba(215,38,61,0.9)]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white h-14 px-2 text-[15px] font-semibold group"
          >
            <PlayCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Chips */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {[t.hero.chip1, t.hero.chip2, t.hero.chip3].map((c, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[12.5px] font-medium tracking-wide"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1578041262130-633307b3bfd6?w=120&q=90",
              "https://images.pexels.com/photos/9518030/pexels-photo-9518030.jpeg?auto=compress&w=120",
              "https://images.unsplash.com/photo-1593035013811-2db9b3c36980?w=120&q=90",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-[var(--mts-ink)] object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--mts-gold)] text-[var(--mts-gold)]" />
            ))}
          </div>
          <div className="text-sm text-white/80">
            <span className="font-semibold text-white">4.9</span> / 5 · 12 000+ {lang === "sv" ? "förare" : "drivers"}
          </div>
        </div>

        {/* Stats bar */}
        <HeroStats />
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px);} to{opacity:1; transform:none;} }
      `}</style>
    </section>
  );
}

function HeroStats() {
  const { lang } = useLang();
  return (
    <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
      {stats.map((s, i) => (
        <Stat key={i} value={s.value} label={lang === "sv" ? s.label_sv : s.label_en} />
      ))}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-[var(--mts-ink)]/70 px-6 py-6 lg:py-7">
      <div className="font-display text-3xl lg:text-4xl tabular">{value}</div>
      <div className="text-[11.5px] uppercase tracking-[0.22em] text-white/60 mt-1.5">{label}</div>
    </div>
  );
}
