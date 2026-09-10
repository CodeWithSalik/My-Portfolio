import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';
import Section from '@/components/ui/Section';
import AchievementsGallery from '@/components/achievements/AchievementsGallery';
import { achievements } from '@/data/achievements';

export const metadata: Metadata = {
  title: 'Achievements & Recognition',
  description: 'Verified academic honors, certifications, and institutional recognitions received by Salik Pirzada.',
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-canvas">
      <Section>
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">Verified Distinctions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-4">
              Achievements & Recognition
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Academic honors, technical certifications, and institutional service records reflecting discipline, performance, and continuous initiative.
            </p>
          </div>
        </FadeIn>

        <AchievementsGallery achievements={achievements} />
      </Section>
    </div>
  );
}
