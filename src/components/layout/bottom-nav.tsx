
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, List, MessageSquare, Newspaper, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#home', label: 'Home', icon: Home },
  { href: '/#services', label: 'Services', icon: List },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/#contact-us', label: 'Contact', icon: MessageSquare },
];

export default function BottomNav() {
  const pathname = usePathname();

  const getLink = (href: string) => {
    if (pathname !== '/' && href.startsWith('/#')) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={getLink(href)}
            className={cn(
              'flex flex-col items-center gap-1 p-2 text-xs transition-colors hover:text-primary',
              (pathname === href || (href !== '/' && pathname.startsWith(href)))
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
