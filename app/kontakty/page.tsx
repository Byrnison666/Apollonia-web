import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { clinic, locations } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { BookingSection } from "@/components/site/booking-section";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты сети стоматологий «Аполлония» в Луганске: телефоны филиалов, email, часы работы. Запишитесь на бесплатную консультацию.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        subtitle="Позвоните, напишите или оставьте заявку — администратор поможет выбрать врача и удобное время."
        crumbs={[{ label: "Контакты" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                  <Phone className="size-5" strokeWidth={1.75} />
                </span>
                <h2 className="font-heading text-lg font-semibold text-ink">
                  Телефоны филиалов
                </h2>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {locations.map((l) => (
                    <li key={l.id} className="flex flex-col">
                      <span className="flex items-center gap-1.5 text-ink-soft">
                        <MapPin className="size-3.5 text-gold" strokeWidth={1.75} />
                        {l.address}
                      </span>
                      <a
                        href={`tel:${l.phoneHref}`}
                        className="font-medium text-ink transition-colors hover:text-emerald"
                      >
                        {l.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gold-tint text-gold">
                  <Mail className="size-5" strokeWidth={1.75} />
                </span>
                <h2 className="font-heading text-lg font-semibold text-ink">
                  Почта и соцсети
                </h2>
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-sm font-medium text-ink transition-colors hover:text-emerald"
                >
                  {clinic.email}
                </a>
                <div className="mt-1 flex gap-3">
                  <a
                    href={clinic.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-emerald hover:text-emerald"
                  >
                    <Send className="size-4" />
                  </a>
                  <a
                    href={clinic.social.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ВКонтакте"
                    className="flex size-10 items-center justify-center rounded-full border border-line text-sm font-semibold text-ink transition-colors hover:border-emerald hover:text-emerald"
                  >
                    VK
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                  <Clock className="size-5" strokeWidth={1.75} />
                </span>
                <h2 className="font-heading text-lg font-semibold text-ink">
                  Часы работы
                </h2>
                <ul className="flex flex-col gap-2 text-sm text-ink-soft">
                  <li className="flex items-center justify-between gap-4">
                    <span>Понедельник — Суббота</span>
                    <span className="font-medium text-ink">08:00–21:00</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>Воскресенье</span>
                    <span className="font-medium text-ink">09:00–18:00</span>
                  </li>
                </ul>
                <p className="mt-auto text-sm text-ink-soft">
                  Работаем без выходных для вашего удобства.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <BookingSection />
    </>
  );
}
