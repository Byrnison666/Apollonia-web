import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Реальные фото клиники отдаём в высоком качестве
    qualities: [75, 90],
  },
};

export default nextConfig;
