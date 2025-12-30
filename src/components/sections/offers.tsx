'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const offers = [
  {
    id: 'offer-5',
    title: 'Laser Hair Removal Offer',
    description: 'Special offer on laser hair removal.',
  },
];

export default function OffersSection() {
  const offerImage = PlaceHolderImages.find(p => p.id === 'offer-5');
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
        <div className="flex justify-center mt-12">
            {offerImage && (
                <div className="w-full max-w-3xl">
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
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
