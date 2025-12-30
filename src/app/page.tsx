
import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import OurServicesSection from '@/components/sections/our-services';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import StatsSection from '@/components/sections/stats';
import StatsGridSection from '@/components/sections/stats-grid';
import OffersSection from '@/components/sections/offers';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <StatsGridSection />
      <OffersSection />
      <AboutSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
