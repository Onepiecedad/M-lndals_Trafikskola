import React, { useState } from "react";
import { useLang } from "../../contexts/LanguageContext";
import { contact, packages, courses } from "../../mock/mock";
import { SectionHeader } from "./Packages";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MapPin, Phone, Mail, Clock, Send, CreditCard } from "lucide-react";
import { toast } from "sonner";
import useReveal from "../../hooks/useReveal";

export default function Contact() {
  const { t, lang, pick } = useLang();
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pkg: "",
    message: "",
  });
  const hours = pick(contact, "hours");

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error(
        lang === "sv"
          ? "Fyll i namn, telefon och e-post."
          : lang === "ar"
          ? "يرجى إدخال الاسم والهاتف والبريد الإلكتروني."
          : "Please fill name, phone and email."
      );
      return;
    }
    const submission = { ...form, createdAt: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem("mts_inquiries") || "[]");
      localStorage.setItem("mts_inquiries", JSON.stringify([submission, ...prev]));
    } catch {}
    toast.success(t.contact.success);
    setForm({ name: "", phone: "", email: "", pkg: "", message: "" });
  };

  const pkgOptions = [
    ...packages.map((p) => ({ id: p.id, label: pick(p, "name") })),
    ...courses.map((c) => ({ id: c.id, label: pick(c, "name") })),
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[var(--mts-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Info */}
          <div className="lg:col-span-5 space-y-4">
            <InfoCard
              icon={<MapPin className="w-4 h-4" />}
              title={t.contact.address}
              value={contact.address}
              link={`https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`}
            />
            <InfoCard
              icon={<Phone className="w-4 h-4" />}
              title={t.contact.phone}
              value={contact.phone}
              link={contact.phoneHref}
            />
            <InfoCard
              icon={<Mail className="w-4 h-4" />}
              title={t.contact.email}
              value={contact.email}
              link={`mailto:${contact.email}`}
            />

            <div className="p-6 rounded-3xl bg-white border border-[var(--mts-line)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[var(--mts-ink)] text-white grid place-items-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--mts-muted)] font-semibold">
                  {t.contact.hours}
                </div>
              </div>
              <ul className="divide-y divide-[var(--mts-line)]">
                {hours.map((h, i) => (
                  <li key={i} className="flex items-center justify-between py-2.5 text-[14.5px]">
                    <span className="text-[var(--mts-ink)]/85">{h.day}</span>
                    <span className="font-semibold tabular">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--mts-ink)] text-white border border-[var(--mts-ink)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[var(--mts-red)] text-white grid place-items-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold">
                  {t.contact.payment}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-1">
                    {t.contact.swish}
                  </div>
                  <div className="font-display text-lg tabular">{contact.swish}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-1">
                    {t.contact.bankgiro}
                  </div>
                  <div className="font-display text-lg tabular">{contact.bankgiro}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              ref={ref}
              onSubmit={submit}
              className={`reveal ${visible ? "in" : ""} bg-white rounded-3xl border border-[var(--mts-line)] p-7 lg:p-10`}
            >
              <div className="font-display text-[32px] leading-tight mb-2">{t.contact.formTitle}</div>
              <p className="text-[14px] text-[var(--mts-muted)] mb-7">{t.contact.sub}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.contact.name}>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 bg-[var(--mts-cream)] border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
                    placeholder="Anna Andersson"
                  />
                </Field>
                <Field label={t.contact.phoneF}>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-12 bg-[var(--mts-cream)] border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
                    placeholder="070 123 45 67"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Field label={t.contact.emailF}>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 bg-[var(--mts-cream)] border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
                    placeholder="namn@email.se"
                  />
                </Field>
                <Field label={t.contact.package}>
                  <Select
                    value={form.pkg}
                    onValueChange={(v) => setForm({ ...form, pkg: v })}
                  >
                    <SelectTrigger className="h-12 bg-[var(--mts-cream)] border-[var(--mts-line)] focus:ring-[var(--mts-red)]">
                      <SelectValue placeholder={t.contact.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {pkgOptions.map((opt) => (
                        <SelectItem key={opt.id} value={opt.id}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field label={t.contact.message} className="mt-4">
                <Textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-[var(--mts-cream)] border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)] resize-none"
                  placeholder="…"
                />
              </Field>

              <Button
                type="submit"
                className="btn-shine mt-6 h-13 px-8 rounded-full bg-[var(--mts-red)] hover:bg-[var(--mts-red-dark)] text-white font-semibold h-14"
              >
                <Send className="w-4 h-4 mr-2" /> {t.contact.submit}
              </Button>
            </form>

            {/* Map */}
            <div className="mt-6 rounded-3xl overflow-hidden border border-[var(--mts-line)] h-72">
              <iframe
                title="Mölndal Trafikskola karta"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target={link?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block p-5 rounded-3xl bg-white border border-[var(--mts-line)] hover:border-[var(--mts-ink)]/30 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--mts-ink)] text-white grid place-items-center">
          {icon}
        </div>
        <div>
          <div className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--mts-muted)] font-semibold">
            {title}
          </div>
          <div className="text-[15px] font-semibold mt-0.5">{value}</div>
        </div>
      </div>
    </a>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <div className="text-[11.5px] uppercase tracking-[0.2em] font-semibold text-[var(--mts-muted)] mb-2">
        {label}
      </div>
      {children}
    </label>
  );
}
