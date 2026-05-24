import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic, type Location } from "@/lib/data";

export function LocationCard({ location }: { location: Location }) {
  const mapHref = `https://yandex.ru/maps/?text=${encodeURIComponent(
    location.mapQuery,
  )}`;
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-card p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_-32px_rgba(15,81,50,0.35)]">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
          <MapPin className="size-5" strokeWidth={1.5} />
        </span>
        <h3 className="font-heading text-lg font-semibold text-ink">
          {location.title}
        </h3>
      </div>

      <ul className="flex flex-col gap-3 text-sm text-ink-soft">
        <li className="flex items-center gap-2.5">
          <MapPin className="size-4 text-gold" strokeWidth={1.75} />
          {clinic.city}, {location.address}
        </li>
        <li>
          <a
            href={`tel:${location.phoneHref}`}
            className="flex items-center gap-2.5 font-medium text-ink transition-colors hover:text-emerald"
          >
            <Phone className="size-4 text-gold" strokeWidth={1.75} />
            {location.phone}
          </a>
        </li>
        <li className="flex items-start gap-2.5">
          <Clock className="mt-0.5 size-4 text-gold" strokeWidth={1.75} />
          <span>
            {clinic.hours.weekdays}
            <br />
            {clinic.hours.weekend}
          </span>
        </li>
      </ul>

      <a
        href={mapHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald transition-colors hover:text-gold"
      >
        <Navigation className="size-4" strokeWidth={1.75} />
        Построить маршрут
      </a>
    </div>
  );
}
