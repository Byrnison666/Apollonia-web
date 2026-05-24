import Image from "next/image";
import { cn } from "@/lib/utils";
import { clinic } from "@/lib/data";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-gold.png"
      alt={`${clinic.name} — сеть стоматологий премиум класса`}
      width={2206}
      height={510}
      priority={priority}
      className={cn(
        "h-9 w-auto drop-shadow-[0_1px_3px_rgba(28,25,23,0.18)] sm:h-11",
        className,
      )}
    />
  );
}
