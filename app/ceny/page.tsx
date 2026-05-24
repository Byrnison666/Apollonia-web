import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Prices } from "@/components/site/prices";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Цены",
  description:
    "Прайс-лист стоматологии «Аполлония» в Луганске: терапия, хирургия, имплантация, протезирование, ортодонтия и другие услуги.",
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Прайс-лист"
        title="Цены на лечение"
        subtitle="Прозрачная стоимость по направлениям. Точную цену врач называет после осмотра и диагностики — консультация бесплатна."
        crumbs={[{ label: "Цены" }]}
      />

      <Section>
        <Container>
          <Reveal className="mb-8 flex items-start gap-3 rounded-2xl border border-line bg-emerald-soft/40 p-5">
            <Info className="mt-0.5 size-5 shrink-0 text-emerald" strokeWidth={1.75} />
            <p className="text-sm leading-relaxed text-ink-soft">
              Цены указаны в рублях и носят ориентировочный характер. Итоговая
              стоимость зависит от клинической ситуации и определяется на
              консультации.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Prices />
          </Reveal>
        </Container>
      </Section>

      <CtaBand title="Узнайте точную стоимость лечения" />
    </>
  );
}
