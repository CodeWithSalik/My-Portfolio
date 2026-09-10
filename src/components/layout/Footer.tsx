import Link from 'next/link';
import { GitHubIcon, InstagramIcon } from '@/components/ui/Icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-canvas print:hidden">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-tight text-text-primary">
              Salik Pirzada
            </Link>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Computer Science student and full-stack builder. <br />
              <span className="font-mono text-xs text-text-muted">Brand: CodeWithSalik</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-4 text-sm font-mono uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><Link href="/" className="hover:text-text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-text-primary transition-colors">About & Journey</Link></li>
              <li><Link href="/resume" className="hover:text-text-primary transition-colors">Resume</Link></li>
              <li><Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-4 text-sm font-mono uppercase tracking-wider">Featured Systems</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              <li><Link href="/projects/kashmir-stag" className="hover:text-text-primary transition-colors">KashmirStag Case Study</Link></li>
              <li><a href="https://kashmir-stag.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">KashmirStag Live</a></li>
              <li><Link href="/projects/fragments-of-me" className="hover:text-text-primary transition-colors">Fragments of Me</Link></li>
              <li><Link href="/projects" className="hover:text-text-primary transition-colors">All Projects</Link></li>
              <li><Link href="/achievements" className="hover:text-text-primary transition-colors">Achievements</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-4 text-sm font-mono uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/CodeWithSalik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-indigo-500/30 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/codewithsalik/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-pink-500/30 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
            <p className="mt-4 text-xs font-mono text-text-muted">
              Srinagar, Jammu & Kashmir
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {new Date().getFullYear()} Salik Pirzada. All rights reserved.</p>
          <p>Built by CodeWithSalik · Next.js 15 & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
