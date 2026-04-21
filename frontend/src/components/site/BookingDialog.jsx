import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useLang } from "../../contexts/LanguageContext";
import { packages as pkgs, courses as crs, lessons as lsn } from "../../mock/mock";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { Check } from "lucide-react";

export default function BookingDialog({ open, item, onClose }) {
  const { t, lang, pick } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", pref: "", message: "", choice: "" });

  useEffect(() => {
    if (open && item?.id) {
      setForm((f) => ({ ...f, choice: item.id }));
    }
    if (!open) {
      setForm({ name: "", phone: "", email: "", pref: "", message: "", choice: "" });
    }
  }, [open, item]);

  const options = [
    ...pkgs.map((p) => ({ id: p.id, label: pick(p, "name") + ` — ${p.price} kr` })),
    ...lsn.map((l, i) => ({ id: `lesson-${i}`, label: pick(l, "qty") + ` — ${l.price} kr` })),
    ...crs.map((c) => ({ id: c.id, label: pick(c, "name") + ` — ${c.price} kr` })),
  ];

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
    const submission = { ...form, item, createdAt: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem("mts_bookings") || "[]");
      localStorage.setItem("mts_bookings", JSON.stringify([submission, ...prev]));
    } catch {}
    toast.success(t.contact.success);
    onClose();
  };

  const prefPlaceholder =
    lang === "sv"
      ? "t.ex. vardagar efter 16"
      : lang === "ar"
      ? "مثلاً أيام الأسبوع بعد الساعة 16"
      : "e.g. weekdays after 4pm";
  const prefLabel = lang === "sv" ? "Önskad dag / tid" : lang === "ar" ? "اليوم / الوقت المفضل" : "Preferred day / time";
  const fallbackTitle =
    lang === "sv"
      ? "Boka körlektion eller paket"
      : lang === "ar"
      ? "احجز درساً أو باقة"
      : "Book a lesson or package";

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-[560px] bg-[var(--mts-cream)] border-[var(--mts-line)] p-0 overflow-hidden">
        <div className="bg-[var(--mts-ink)] text-white p-7">
          <DialogHeader className="space-y-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/60 font-semibold">
              {t.booking.title}
            </div>
            <DialogTitle className="font-display text-[30px] leading-tight tracking-tight">
              {item?.name
                ? `${t.booking.pick}: ${item.name}`
                : fallbackTitle}
            </DialogTitle>
            <DialogDescription className="text-white/70">
              {t.booking.complete}
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={submit} className="p-7 space-y-4">
          <FieldRow>
            <Field label={t.contact.name}>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 bg-white border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
                placeholder="Anna Andersson"
              />
            </Field>
            <Field label={t.contact.phoneF}>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-12 bg-white border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
                placeholder="070 123 45 67"
              />
            </Field>
          </FieldRow>

          <Field label={t.contact.emailF}>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-12 bg-white border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
              placeholder="namn@email.se"
            />
          </Field>

          <Field label={t.contact.package}>
            <Select value={form.choice} onValueChange={(v) => setForm({ ...form, choice: v })}>
              <SelectTrigger className="h-12 bg-white border-[var(--mts-line)] focus:ring-[var(--mts-red)]">
                <SelectValue placeholder={t.contact.selectPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((o) => (
                  <SelectItem key={o.id} value={o.id}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label={prefLabel}>
            <Input
              value={form.pref}
              onChange={(e) => setForm({ ...form, pref: e.target.value })}
              className="h-12 bg-white border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)]"
              placeholder={prefPlaceholder}
            />
          </Field>

          <Field label={t.contact.message}>
            <Textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white border-[var(--mts-line)] focus-visible:ring-[var(--mts-red)] resize-none"
              placeholder="…"
            />
          </Field>

          <Button
            type="submit"
            className="btn-shine w-full h-14 rounded-full bg-[var(--mts-red)] hover:bg-[var(--mts-red-dark)] text-white font-semibold"
          >
            <Check className="w-4 h-4 mr-2" />
            {t.contact.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--mts-muted)] mb-2">
        {label}
      </div>
      {children}
    </label>
  );
}

function FieldRow({ children }) {
  return <div className="grid sm:grid-cols-2 gap-4">{children}</div>;
}
