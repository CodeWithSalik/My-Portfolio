import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';

export default function KashmirStagFeature() {
  const verifiedTech = [
    'Next.js 15 App Router',
    'TypeScript',
    'React 19',
    'MongoDB Atlas',
    'Mongoose 8',
    'Razorpay',
    'Zod Validation',
    'JWT (jose)',
    'Tailwind CSS',
  ];

  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative overflow-hidden">
        {/* Ambient glow effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="lg:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">Featured Flagship Architecture</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            KashmirStag
          </h2>
          
          <p className="text-xl text-text-secondary mb-6 leading-relaxed">
            A production B2C e-commerce marketplace built from the ground up for Kashmiri crafts and artisans. Built as a serious full-stack commerce system rather than a simple frontend demo.
          </p>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 p-3 sm:p-4 rounded-2xl bg-canvas border border-border-subtle">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">19</span>
              <span className="text-[10px] sm:text-xs text-text-secondary uppercase tracking-wider font-mono mt-1">Mongoose Models</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">14</span>
              <span className="text-[10px] sm:text-xs text-text-secondary uppercase tracking-wider font-mono mt-1">Domain Services</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-text-primary font-mono">67+</span>
              <span className="text-[10px] sm:text-xs text-text-secondary uppercase tracking-wider font-mono mt-1">Audited Routes</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {verifiedTech.map(tech => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-canvas text-text-secondary border border-border-subtle">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/projects/kashmir-stag" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-canvas font-semibold hover:bg-text-secondary transition-colors"
            >
              Explore Interactive Case Study
              <ArrowRight size={16} />
            </Link>
            
            <a 
              href="https://kashmir-stag.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-canvas border border-border-subtle text-text-primary font-medium hover:bg-surface-elevated transition-colors"
            >
              <ExternalLink size={16} />
              Live Marketplace
            </a>

            <a 
              href="https://github.com/CodeWithSalik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-canvas border border-border-subtle text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full relative z-10 flex justify-center">
          <div className="w-full max-w-md p-6 bg-canvas border border-border-subtle rounded-2xl shadow-2xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-text-muted text-center pb-2 border-b border-border-subtle">
              System Architecture & Data Flow
            </div>
            
            {/* Layer 1: Customer */}
            <div className="p-3 border border-border-subtle rounded-xl bg-surface text-center">
              <span className="text-xs font-mono text-text-muted block">Client Layer</span>
              <span className="text-sm font-semibold text-text-primary">Customer & Admin Storefront</span>
            </div>

            <div className="w-0.5 h-4 bg-indigo-500/40 mx-auto" />

            {/* Layer 2: Next.js Storefront */}
            <div className="p-3 border border-indigo-500/30 rounded-xl bg-indigo-500/5 text-center">
              <span className="text-xs font-mono text-accent block">Edge & Server Boundary</span>
              <span className="text-sm font-semibold text-text-primary">Next.js 15 App Router · Server Components · JWT Auth Guard</span>
            </div>

            <div className="w-0.5 h-4 bg-indigo-500/40 mx-auto" />

            {/* Layer 3: Services */}
            <div className="p-3 border border-border-subtle rounded-xl bg-surface">
              <span className="text-xs font-mono text-text-muted block text-center mb-2">Isolated Domain Services</span>
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded bg-canvas border border-border-subtle text-text-secondary">Catalog & Variants</div>
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold">Atomic Inventory</div>
                <div className="p-2 rounded bg-indigo-500/10 border border-indigo-500/20 text-accent font-semibold">Razorpay & Webhooks</div>
                <div className="p-2 rounded bg-canvas border border-border-subtle text-text-secondary">Orders & Snapshots</div>
              </div>
            </div>

            <div className="w-0.5 h-4 bg-emerald-500/40 mx-auto" />

            {/* Layer 4: Database */}
            <div className="p-3 border border-emerald-500/30 rounded-xl bg-emerald-500/5 text-center">
              <span className="text-xs font-mono text-status-green block">Persistence Layer</span>
              <span className="text-sm font-semibold text-text-primary">MongoDB Atlas · 19 Mongoose Schemas · Immutable Audit Logs</span>
            </div>

            <div className="pt-2 text-center text-[11px] font-mono text-text-muted">
              availableQty = onHand - reservedQty · Timing-safe signatures
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
