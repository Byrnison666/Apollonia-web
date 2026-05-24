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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between px-5 sm:h-28 sm:px-8">
        <Link href="/" aria-label={`${clinic.name} — на главную`}>
          <Logo priority className="h-14 sm:h-20" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors duration-200 hover:text-emerald",
                  active ? "text-emerald" : "text-ink",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${primaryPhone.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-emerald"
          >
            <Phone className="size-4 text-gold" strokeWidth={1.75} />
            {primaryPhone.phone}
          </a>
          <ButtonLink href="/zapis" size="md">
            Записаться
          </ButtonLink>
        </div>

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
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
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
            className="mt-2 flex items-center gap-2 px-4 py-2 text-base font-medium text-ink"
          >
            <Phone className="size-4 text-gold" strokeWidth={1.75} />
            {primaryPhone.phone}
          </a>
          <ButtonLink href="/zapis" size="md" className="mt-2 w-full">
            Записаться на приём
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
