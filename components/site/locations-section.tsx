import { locations } from "@/lib/data";
import { Container, Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { LocationCard } from "./location-card";

export function LocationsSection({
  className,
  title = "Три филиала в центре Луганска",
  subtitle = "Выберите ближайшую клинику — везде один стандарт качества и сервиса.",
}: {
  className?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow="Филиалы" title={title} subtitle={subtitle} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.08}>
              <LocationCard location={loc} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
