import Image from "next/image";
import { ArrowRight, Gem, Microscope, Phone, ShieldCheck, Sparkles, Users } from "lucide-react";
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

            <div className="flex animate-in fade-in flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-ink-soft delay-300 duration-1000">
              <span className="flex items-center gap-2">
                <Microscope className="size-4 text-emerald" strokeWidth={1.75} />
                Лечение под микроскопом
              </span>
              <span className="flex items-center gap-2">
                <Gem className="size-4 text-emerald" strokeWidth={1.75} />
                Премиальные материалы
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald" strokeWidth={1.75} />
                Бесплатная консультация
              </span>
            </div>
          </div>

          {/* Визуальная композиция — реальное фото клиники */}
          <div className="relative mx-auto w-full max-w-md animate-in fade-in slide-in-from-right-6 duration-1000 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
              <Image
                src="/clinic/1.jpg"
                alt="Стоматологический кабинет клиники «Аполлония»"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-emerald-deep/75 via-emerald-deep/10 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <p className="font-heading text-2xl leading-snug text-cream">
                  Здоровье и эстетика
                  <br />
                  вашей улыбки
                </p>
                <Sparkles className="size-6 shrink-0 text-gold-soft" />
              </div>
            </div>

            {/* Плавающая карточка — врачи */}
            <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl border border-line bg-card/95 p-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:-left-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                <Users className="size-5" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-semibold text-ink">
                  13 врачей
                </span>
                <span className="text-xs text-ink-soft">профильных специалистов</span>
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
