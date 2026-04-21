import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { contact } from "../../mock/mock";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  const links = [
    { href: "#packages", label: t.nav.packages },
    { href: "#lessons", label: t.nav.lessons },
    { href: "#courses", label: t.nav.courses },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer className="relative bg-[var(--mts-ink)] text-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--mts-red)]/15 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[var(--mts-red)] text-white grid place-items-center font-display text-xl">
                M
              </div>
              <div>
                <div className="font-display text-2xl tracking-tight">Mölndals Trafikskola</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {lang === "sv" ? contact.tagline_sv : contact.tagline_en}
                </div>
              </div>
            </div>
            <p className="text-[15px] text-white/70 leading-relaxed max-w-md">
              {lang === "sv"
                ? "Manuell & automat. Moderna bilar, professionella lärare och paket som tar dig hela vägen till körkortet."
                : "Manual & automatic. Modern cars, professional instructors and packages that take you all the way to your license."}
            </p>

            <div className="flex items-center gap-3 mt-7">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 grid place-items-center text-white/80 hover:text-white transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-semibold mb-5">
              {t.footer.quick}
            </div>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-white/80 hover:text-white link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-semibold mb-5">
              {t.nav.contact}
            </div>
            <ul className="space-y-3 text-[14.5px] text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[var(--mts-red)]" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--mts-red)]" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--mts-red)]" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12.5px] text-white/50">
            © {year} Mölndals Trafikskola. {t.footer.rights}
          </div>
          <div className="text-[12.5px] text-white/50">
            Swish {contact.swish} · Bankgiro {contact.bankgiro}
          </div>
        </div>
      </div>
    </footer>
  );
}
