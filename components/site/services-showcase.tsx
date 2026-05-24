"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

const INTERVAL = 3800;

export function ServicesShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const current = services[index];

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(
      () => setIndex((p) => (p + 1) % services.length),
      INTERVAL,
    );
    return () => clearInterval(t);
  }, [reduce, paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-emerald-deep">
        {/* Слой фото с кроссфейдом и плавным зумом */}
        <AnimatePresence>
          <motion.div
            key={current.slug}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" },
            }}
          >
            <Image
              src={`/services/${current.slug}.jpg`}
              alt={current.title}
              fill
              priority={index === 0}
              quality={90}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/25 to-emerald-deep/5"
          aria-hidden
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
          <span className="eyebrow text-gold-soft">
            <span className="h-px w-6 bg-gold" />
            Наши услуги
          </span>
          <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream/80 backdrop-blur-sm">
            {index + 1} / {services.length}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-heading text-2xl font-semibold text-cream sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/75">
                {current.short}
              </p>
              <Link
                href={`/uslugi/${current.slug}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink-strong transition-colors hover:bg-gold-soft"
              >
                Подробнее
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {services.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Показать услугу: ${s.title}`}
                aria-current={i === index}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-gold"
                    : "w-1.5 bg-cream/40 hover:bg-cream/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
