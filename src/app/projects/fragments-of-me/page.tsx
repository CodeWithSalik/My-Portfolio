import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight, Music, Heart, MessageSquare, Flame } from 'lucide-react';
import { ArchitectureDiagram } from '@/components/projects/ArchitectureDiagram';

export const metadata: Metadata = {
  title: 'Fragments of Me — Literary & Journaling Platform | Salik Pirzada',
  description: 'Case study of Fragments of Me: an emotion-first digital literary sanctuary built with Next.js, React 19, and Firebase by Salik Pirzada.',
};

export default function FragmentsOfMePage() {
  const techStack = [
    'Next.js 16',
    'React 19',
    'Firebase Firestore',
    'Firebase Auth',
    'Firebase Admin SDK',
    'Express Microservice',
    'Nodemailer',
    'Tailwind CSS',
    'Vercel Analytics',
  ];

  return (
    <article className="min-h-screen py-24 md:py-32 bg-canvas">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Header & Breadcrumb */}
        <section className="space-y-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors mb-4"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
              <Heart size={14} className="text-rose-600 dark:text-rose-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold">Emotion-First Literary Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary">
              Fragments of Me
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed">
              An immersive digital reading and writing sanctuary featuring ambient soundscapes and line-by-line reactions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-surface border border-border-subtle text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <a 
              href="https://fragmants-of-me.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-canvas font-semibold hover:bg-text-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Sanctuary
            </a>
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-6 pt-12 border-t border-border-subtle">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Overview</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Fragments of Me is an emotion-driven reading and writing environment designed to evoke contemplation and personal expression. Rather than treating writing as content for consumption, the platform prioritizes atmosphere through mood-based soundscapes, granular line-by-line reader reactions, and an editorial author ecosystem.
          </p>
        </section>

        {/* Architecture */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Architecture</h2>
          <ArchitectureDiagram layers={[
            { name: 'Storefront & Reading UI', items: ['Next.js 16 (App & Pages)', 'React 19', 'Tailwind CSS', 'Ambient Audio Engine'] },
            { name: 'Dedicated Microservices', items: ['Express Newsletter Microservice', 'Nodemailer SMTP Dispatcher', 'React Email Templates'] },
            { name: 'Data & Auth (Firebase)', items: ['Firebase Auth', 'Firestore Database', 'Reaction Subcollections', 'Firebase Admin SDK'] },
          ]} />
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Engineered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-text-primary">Ambient Soundscapes</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Integrated web audio engine offering 4 curated mood environments (warm, soft, melancholic, dark) with seamless looping and persistent volume controls across route transitions.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h3 className="text-lg font-semibold text-text-primary">Line-by-Line Reactions</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Readers can leave contextual emoji reactions on specific lines. Each line maintains its own isolated subcollection in Firestore to prevent hitting document size limits.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="text-lg font-semibold text-text-primary">Echoes Commentary</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Threaded reflective discussions allowing readers to exchange insights and interpretations on essays and poems.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="text-lg font-semibold text-text-primary">Daily Ritual Tracking</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Consistent reading and writing streak counter encouraging continuous creative reflection without intrusive notifications.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Technical Implementation</h2>
          <ul className="space-y-4 text-text-secondary leading-relaxed list-disc list-inside bg-surface p-6 rounded-2xl border border-border-subtle text-sm md:text-base">
            <li>Built with <strong>Next.js 16</strong> and <strong>React 19</strong>, taking advantage of improved hydration speed and modern hooks.</li>
            <li>Utilizes <strong>Firestore Subcollections</strong> to store fine-grained reader reaction counts, ensuring document reads remain O(1) and never exceed the 1MB Firestore document limit.</li>
            <li>Separated heavy email dispatch tasks into an isolated <strong>Express.js microservice</strong> to prevent long-running SMTP handshakes from blocking client web workers.</li>
            <li>Implemented strict Content Security Policies, security response headers, and dynamic SEO sitemaps.</li>
          </ul>
        </section>

        {/* Lessons Learned */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Lessons Learned</h2>
          <div className="bg-surface border border-border-subtle p-6 rounded-2xl">
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              Designing for emotional engagement requires equal parts aesthetic sensitivity and data design. Designing the line-by-line reaction feature demonstrated the importance of subcollection partitioning in NoSQL databases, maintaining instant UI optimistic updates even when readers react in quick succession.
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <a 
            href="https://fragmants-of-me.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 rounded-xl bg-text-primary text-canvas font-semibold hover:bg-text-secondary transition-colors text-sm"
          >
            Open Live Sanctuary
          </a>

          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Browse Other Projects <ArrowRight size={14} />
          </Link>
        </section>

      </div>
    </article>
  );
}
