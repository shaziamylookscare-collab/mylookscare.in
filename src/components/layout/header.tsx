
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about-us', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact-us', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLink = (href: string) => {
    if (pathname.startsWith('/blog')) {
      return href.startsWith('/#') ? `/${href}` : href;
    }
    return href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold">Mylookscare</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={getLink(href)}
              className={cn(
                'transition-colors hover:text-primary',
                (pathname === href || (href === '/blog' && pathname.startsWith('/blog'))) ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex" asChild>
            <Link href="/#contact-us">Book Appointment</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                   <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-headline text-xl font-bold">Mylookscare</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={getLink(href)}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'transition-colors hover:text-primary',
                         (pathname === href || (href === '/blog' && pathname.startsWith('/blog'))) ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <Button className="mt-8 w-full" asChild>
                  <Link href="/#contact-us" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
