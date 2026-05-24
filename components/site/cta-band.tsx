import { Phone } from "lucide-react";
import { primaryPhone } from "@/lib/data";
import { Container } from "./section";
import { ButtonLink } from "./buttons";
import { Reveal } from "./reveal";

export function CtaBand({
  title = "Запишитесь на консультацию",
  subtitle = "Осмотр, план лечения и расчёт стоимости — без обязательств. Подберём удобное время в ближайшем к вам филиале.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-emerald py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-deep/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <Container>
        <Reveal className="relative flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <span className="eyebrow justify-center text-gold-soft">
              <span className="h-px w-6 bg-gold" />
              Запись на приём
            </span>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-cream/75">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/zapis" variant="white" size="lg">
              Записаться на приём
            </ButtonLink>
            <ButtonLink
              href={`tel:${primaryPhone.phoneHref}`}
              variant="gold"
              size="lg"
            >
              <Phone className="size-5" strokeWidth={1.75} />
              {primaryPhone.phone}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
