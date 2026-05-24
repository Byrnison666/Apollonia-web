import Image from "next/image";
import { clinicPhotos } from "@/lib/data";
import { Container, Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

export function Gallery({
  className,
  limit,
}: {
  className?: string;
  limit?: number;
}) {
  const photos = limit ? clinicPhotos.slice(0, limit) : clinicPhotos;
  return (
    <Section className={className}>
      <Container>
        <SectionHeading
          eyebrow="Галерея"
          title="Загляните в наши клиники"
          subtitle="Современные кабинеты, премиальное оборудование и атмосфера, в которой комфортно лечиться."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={(i % 4) * 0.05}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
