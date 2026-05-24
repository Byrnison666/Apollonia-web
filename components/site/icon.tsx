import {
  Activity,
  AlignCenter,
  Anchor,
  Baby,
  BadgeCheck,
  Cpu,
  Crown,
  Gem,
  HeartHandshake,
  HeartPulse,
  MapPin,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Syringe,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Baby,
  Syringe,
  Anchor,
  Crown,
  AlignCenter,
  Gem,
  HeartPulse,
  ScanLine,
  Wind,
  Sparkles,
  Activity,
  MapPin,
  Users,
  Cpu,
  HeartHandshake,
  BadgeCheck,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={cn("size-6", className)} strokeWidth={1.5} aria-hidden />;
}
