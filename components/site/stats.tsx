import { stats } from "@/lib/data";
import { Container } from "./section";
import { Reveal } from "./reveal";

export function Stats() {
  return (
    <Container>
      <Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 bg-card px-6 py-10 text-center"
            >
              <span className="font-heading text-4xl font-semibold text-emerald sm:text-5xl">
                {s.value}
              </span>
              <span className="text-sm text-ink-soft">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
