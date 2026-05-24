import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative flex size-11 items-center justify-center rounded-xl bg-emerald ring-1 ring-inset ring-gold/40">
        <span className="font-heading text-2xl font-semibold leading-none text-gold-soft">
          A
        </span>
        <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 rounded-[2px] bg-gold" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-xl font-semibold tracking-wide",
            variant === "light" ? "text-cream" : "text-ink",
          )}
        >
          Аполлония
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.28em]",
            variant === "light" ? "text-cream/60" : "text-ink-soft",
          )}
        >
          Стоматология
        </span>
      </span>
    </span>
  );
}
