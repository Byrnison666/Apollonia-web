import Image from "next/image";
import type { Doctor } from "@/lib/data";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-card">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={doctor.photo}
          alt={`${doctor.name} — ${doctor.role}`}
          fill
          quality={90}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink-strong/90 via-ink-strong/35 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-heading text-lg font-semibold leading-snug text-cream">
            {doctor.name}
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-gold-soft">
            {doctor.role}
          </p>
        </div>
      </div>
    </div>
  );
}
