import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, Stethoscope } from "lucide-react";
import { getService, serviceImage, services, primaryPhone } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Icon } from "@/components/site/icon";
import { ButtonLink } from "@/components/site/buttons";
import { ServiceCard } from "@/components/site/service-card";
import { CtaBand } from "@/components/site/cta-band";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Услуга не найдена" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Услуга"
        title={service.title}
        subtitle={service.short}
        crumbs={[
          { label: "Услуги", href: "/uslugi" },
          { label: service.title },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
            {/* Описание */}
            <Reveal className="flex flex-col gap-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={serviceImage(service.slug)}
                  alt={service.title}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-soft text-emerald">
                  <Icon name={service.icon} className="size-7" />
                </span>
                {service.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-ink-soft sm:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-5 rounded-2xl border border-line bg-secondary/40 p-7">
                <h2 className="flex items-center gap-2.5 font-heading text-xl font-semibold text-ink">
                  <Stethoscope className="size-5 text-gold" strokeWidth={1.75} />
                  Показания
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.indications.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink-soft"
                    >
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-soft text-emerald">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Сайдбар */}
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-24 flex flex-col gap-6 rounded-3xl border border-line bg-card p-7 shadow-[0_30px_80px_-55px_rgba(15,81,50,0.55)]">
                <h2 className="font-heading text-xl font-semibold text-ink">
                  Преимущества
                </h2>
                <ul className="flex flex-col gap-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald text-cream">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-ink">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="hairline" />
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-ink-soft">
                    Составим индивидуальный план лечения и рассчитаем стоимость.
                  </p>
                  <ButtonLink href="/zapis" size="md" className="w-full">
                    Записаться на приём
                  </ButtonLink>
                  <a
                    href={`tel:${primaryPhone.phoneHref}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-emerald transition-colors hover:text-gold"
                  >
                    <Phone className="size-4" strokeWidth={1.75} />
                    {primaryPhone.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Другие услуги */}
      <Section className="bg-secondary/40">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold" />
                Ещё направления
              </span>
              <h2 className="text-3xl text-ink">Другие услуги</h2>
            </div>
            <Link
              href="/uslugi"
              className="group inline-flex items-center gap-2 text-sm font-medium text-emerald transition-colors hover:text-gold"
            >
              Все услуги
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
