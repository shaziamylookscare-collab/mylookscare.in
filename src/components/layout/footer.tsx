
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/mylookscareclinic/' },
  { icon: Instagram, href: 'https://www.instagram.com/mylookscareclinic/' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UC-P12cZuF1-EaL2p5f_1g3g' },
];

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about-us', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact-us', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export default function Footer() {
  return (
    <footer className="bg-card hidden md:block">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-headline">
              <Image src="https://myloolookscare-images.vercel.app/lookscare.webp" alt="My Looks Care logo" width={140} height={40} />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              My Looks Care (formerly Looks Cosmetic Clinic) is a trusted hair and skin clinic with over 20 years of expertise.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.icon.displayName}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} My Looks Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
