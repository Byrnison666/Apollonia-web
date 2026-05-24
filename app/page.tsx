import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { ServicesGrid } from "@/components/site/services-grid";
import { Advantages } from "@/components/site/advantages";
import { Technology } from "@/components/site/technology";
import { LocationsSection } from "@/components/site/locations-section";
import { Testimonials } from "@/components/site/testimonials";
import { BookingSection } from "@/components/site/booking-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="-mt-6 sm:-mt-12">
        <Stats />
      </div>
      <ServicesGrid />
      <Advantages className="bg-secondary/40" />
      <Technology />
      <LocationsSection className="bg-secondary/40" />
      <Testimonials />
      <BookingSection />
    </>
  );
}
