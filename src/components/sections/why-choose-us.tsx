import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Cpu, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Expert Team',
    description: 'Our certified professionals have years of experience and are dedicated to providing the best care.',
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'Advanced Technology',
    description: 'We use the latest, state-of-the-art technology and equipment for all our treatments.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Personalized Care',
    description: 'Every treatment is tailored to your unique needs and goals for the best possible results.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience the difference with our commitment to excellence and patient satisfaction.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-card border-2 border-transparent hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2 font-headline">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
