import { achievements } from '@/data/achievements';
import Link from 'next/link';
import { Trophy } from 'lucide-react';

export default function AchievementsPreview() {
  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">Achievements</h2>
          <p className="text-text-secondary text-lg">Milestones, hackathons, and recognitions.</p>
        </div>
        <Link href="/achievements" className="hidden sm:inline-flex text-sm font-medium text-accent hover:underline">
          View all achievements →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.slice(0, 3).map((achievement, i) => (
          <div key={i} className="p-6 rounded-2xl border border-border-subtle bg-surface flex flex-col group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-canvas flex items-center justify-center border border-border-subtle shrink-0 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                <Trophy className="w-6 h-6 text-text-secondary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <div className="text-sm font-mono text-text-muted mb-1">{achievement.year}</div>
                <h3 className="text-lg font-semibold text-text-primary">{achievement.title}</h3>
              </div>
            </div>
            <p className="text-text-secondary mb-4">{achievement.organization}</p>
            <p className="text-sm text-text-muted mt-auto line-clamp-2">{achievement.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <Link href="/achievements" className="inline-flex text-sm font-medium text-accent hover:underline">
          View all achievements →
        </Link>
      </div>
    </section>
  );
}
