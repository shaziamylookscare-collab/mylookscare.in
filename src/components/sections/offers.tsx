'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const offers = [
  {
    id: 'offer-1',
    title: '20% Off Hair Transplant',
    description: 'Get a 20% discount on our advanced FUE hair transplant procedure. Limited time offer!',
  },
  {
    id: 'offer-2',
    title: 'Laser Hair Removal Package',
    description: 'Buy 5 sessions of laser hair removal and get the 6th session absolutely free.',
  },
  {
    id: 'offer-3',
    title: 'Free Skin Consultation',
    description: 'Book a free consultation with our expert dermatologists to discuss your skin concerns.',
  },
    {
    id: 'offer-4',
    title: 'Bridal Glow Package',
    description: 'Get ready for your big day with our exclusive bridal package for a radiant glow.',
  },
];

export default function OffersSection() {
  return (
    <section id="offers" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Exclusive Offers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Take advantage of our special deals on top treatments.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent>
            {offers.map((offer) => {
              const offerImage = PlaceHolderImages.find(p => p.id === offer.id);
              return (
                <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                       <div className="overflow-hidden">
                        {offerImage && (
                          <Image
                            src={offerImage.imageUrl}
                            alt={offerImage.description}
                            width={600}
                            height={338}
                            className="object-cover w-full aspect-[16/9] group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={offerImage.imageHint}
                          />
                        )}
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
