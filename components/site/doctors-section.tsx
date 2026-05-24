import { ArrowRight } from "lucide-react";
import { doctors as allDoctors, type Doctor } from "@/lib/data";
import { Container, Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { DoctorCard } from "./doctor-card";
import { ButtonLink } from "./buttons";

export function DoctorsSection({
  items = allDoctors,
  eyebrow = "Наша команда",
  title = "Врачи, которым доверяют",
  subtitle = "Профильные специалисты с опытом и постоянным повышением квалификации. Каждый случай ведёт профессионал своего направления.",
  showAllButton = false,
  className,
}: {
  items?: Doctor[];
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
        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {items.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 4) * 0.06}>
              <DoctorCard doctor={d} />
            </Reveal>
          ))}
        </div>
        {showAllButton ? (
          <Reveal className="mt-12 flex justify-center">
            <ButtonLink href="/vrachi" variant="outline" size="lg">
              Вся команда
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
