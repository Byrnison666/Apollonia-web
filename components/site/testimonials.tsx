import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container, Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

export function Testimonials() {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          title="Нам доверяют тысячи пациентов"
          subtitle="Реальные истории людей, которые вернули здоровье и красоту своей улыбки."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-card p-7">
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-0.5 text-gold"
                    aria-label="Оценка 5 из 5"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-gold" />
                    ))}
                  </div>
                  <Quote className="size-7 text-emerald-soft" />
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                  «{t.text}»
                </blockquote>
                <figcaption className="flex flex-col border-t border-line pt-4">
                  <span className="font-medium text-ink">{t.name}</span>
                  <span className="text-xs text-emerald">{t.service}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
