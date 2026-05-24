import { advantages } from "@/lib/data";
import { Container, Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { Icon } from "./icon";

export function Advantages({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeading
          eyebrow="Почему мы"
          title="Премиальный подход в каждой детали"
          subtitle="Мы создаём стоматологию, в которую хочется возвращаться: технологии, экспертиза и забота о пациенте."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-gold/40">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gold-tint text-gold">
                  <Icon name={a.icon} className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
