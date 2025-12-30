import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

const services = [
  {
    id: 'service-1',
    title: 'Hair Transplant (FUE & FUT)',
    description: 'Natural-looking hair restoration for both men and women.',
  },
  {
    id: 'service-2',
    title: 'Hair Loss Management',
    description: 'Customized care for thinning hair and hairfall.',
  },
  {
    id: 'service-3',
    title: 'Laser Hair Removal',
    description: 'Advanced laser technology for smooth, hair-free skin.',
  },
  {
    id: 'service-4',
    title: 'Skin Polishing & Brightening',
    description: 'Rejuvenate your skin and enhance its natural glow.',
  },
  {
    id: 'service-5',
    title: 'Skin Tag / Wart / Scar Removal',
    description: 'Safe and effective dermatological procedures for clear skin.',
  },
  {
    id: 'service-6',
    title: 'Face & Body Tightening',
    description: 'Non-surgical treatments to improve firmness and tone.',
  },
];

export default function OurServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Hair & Skin Treatments
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a wide range of treatments to help you achieve your beauty goals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.id);
            return (
              <Card key={service.id} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-2">
                  {serviceImage && (
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      width={600}
                      height={400}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                  <Button variant="link" asChild className="p-0 mt-4">
                    <Link href="/#contact-us">Book Now &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
