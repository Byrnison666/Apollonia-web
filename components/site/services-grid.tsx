import { ArrowRight } from "lucide-react";
import { services as allServices, type Service } from "@/lib/data";
import { Container, Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { ServiceCard } from "./service-card";
import { ButtonLink } from "./buttons";

export function ServicesGrid({
  items = allServices,
  eyebrow = "Услуги",
  title = "Полный спектр стоматологии",
  subtitle = "От профилактики до сложной имплантации — всё необходимое для здоровья вашей улыбки в одном месте.",
  showAllButton = false,
  className,
}: {
  items?: Service[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showAllButton?: boolean;
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        {showAllButton ? (
          <Reveal className="mt-12 flex justify-center">
            <ButtonLink href="/uslugi" variant="outline" size="lg">
              Все услуги
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
