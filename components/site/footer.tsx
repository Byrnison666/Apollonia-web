import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import {
  clinic,
  locations,
  navItems,
  services,
} from "@/lib/data";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-emerald-deep text-cream/80">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Бренд */}
          <div className="flex flex-col gap-5">
            <Logo className="h-11 sm:h-12" />
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              {clinic.description}
            </p>
            <div className="flex gap-3">
              <SocialLink href={clinic.social.telegram} label="Telegram">
                <Send className="size-4" />
              </SocialLink>
              <SocialLink href={clinic.social.vk} label="ВКонтакте">
                <span className="text-sm font-semibold">VK</span>
              </SocialLink>
            </div>
          </div>

          {/* Навигация */}
          <nav className="flex flex-col gap-4">
            <h3 className="font-heading text-base font-semibold text-cream">
              Навигация
            </h3>
            <Link href="/" className="footer-link">
              Главная
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
            <Link href="/zapis" className="footer-link">
              Запись на приём
            </Link>
          </nav>

          {/* Услуги */}
          <nav className="flex flex-col gap-4">
            <h3 className="font-heading text-base font-semibold text-cream">
              Услуги
            </h3>
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="footer-link"
              >
                {s.title}
              </Link>
            ))}
            <Link href="/uslugi" className="footer-link text-gold-soft">
              Все услуги →
            </Link>
          </nav>

          {/* Контакты */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-base font-semibold text-cream">
              Контакты
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {locations.map((loc) => (
                <li key={loc.id} className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-2 text-cream/60">
                    <MapPin className="size-3.5 text-gold" strokeWidth={1.75} />
                    {loc.address}
                  </span>
                  <a
                    href={`tel:${loc.phoneHref}`}
                    className="ml-[22px] transition-colors hover:text-gold-soft"
                  >
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${clinic.email}`}
              className="flex items-center gap-2 text-sm transition-colors hover:text-gold-soft"
            >
              <Mail className="size-3.5 text-gold" strokeWidth={1.75} />
              {clinic.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-cream/70">
              <Clock className="mt-0.5 size-3.5 text-gold" strokeWidth={1.75} />
              <span>
                {clinic.hours.weekdays}
                <br />
                {clinic.hours.weekend}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {clinic.legalName}. Все права защищены.
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-3.5 text-gold" strokeWidth={1.75} />
            Бесплатная консультация по телефону
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-all duration-300 hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
