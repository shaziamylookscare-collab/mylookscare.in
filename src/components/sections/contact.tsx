
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
            Schedule Your Consultation Today
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Call us or fill out our contact form to book appointments for any hair or skin treatment.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 font-headline">Send us a message</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Contact Information</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <a href="mailto:mylookscare@gmail.com" className="hover:text-primary">mylookscare@gmail.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <a href="tel:+919130701787" className="hover:text-primary">+91 91307 01787</a> / <a href="tel:+917775944326" className="hover:text-primary">+91 77759 44326</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <span>3rd Floor, Edcon Galleria, 302–303, Opp. Sunshine Building, Near Hotel Delmon, Panaji, Goa 403001, India.</span>
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
