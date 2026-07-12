import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProgramsSection from "@/components/ProgramsSection";
import FounderSection from "@/components/FounderSection";
import LeadershipSection from "@/components/LeadershipSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import NewsSection from "@/components/NewsSection";
import PlacementsSection from "@/components/PlacementsSection";
import CampusGallerySection from "@/components/CampusGallerySection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <FounderSection />
      <LeadershipSection />
      <ProgramsSection />
      <WhyChooseSection />
      <NewsSection />
      <PlacementsSection />
      <CampusGallerySection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
