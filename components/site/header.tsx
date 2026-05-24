"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic, navItems, primaryPhone } from "@/lib/data";
import { ButtonLink } from "./buttons";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:h-24 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <Link
          href="/"
          aria-label={`${clinic.name} — на главную`}
          className="lg:justify-self-start"
        >
          <Logo priority className="h-12 sm:h-16" />
        </Link>

        {/* Меню по центру */}
        <nav className="hidden items-center gap-7 lg:flex lg:justify-self-center xl:gap-9">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative py-1.5 text-[0.95rem] whitespace-nowrap tracking-[0.01em] transition-colors duration-200",
                  active ? "text-emerald" : "text-ink hover:text-emerald",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-300 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Телефон справа */}
        <a
          href={`tel:${primaryPhone.phoneHref}`}
          className="group hidden items-center gap-3 lg:justify-self-end xl:flex"
        >
          <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink-strong">
            <Phone className="size-4" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold">
              Запись по телефону
            </span>
            <span className="font-heading text-base font-semibold tracking-wide text-ink transition-colors group-hover:text-emerald">
              {primaryPhone.phone}
            </span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-emerald hover:text-emerald lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-cream transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-6 sm:px-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                  active
                    ? "bg-emerald-soft text-emerald"
                    : "text-ink hover:bg-secondary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${primaryPhone.phoneHref}`}
            className="mt-3 flex items-center gap-3 rounded-xl border border-line px-4 py-3"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Phone className="size-4" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold">
                Запись по телефону
              </span>
              <span className="font-heading text-base font-semibold text-ink">
                {primaryPhone.phone}
              </span>
            </span>
          </a>
          <ButtonLink href="/zapis" size="md" className="mt-2 w-full">
            Записаться на приём
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
