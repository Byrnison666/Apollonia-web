import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide whitespace-nowrap transition-all duration-300 outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald text-cream shadow-[0_8px_30px_-12px_rgba(15,81,50,0.6)] hover:bg-emerald-deep hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(15,81,50,0.55)]",
        gold: "bg-gold text-ink-strong shadow-[0_8px_30px_-12px_rgba(181,138,60,0.7)] hover:bg-gold-soft hover:-translate-y-0.5",
        outline:
          "border border-line bg-transparent text-ink hover:border-emerald hover:text-emerald",
        white:
          "bg-cream text-emerald hover:bg-white hover:-translate-y-0.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]",
        ghost: "text-ink hover:text-emerald",
      },
      size: {
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

type CtaProps = VariantProps<typeof ctaVariants>;

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & CtaProps) {
  return (
    <Link
      href={href}
      className={cn(ctaVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SubmitButton({
  variant,
  size,
  className,
  children,
  ...props
}: ComponentProps<"button"> & CtaProps) {
  return (
    <button
      className={cn(ctaVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
