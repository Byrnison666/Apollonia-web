import { ArrowRight, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { clinic, primaryPhone } from "@/lib/data";
import { Container } from "./section";
import { ButtonLink } from "./buttons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-soft/70 via-cream to-cream pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Декоративные пятна */}
      <div
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-emerald/10 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Текстовый блок */}
          <div className="flex flex-col gap-7">
            <span className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
              <span className="h-px w-6 bg-gold" />
              Стоматология премиум-класса · {clinic.city}
            </span>

            <h1 className="animate-in fade-in slide-in-from-bottom-3 text-4xl leading-[1.08] text-ink duration-700 sm:text-5xl md:text-6xl">
              Красивая улыбка,
              <br />
              которой{" "}
              <span className="relative whitespace-nowrap text-emerald">
                доверяют
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/70" />
              </span>
            </h1>

            <p className="max-w-xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-ink-soft delay-100 duration-700">
              Сеть клиник «Аполлония» — современное оборудование, врачи-эксперты
              и внимание к каждому пациенту. Лечим бережно, восстанавливаем
              красиво, сохраняем надолго.
            </p>

            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 delay-200 duration-700 sm:flex-row">
              <ButtonLink href="/zapis" size="lg">
                Записаться на приём
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href={`tel:${primaryPhone.phoneHref}`}
                variant="outline"
                size="lg"
              >
                <Phone className="size-5 text-gold" strokeWidth={1.75} />
                {primaryPhone.phone}
              </ButtonLink>
            </div>

            <div className="flex animate-in fade-in flex-wrap items-center gap-x-8 gap-y-3 pt-2 delay-300 duration-1000">
              <div className="flex items-center gap-2">
                <div className="flex text-gold" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold" />
                  ))}
                </div>
                <span className="text-sm text-ink-soft">
                  4.9 — рейтинг пациентов
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <ShieldCheck className="size-4 text-emerald" strokeWidth={1.75} />
                Бесплатная консультация
              </div>
            </div>
          </div>

          {/* Визуальная композиция */}
          <div className="relative mx-auto w-full max-w-md animate-in fade-in slide-in-from-right-6 duration-1000 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald to-emerald-deep p-8">
              <div
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/20 blur-2xl"
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-semibold text-cream">
                    Аполлония
                  </span>
                  <Sparkles className="size-6 text-gold-soft" />
                </div>
                <div className="space-y-4">
                  <p className="font-heading text-3xl leading-snug text-cream">
                    Здоровье и эстетика вашей улыбки
                  </p>
                  <p className="text-sm text-cream/70">
                    {clinic.hours.weekdays}
                    <br />
                    {clinic.hours.weekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Плавающая карточка — пациенты */}
            <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl border border-line bg-card/95 p-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:-left-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                <ShieldCheck className="size-5" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-semibold text-ink">
                  20 000+
                </span>
                <span className="text-xs text-ink-soft">довольных пациентов</span>
              </div>
            </div>

            {/* Плавающая карточка — филиалы */}
            <div className="absolute -bottom-5 right-0 flex items-center gap-3 rounded-2xl border border-line bg-card/95 p-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:-right-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gold-tint text-gold">
                <Sparkles className="size-5" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-semibold text-ink">
                  3 филиала
                </span>
                <span className="text-xs text-ink-soft">в центре города</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
