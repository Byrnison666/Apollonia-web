"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { priceCategories } from "@/lib/data";

export function Prices() {
  return (
    <Accordion
      defaultValue={["cat-0"]}
      className="flex flex-col gap-4"
    >
      {priceCategories.map((cat, i) => (
        <AccordionItem
          key={cat.title}
          value={`cat-${i}`}
          className="overflow-hidden rounded-2xl border border-line bg-card px-6 not-last:border-b"
        >
          <AccordionTrigger className="items-center py-5 font-heading text-base font-semibold text-ink hover:no-underline sm:text-lg">
            <span className="flex items-center gap-3">
              {cat.title}
              <span className="rounded-full bg-emerald-soft px-2 py-0.5 text-xs font-medium text-emerald">
                {cat.items.length}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col divide-y divide-line">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-6 py-3"
                >
                  <span className="text-sm text-ink-soft">{item.name}</span>
                  <span className="shrink-0 text-sm font-semibold text-ink">
                    {item.price} ₽
                  </span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
