import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./section";
import { Reveal } from "./reveal";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-emerald-soft/60 to-cream pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <Container>
        <Reveal className="flex flex-col gap-5">
          <nav
            aria-label="Хлебные крошки"
            className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft"
          >
            <Link href="/" className="transition-colors hover:text-emerald">
              Главная
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5 text-ink-soft/50" />
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-emerald"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          {eyebrow ? (
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold" />
              {eyebrow}
            </span>
          ) : null}

          <h1 className="max-w-3xl text-4xl leading-[1.1] text-ink sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>

          {subtitle ? (
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
