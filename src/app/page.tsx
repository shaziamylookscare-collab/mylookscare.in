import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import OurServicesSection from '@/components/sections/our-services';
import AboutSection from '@/components/sections/about';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <OurServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
