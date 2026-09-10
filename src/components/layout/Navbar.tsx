'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 border-b border-transparent print:hidden',
        isScrolled || isMobileMenuOpen 
          ? 'bg-surface border-border-subtle shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg font-bold tracking-tight text-text-primary z-50 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg px-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Salik Pirzada
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 text-sm font-medium text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-l border-border-subtle pl-6 ml-2">
              <a
                href="https://github.com/CodeWithSalik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas pt-24 px-6 md:hidden overflow-y-auto border-b border-border-subtle">
          <nav className="flex flex-col gap-8">
            <ul className="flex flex-col gap-4 text-2xl font-semibold tracking-tight text-text-primary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-border-subtle pt-8 flex gap-4">
              <a
                href="https://github.com/CodeWithSalik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium"
              >
                <GitHubIcon size={20} />
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
