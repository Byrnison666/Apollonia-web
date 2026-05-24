import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { clinic, locations } from "@/lib/data";
import { Container, Section } from "./section";
import { Reveal } from "./reveal";
import { BookingForm } from "./booking-form";

const perks = [
  "Бесплатная первичная консультация",
  "Понятный план лечения и расчёт стоимости",
  "Лечение без боли и очередей",
];

export function BookingSection({ id = "zapis" }: { id?: string }) {
  return (
    <Section id={id} className="bg-emerald-soft/40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* Левая колонка — преимущества и контакты */}
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold" />
                Запись на приём
              </span>
              <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
                Запишитесь онлайн
                <br />
                за одну минуту
              </h2>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Оставьте заявку — администратор перезвонит, подтвердит запись и
                подберёт удобное время в выбранном филиале.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-ink">
                  <ShieldCheck
                    className="size-5 shrink-0 text-emerald"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm sm:text-base">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4 rounded-2xl border border-line bg-card p-6">
              <div className="flex flex-col gap-3">
                {locations.map((l) => (
                  <a
                    key={l.id}
                    href={`tel:${l.phoneHref}`}
                    className="flex items-center justify-between gap-4 text-sm transition-colors hover:text-emerald"
                  >
                    <span className="flex items-center gap-2 text-ink-soft">
                      <Phone className="size-4 text-gold" strokeWidth={1.75} />
                      {l.address}
                    </span>
                    <span className="font-medium text-ink">{l.phone}</span>
                  </a>
                ))}
              </div>
              <div className="hairline" />
              <div className="flex flex-col gap-2 text-sm text-ink-soft">
                <span className="flex items-center gap-2">
                  <Mail className="size-4 text-gold" strokeWidth={1.75} />
                  {clinic.email}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-gold" strokeWidth={1.75} />
                  {clinic.hours.weekdays}; {clinic.hours.weekend}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Правая колонка — форма */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-card p-7 shadow-[0_30px_80px_-50px_rgba(15,81,50,0.5)] sm:p-9">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
