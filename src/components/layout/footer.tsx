import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
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
    <footer className="bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-headline">
              Mirrored Beauty
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Your trusted partner in beauty and wellness. We offer state-of-the-art cosmetic treatments to help you look and feel your best.
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
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.icon.displayName}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Mirrored Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
