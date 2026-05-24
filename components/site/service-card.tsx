import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { Icon } from "./icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_-30px_rgba(15,81,50,0.35)]"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex items-center justify-between">
        <span className="inline-flex size-14 items-center justify-center rounded-xl bg-emerald-soft text-emerald transition-colors duration-300 group-hover:bg-emerald group-hover:text-cream">
          <Icon name={service.icon} className="size-7" />
        </span>
        <ArrowUpRight className="size-5 text-ink-soft/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold text-ink">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">{service.short}</p>
      </div>
      <span className="mt-auto text-sm font-medium text-emerald">
        Подробнее
      </span>
    </Link>
  );
}
