'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

const offers = [
  {
    id: 'offer-5',
    title: 'Laser Hair Removal Offer',
  },
  {
    id: 'offer-6',
    title: 'Hair Transplant Offer',
  },
];

export default function OffersSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

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
          plugins={[plugin.current]}
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-6xl mx-auto mt-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {offers.map((offer) => {
              const offerImage = PlaceHolderImages.find(p => p.id === offer.id);
              return (
                <CarouselItem key={offer.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                     {offerImage && (
                        <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                          <div className="overflow-hidden">
                              <Image
                                src={offerImage.imageUrl}
                                alt={offerImage.description}
                                width={1200}
                                height={675}
                                className="object-contain w-full h-auto"
                                data-ai-hint={offerImage.imageHint}
                              />
                          </div>
                        </Card>
                      )}
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

    