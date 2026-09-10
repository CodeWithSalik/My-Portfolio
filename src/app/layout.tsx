import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SkipToContent from '@/components/layout/SkipToContent';
import CommandPalette from '@/components/layout/CommandPalette';
import { personalInfo } from '@/data/personal';
import { socialLinks } from '@/data/social';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://salik.dev'),
  title: {
    default: 'Salik Pirzada — Developer, Builder & Computer Science Student',
    template: '%s | Salik Pirzada',
  },
  description:
    'Computer Science student at Lovely Professional University building production web applications, commerce platforms, and real products.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://salik.dev',
    title: 'Salik Pirzada — Developer, Builder & Computer Science Student',
    description:
      'Computer Science student at Lovely Professional University building production web applications, commerce platforms, and real products.',
    siteName: 'Salik Pirzada',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salik Pirzada — Developer, Builder & Computer Science Student',
    description:
      'Computer Science student at Lovely Professional University building production web applications, commerce platforms, and real products.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: personalInfo.name,
        alternateName: personalInfo.brand,
        url: 'https://salik.dev',
        jobTitle: 'Developer & Computer Science Student',
        alumniOf: 'Lovely Professional University',
        knowsAbout: [
          'Web Development',
          'Full-Stack Engineering',
          'TypeScript',
          'React',
          'Next.js',
          'MongoDB',
          'E-Commerce Architecture',
          'Systems Design',
        ],
        sameAs: socialLinks.map((link) => link.url),
      },
      {
        '@type': 'WebSite',
        name: 'Salik Pirzada',
        url: 'https://salik.dev',
      },
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}else{document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-canvas text-text-primary min-h-screen flex flex-col selection:bg-accent/30`}
      >
        <ThemeProvider>
          <SkipToContent />
          <Navbar />
          <CommandPalette />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
