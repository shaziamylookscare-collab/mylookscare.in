
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About My Looks Care
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              My Looks Care (formerly Looks Cosmetic Clinic) is a trusted hair and skin clinic with over 20 years of expertise. We specialize in advanced treatments such as FUE hair transplant, laser hair removal, and skin rejuvenation tailored for Indian skin and hair types.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in a holistic approach to beauty and wellness, focusing on treatments that not only improve your appearance but also boost your confidence. Your journey with us is a partnership, and we are committed to helping you achieve your desired look with integrity and expertise.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="/#contact-us">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
