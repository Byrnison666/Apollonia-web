import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Quote, Target } from "lucide-react";
import { clinic, doctors } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Stats } from "@/components/site/stats";
import { Advantages } from "@/components/site/advantages";
import { Technology } from "@/components/site/technology";
import { Gallery } from "@/components/site/gallery";
import { DoctorsSection } from "@/components/site/doctors-section";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "О клинике",
  description:
    "Сеть стоматологических клиник «Аполлония» в Луганске: миссия, ценности, команда врачей и современные технологии лечения.",
};

const values = [
  {
    icon: Target,
    title: "Экспертиза",
    text: "Врачи с профильной специализацией и непрерывным обучением — каждый случай ведёт профессионал.",
  },
  {
    icon: HeartHandshake,
    title: "Забота",
    text: "Лечение без боли, спокойная атмосфера и честный диалог с пациентом на каждом этапе.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О клинике"
        title="Стоматология, в которую возвращаются"
        subtitle={`«${clinic.name}» — сеть клиник премиум-класса в центре Луганска, где современные технологии сочетаются с искренней заботой о пациенте.`}
        crumbs={[{ label: "О клинике" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-5">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold" />
                Наша история
              </span>
              <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
                Создаём здоровые улыбки каждый день
              </h2>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                «Аполлония» выросла из идеи о стоматологии, где пациент чувствует
                себя защищённым: понимает каждый этап лечения, доверяет врачу и
                получает результат, который радует годами.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                Сегодня это три филиала в центре города, команда профильных
                специалистов и единый стандарт качества — от профилактической
                гигиены до сложной имплантации. Мы инвестируем в технологии и
                материалы, потому что верим: премиальный результат начинается с
                деталей.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/clinic/2.jpg"
                  alt="Современный кабинет клиники «Аполлония»"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-emerald p-8 text-cream">
                <Quote className="size-10 text-gold-soft" />
                <p className="mt-4 font-heading text-2xl leading-snug">
                  Мы лечим не зубы, а людей — бережно, честно и с вниманием к
                  каждой детали.
                </p>
                <p className="mt-6 text-sm text-cream/70">
                  Философия клиники «Аполлония»
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-6"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold-tint text-gold">
                      <v.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <div className="pb-4">
        <Stats />
      </div>

      <Advantages className="bg-secondary/40" />
      <Technology />
      <DoctorsSection
        items={doctors.slice(0, 8)}
        showAllButton
        className="bg-secondary/40"
      />
      <Gallery />
      <CtaBand />
    </>
  );
}
