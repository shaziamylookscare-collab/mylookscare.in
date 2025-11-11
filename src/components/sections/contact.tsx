import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from '@/components/contact-form';

export default function ContactSection() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');
  return (
    <section id="contact-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions or want to book an appointment? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-headline">Send us a message</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Contact Information</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <span>contact@mirroredbeauty.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <span>123 Beauty Lane, Wellness City, 45678</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
              {mapImage && (
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
