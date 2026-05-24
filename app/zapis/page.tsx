import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { BookingSection } from "@/components/site/booking-section";

export const metadata: Metadata = {
  title: "Запись на приём",
  description:
    "Запишитесь на приём в стоматологию «Аполлония» в Луганске онлайн. Подберём удобное время в выбранном филиале.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Онлайн-запись"
        title="Запишитесь на приём"
        subtitle="Оставьте заявку — администратор перезвонит, подтвердит запись и ответит на все вопросы."
        crumbs={[{ label: "Запись" }]}
      />
      <BookingSection />
    </>
  );
}
