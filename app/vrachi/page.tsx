import type { Metadata } from "next";
import { DoctorsSection } from "@/components/site/doctors-section";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Врачи",
  description:
    "Команда врачей сети стоматологий «Аполлония» в Луганске: терапевты, хирурги, имплантологи, ортопеды, ортодонты и гигиенисты.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Наша команда"
        title="Врачи клиники «Аполлония»"
        subtitle="13 профильных специалистов, которые ведут пациентов от диагностики до результата. Опыт, экспертиза и внимание к каждому."
        crumbs={[{ label: "Врачи" }]}
      />
      <DoctorsSection
        eyebrow="Специалисты"
        title="Познакомьтесь с командой"
        subtitle="Каждое направление ведёт врач с профильной специализацией и регулярным повышением квалификации."
      />
      <CtaBand />
    </>
  );
}
