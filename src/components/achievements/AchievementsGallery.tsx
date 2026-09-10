'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import Modal from '@/components/ui/Modal';
import { Trophy, Award, Star, Heart, ShieldCheck, Calendar, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Achievement } from '@/types';

interface AchievementsGalleryProps {
  achievements: Achievement[];
}

const iconMap = {
  academic: Trophy,
  certification: Award,
  recognition: Star,
  participation: Heart,
};

interface CredentialDetails {
  id: string;
  exactDate: string;
  verificationNote: string;
  significance: string;
}

const credentialMetadata: Record<string, CredentialDetails> = {
  'student-of-year-2023': {
    id: 'student-of-year-2023',
    exactDate: '2023 (Academic Year Completion)',
    verificationNote: 'Awarded on the basis of overall academic excellence, discipline, and matriculation score of 442/500 (88.4%).',
    significance: 'Highest single academic honor conferred at secondary school graduation.',
  },
  'game-developer-2022': {
    id: 'game-developer-2022',
    exactDate: '2022',
    verificationNote: 'Completed rigorous curriculum covering programming logic, game loops, sprite management, and computational thinking.',
    significance: 'First structured formal certification in software development, sparking the transition to full-stack engineering.',
  },
  'diet-kupwara-2025': {
    id: 'diet-kupwara-2025',
    exactDate: '16/04/2025',
    verificationNote: 'District-level seminar: "Millets for Health & Sustainable Planet" conducted by District Institute of Education & Trainings (DIET) Kupwara.',
    significance: 'Selected institutional representation addressing sustainable agricultural ecosystems and nutrition science.',
  },
  'kmi-2024': {
    id: 'kmi-2024',
    exactDate: '30/10/2024',
    verificationNote: 'One-day free comprehensive and holistic medical camp at Government Boys Higher Secondary School (GBHSS), Laderwan.',
    significance: 'Recognized for dedicated logistics, coordination, and community patient intake service.',
  },
};

export default function AchievementsGallery({ achievements }: AchievementsGalleryProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const selectedMeta = selectedAchievement ? credentialMetadata[selectedAchievement.id] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.category as keyof typeof iconMap] || Star;
          const isStudentOfYear = achievement.title.includes('Student of the Year');
          const meta = credentialMetadata[achievement.id];

          return (
            <FadeIn 
              key={achievement.id || index} 
              delay={index * 0.08} 
              className={cn(isStudentOfYear ? 'md:col-span-2' : '')}
            >
              <div
                className={cn(
                  'h-full flex flex-col p-8 rounded-3xl bg-surface border border-border-subtle hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden group',
                  isStudentOfYear 
                    ? 'bg-gradient-to-br from-surface via-surface to-surface-elevated border-amber-500/30' 
                    : ''
                )}
              >
                {isStudentOfYear && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                )}

                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-xs font-mono font-semibold border',
                      isStudentOfYear 
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' 
                        : 'bg-canvas text-text-secondary border-border-subtle'
                    )}>
                      {achievement.year}
                    </span>
                    <span className="capitalize px-2.5 py-0.5 rounded-full text-xs font-mono text-text-muted bg-canvas border border-border-subtle">
                      {achievement.category}
                    </span>
                  </div>

                  <div className={cn(
                    'p-3 rounded-2xl border transition-colors',
                    isStudentOfYear 
                      ? 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400' 
                      : 'bg-canvas border-border-subtle text-text-muted group-hover:text-accent'
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className={cn(
                      'font-bold tracking-tight text-text-primary mb-2 transition-colors',
                      isStudentOfYear ? 'text-3xl md:text-4xl group-hover:text-amber-600 dark:group-hover:text-amber-400' : 'text-xl md:text-2xl group-hover:text-accent'
                    )}>
                      {achievement.title}
                    </h2>

                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-4">
                      {achievement.organization}
                    </p>

                    <p className="text-text-secondary leading-relaxed text-sm md:text-base mb-6">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <button
                      onClick={() => setSelectedAchievement(achievement)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-primary hover:text-accent transition-colors py-1.5 focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    >
                      <FileCheck size={14} />
                      <span>Inspect Credential Record</span>
                    </button>

                    {meta && (
                      <span className="text-[11px] font-mono text-text-muted">
                        {meta.exactDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Credential Inspection Modal */}
      <Modal
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
        title="Credential Record & Verification"
        className="max-w-xl"
      >
        {selectedAchievement && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-status-green text-xs font-mono font-medium mb-3">
                <ShieldCheck size={14} />
                <span>Verified Institutional Record</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                {selectedAchievement.title}
              </h3>
              <p className="text-sm text-text-secondary font-medium mt-1">
                {selectedAchievement.organization}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-canvas border border-border-subtle text-xs font-mono">
              <div className="space-y-1">
                <span className="text-text-muted uppercase tracking-wider text-[10px] block">Issued Year</span>
                <span className="text-text-primary font-bold flex items-center gap-1.5">
                  <Calendar size={13} className="text-accent" />
                  {selectedAchievement.year}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-text-muted uppercase tracking-wider text-[10px] block">Category</span>
                <span className="text-text-primary font-bold capitalize">
                  {selectedAchievement.category}
                </span>
              </div>
            </div>

            {selectedMeta && (
              <div className="space-y-4 text-sm text-text-secondary">
                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted font-bold">Citation & Evidence</h4>
                  <p className="leading-relaxed text-text-primary text-xs md:text-sm">{selectedMeta.verificationNote}</p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted font-bold">Significance</h4>
                  <p className="leading-relaxed text-xs md:text-sm">{selectedMeta.significance}</p>
                </div>
              </div>
            )}

            <div className="p-4 rounded-xl bg-canvas border border-dashed border-border-subtle text-center text-xs font-mono text-text-muted">
              Official physical certificate available for in-person review or formal employer verification.
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-5 py-2.5 rounded-xl bg-surface border border-border-subtle text-text-primary text-xs font-mono font-medium hover:bg-surface-elevated transition-colors"
              >
                Close Record
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
