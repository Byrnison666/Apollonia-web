import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { Icon } from "./icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_-30px_rgba(15,81,50,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/services/${service.slug}.jpg`}
          alt={service.title}
          fill
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-strong/45 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-xl bg-cream/95 text-emerald shadow-sm backdrop-blur-sm">
          <Icon name={service.icon} className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-heading text-xl font-semibold text-ink">
          {service.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">
          {service.short}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-emerald">
          Подробнее
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
