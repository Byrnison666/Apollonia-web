"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { locations, services } from "@/lib/data";
import { SubmitButton } from "./buttons";

type Errors = Partial<Record<"name" | "phone" | "consent", string>>;

const digitsOnly = (s: string) => s.replace(/\D/g, "");

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    clinic: locations[0].id,
    service: "",
    message: "",
    consent: false,
  });

  function validate(): boolean {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Укажите имя";
    if (digitsOnly(form.phone).length < 10)
      next.phone = "Укажите корректный телефон";
    if (!form.consent) next.consent = "Необходимо согласие";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/zapis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      toast.success("Заявка отправлена!", {
        description: "Администратор перезвонит вам в ближайшее время.",
      });
      setForm({
        name: "",
        phone: "",
        clinic: locations[0].id,
        service: "",
        message: "",
        consent: false,
      });
      setErrors({});
    } catch {
      toast.error("Не удалось отправить заявку", {
        description: "Позвоните нам по телефону — мы всегда на связи.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ваше имя" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Как к вам обращаться"
            className={inputCls(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Телефон" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
            className={inputCls(!!errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Филиал" htmlFor="clinic">
          <select
            id="clinic"
            value={form.clinic}
            onChange={(e) => setForm({ ...form, clinic: e.target.value })}
            className={selectCls}
          >
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.address}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Услуга" htmlFor="service">
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={selectCls}
          >
            <option value="">Выберите направление</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Комментарий" htmlFor="message" optional>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Опишите вопрос или удобное время для звонка"
          className={cn(inputCls(false), "resize-none py-3")}
        />
      </Field>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-emerald"
          aria-invalid={!!errors.consent}
        />
        <span>
          Я согласен на обработку персональных данных и принимаю условия
          политики конфиденциальности.
        </span>
      </label>
      {errors.consent ? (
        <p className="-mt-3 text-sm text-red-600">{errors.consent}</p>
      ) : null}

      <SubmitButton type="submit" disabled={submitting} className="w-full">
        {submitting ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Отправляем…
          </>
        ) : (
          <>
            <Check className="size-5" />
            Записаться на приём
          </>
        )}
      </SubmitButton>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-ink"
      >
        {label}
        {optional ? (
          <span className="ml-1 text-ink-soft/60">— необязательно</span>
        ) : null}
      </label>
      {children}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

const baseInput =
  "h-12 w-full rounded-xl border bg-card px-4 text-base text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-emerald focus:ring-2 focus:ring-emerald/15";

function inputCls(hasError: boolean) {
  return cn(baseInput, hasError ? "border-red-400" : "border-line");
}

const selectCls = cn(baseInput, "border-line cursor-pointer appearance-none");
