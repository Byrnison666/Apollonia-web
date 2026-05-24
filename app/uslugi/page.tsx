import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ServicesGrid } from "@/components/site/services-grid";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный спектр стоматологических услуг сети «Аполлония» в Луганске: терапия, имплантация, протезирование, ортодонтия, эстетика и многое другое.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Направления лечения"
        title="Услуги клиники «Аполлония»"
        subtitle="12 направлений современной стоматологии — от профилактики до сложного восстановления. Выберите услугу, чтобы узнать подробнее."
        crumbs={[{ label: "Услуги" }]}
      />
      <ServicesGrid
        eyebrow="Каталог"
        title="Всё для здоровья вашей улыбки"
        subtitle="Каждое направление ведут профильные специалисты с использованием премиальных материалов и цифровых технологий."
      />
      <CtaBand />
    </>
  );
}
