import { doctors } from "@/lib/data";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { ServicesGrid } from "@/components/site/services-grid";
import { DoctorsSection } from "@/components/site/doctors-section";
import { Advantages } from "@/components/site/advantages";
import { Technology } from "@/components/site/technology";
import { Gallery } from "@/components/site/gallery";
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
      <DoctorsSection
        items={doctors.slice(0, 8)}
        showAllButton
        className="bg-secondary/40"
      />
      <Technology />
      <Advantages className="bg-secondary/40" />
      <Gallery />
      <LocationsSection className="bg-secondary/40" />
      <Testimonials />
      <BookingSection />
    </>
  );
}
