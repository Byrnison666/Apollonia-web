import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";
import { clinic } from "@/lib/data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apollonia-dent.com"),
  title: {
    default: `${clinic.name} — ${clinic.tagline}`,
    template: `%s — ${clinic.name}`,
  },
  description: clinic.description,
  keywords: [
    "стоматология Луганск",
    "Аполлония",
    "имплантация зубов",
    "лечение зубов",
    "виниры",
    "отбеливание зубов",
    "детская стоматология",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: clinic.name,
    title: `${clinic.name} — ${clinic.tagline}`,
    description: clinic.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${montserrat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
