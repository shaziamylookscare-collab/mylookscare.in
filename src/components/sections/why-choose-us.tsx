import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Cpu, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Expert Team',
    description: 'Our team has 20+ years of experience in hair and skin wellness.',
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'Advanced Technology',
    description: 'We use state-of-the-art facilities and advanced technology for all our treatments.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Personalized Care',
    description: 'Personalized treatment plans for every individual to achieve the best results.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
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
            <Card key={index} className="text-center bg-background border rounded-lg shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300">
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
