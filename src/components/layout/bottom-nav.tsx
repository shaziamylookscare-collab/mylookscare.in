
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Stethoscope, Calendar, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 16.95A8.91 8.91 0 0 1 12.12 15a3.89 3.89 0 0 1 3.42-3.42 8.91 8.91 0 0 1 1.93-1.93" />
  </svg>
);


const navLinks = [
  { href: '/#services', label: 'Treatments', icon: Stethoscope },
  { href: '/#contact-us', label: 'Appointment', icon: Calendar },
  { href: '/', label: 'Home', icon: Home },
  { href: '/#contact-us', label: 'Contact', icon: Mail },
  { href: 'https://wa.me/1234567890', label: 'WhatsApp', icon: WhatsAppIcon, external: true },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash);

      const handleHashChange = () => {
        setActiveHash(window.location.hash);
      };

      window.addEventListener('hashchange', handleHashChange);
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  const getLink = (href: string) => {
    if (pathname !== '/' && href.startsWith('/#')) {
      return `/${href}`;
    }
    return href;
  };

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && (activeHash === '' || activeHash === '#home');
    }
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // e.g. #services
      return pathname === '/' && activeHash === hash;
    }
    return pathname.startsWith(href) && href !== '/';
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navLinks.map(({ href, label, icon: Icon, external }) => {
          // Special case for duplicate Contact/Appointment links
          const effectiveHref = label === 'Contact' ? '/#contact-us' : href;
          
          return (
            <Link
              key={label}
              href={external ? effectiveHref : getLink(effectiveHref)}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={cn(
                'flex flex-col items-center gap-1 p-2 text-xs transition-colors hover:text-primary',
                isLinkActive(effectiveHref)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
