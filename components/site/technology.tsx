import { Box, Microscope, ScanLine, ShieldCheck } from "lucide-react";
import { Container, Section } from "./section";
import { Reveal } from "./reveal";
import { ButtonLink } from "./buttons";

const tech = [
  {
    icon: Box,
    title: "CAD/CAM-моделирование",
    text: "Цифровое проектирование и фрезеровка коронок с точностью до микрона.",
  },
  {
    icon: ScanLine,
    title: "3D-томография",
    text: "Объёмные снимки для точной диагностики и планирования имплантации.",
  },
  {
    icon: Microscope,
    title: "Лечение под микроскопом",
    text: "Эндодонтия с многократным увеличением — сохраняем даже сложные зубы.",
  },
  {
    icon: ShieldCheck,
    title: "Стерильность класса B",
    text: "Многоступенчатая обработка инструментов и одноразовые расходники.",
  },
];

export function Technology() {
  return (
    <Section className="bg-cream">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Визуальная панель */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-emerald p-8">
              <div
                className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-emerald-deep/70 blur-3xl"
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between">
                <span className="eyebrow text-gold-soft">
                  <span className="h-px w-6 bg-gold" />
                  Технологии
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {tech.map((t) => (
                    <div
                      key={t.title}
                      className="rounded-2xl border border-cream/10 bg-cream/5 p-5 backdrop-blur-sm"
                    >
                      <t.icon
                        className="size-7 text-gold-soft"
                        strokeWidth={1.5}
                      />
                      <p className="mt-3 font-heading text-base font-semibold text-cream">
                        {t.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Текст */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold" />
              Оборудование
            </span>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              Технологии, которые
              <br />
              делают лечение точным
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Мы инвестируем в современное оборудование, чтобы диагностика была
              достоверной, лечение — предсказуемым, а результат — долговечным.
              Цифровой протокол сопровождает каждый этап работы.
            </p>
            <ul className="flex flex-col gap-5">
              {tech.map((t) => (
                <li key={t.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                    <t.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-ink">{t.title}</span>
                    <span className="text-sm text-ink-soft">{t.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <ButtonLink href="/o-klinike" variant="outline" size="md">
                О клинике подробнее
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
