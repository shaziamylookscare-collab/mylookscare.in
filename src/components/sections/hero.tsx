
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold !font-headline leading-tight drop-shadow-lg">
          Best Hair Transplant And Cosmetic Clinic of Panjim Goa
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          Welcome to My Looks Care, a leading hair transplant and cosmetic skin clinic in Panjim, Goa offering trusted solutions for hair restoration, laser skin treatments, and personalized cosmetic care.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/#contact-us">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
