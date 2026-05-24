import type { MetadataRoute } from "next";
import { services } from "@/lib/data";

const BASE_URL = "https://apollonia-dent.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/uslugi",
    "/vrachi",
    "/ceny",
    "/o-klinike",
    "/filialy",
    "/kontakty",
    "/zapis",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/uslugi/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
