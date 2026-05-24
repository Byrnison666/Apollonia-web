import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { LocationsSection } from "@/components/site/locations-section";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Филиалы",
  description:
    "Адреса и телефоны филиалов сети стоматологий «Аполлония» в Луганске. Три клиники в центре города с единым стандартом качества.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Наши адреса"
        title="Филиалы в Луганске"
        subtitle="Три клиники в шаговой доступности. В каждой — один стандарт качества, сервиса и заботы о пациенте."
        crumbs={[{ label: "Филиалы" }]}
      />
      <LocationsSection
        title="Выберите ближайший филиал"
        subtitle="Позвоните напрямую в клинику или постройте маршрут в один клик."
      />
      <CtaBand />
    </>
  );
}
