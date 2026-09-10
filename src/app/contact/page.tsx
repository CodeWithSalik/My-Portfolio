import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';
import Section from '@/components/ui/Section';
import { Mail } from 'lucide-react';
import { GitHubIcon, InstagramIcon } from '@/components/ui/Icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to Salik Pirzada for opportunities, collaborations, and projects.',
};

const contactLinks = [
  {
    name: 'Email',
    value: 'pirzadasalik543@gmail.com',
    href: 'mailto:pirzadasalik543@gmail.com',
    icon: Mail,
    color: 'hover:text-accent hover:border-accent/40',
  },
  {
    name: 'GitHub',
    value: 'github.com/CodeWithSalik',
    href: 'https://github.com/CodeWithSalik',
    icon: GitHubIcon,
    color: 'hover:text-text-primary hover:border-border-focus',
  },
  {
    name: 'Instagram',
    value: '@codewithsalik',
    href: 'https://www.instagram.com/codewithsalik/',
    icon: InstagramIcon,
    color: 'hover:text-pink-500 hover:border-pink-500/40',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-canvas">
      <Section>
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Let's build something together.
            </h1>
            <p className="text-xl text-text-secondary">
              Have a project idea, opportunity, or just want to connect? Reach out.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <FadeIn key={link.name} delay={index * 0.1}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl bg-surface border border-border-subtle transition-all duration-300 group ${link.color}`}
                >
                  <div className="p-4 rounded-full bg-canvas border border-border-subtle mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-lg font-semibold text-text-primary mb-2">{link.name}</h2>
                  <p className="text-sm text-text-muted">{link.value}</p>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="p-8 rounded-2xl bg-surface-elevated border border-border-subtle max-w-3xl">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Current Status</h3>
            <p className="text-text-secondary leading-relaxed">
              Currently studying B.Tech CSE at LPU and open to internship opportunities, collaborations, and interesting projects. Always eager to explore new technologies and solve challenging problems.
            </p>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
