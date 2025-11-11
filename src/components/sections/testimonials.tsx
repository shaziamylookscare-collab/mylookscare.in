import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Jessica Miller',
    quote: "The results from my treatment are incredible! The staff was so professional and made me feel comfortable throughout the entire process. I can't recommend Mirrored Beauty enough.",
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'David Chen',
    quote: "I was hesitant at first, but the team at Mirrored Beauty explained everything clearly. My skin has never looked better. A truly five-star experience from start to finish.",
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Sarah Johnson',
    quote: 'From the moment I walked in, I knew I was in good hands. The personalized care and attention to detail are unmatched. I feel so much more confident!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are proud to have helped so many people feel more confident in their own skin.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center text-center p-6 aspect-auto">
                        <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50">
                          {testimonialImage && (
                            <AvatarImage
                              src={testimonialImage.imageUrl}
                              alt={`Photo of ${testimonial.name}`}
                              data-ai-hint={testimonialImage.imageHint}
                            />
                          )}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <div className="flex justify-center my-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
