import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

const services = [
  {
    id: 'service-1',
    title: 'Laser Hair Removal',
    description: 'State-of-the-art laser technology for permanent hair reduction.',
  },
  {
    id: 'service-2',
    title: 'Skin Rejuvenation',
    description: 'Revitalize your skin, reduce wrinkles, and improve texture.',
  },
  {
    id: 'service-3',
    title: 'Botox & Fillers',
    description: 'Smooth out lines and restore facial volume with our expert injectors.',
  },
  {
    id: 'service-4',
    title: 'Chemical Peels',
    description: 'Exfoliate and improve your skin’s appearance for a radiant glow.',
  },
  {
    id: 'service-5',
    title: 'Microneedling',
    description: 'Stimulate collagen production to improve scars and skin texture.',
  },
  {
    id: 'service-6',
    title: 'Hydrafacial',
    description: 'A multi-step treatment to cleanse, exfoliate, and hydrate your skin.',
  },
];

export default function OurServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a wide range of treatments to help you achieve your beauty goals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.id);
            return (
              <Card key={service.id} className="overflow-hidden group">
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
                    <Link href="/#contact-us">Learn More &rarr;</Link>
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
