import { Award, Smile } from 'lucide-react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.582-3.666-11.047-8.559l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
       <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,35.508,44,30.026,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);


const stats = [
    {
        icon: <Award className="h-12 w-12 text-primary" />,
        value: '21+',
        label: 'Years of Experience',
    },
    {
        icon: <Smile className="h-12 w-12 text-primary" />,
        value: '25,000+',
        label: 'Happy Clients',
    },
    {
        icon: <GoogleIcon className="h-12 w-12" />,
        value: '4.9',
        label: 'Google Rating',
    },
];

export default function StatsSection() {
    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">
                            <span className="text-primary">HAIR TRANSPLANT AND</span> <br className="sm:hidden" />
                            <span className="text-secondary">COSMETIC CLINIC IN</span> <br />
                            <span className="text-foreground">PANJIM GOA | BEAUTY EXPERTS</span>
                        </h2>
                        <div className="mt-4 mx-auto w-24 h-1 bg-primary"></div>
                    </div>
                </div>
                <div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="mb-4">{stat.icon}</div>
                                <p className="text-4xl font-extrabold text-foreground">{stat.value}</p>
                                <p className="text-lg text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}