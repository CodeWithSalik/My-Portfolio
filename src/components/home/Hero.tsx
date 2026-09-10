import Link from 'next/link';
import { personalInfo } from '@/data/personal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-subtle text-sm text-text-secondary">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>B.Tech CSE · 1st Semester · LPU</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-500 break-words">
          {personalInfo.name.toUpperCase()}
        </h1>
        
        <p className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight">
          Developer. Builder. Computer Science Student.
        </p>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Building real products, exploring systems, and turning ideas into working software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="#work" className="px-6 py-3 rounded-lg bg-text-primary text-canvas font-medium transition-transform hover:scale-105 active:scale-95">
            Explore my work
          </Link>
          <Link href="/resume" className="px-6 py-3 rounded-lg bg-surface border border-border-subtle text-text-primary font-medium hover:bg-surface-elevated transition-colors">
            View resume
          </Link>
        </div>
      </div>
    </section>
  );
}
