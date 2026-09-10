import { education } from '@/data/education';

export default function AcademicJourney() {
  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-border-subtle bg-canvas">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">Academic Journey</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">A foundation built on consistent performance and continuous learning.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border-subtle -translate-y-1/2 hidden md:block" />
        <div className="flex flex-col gap-6 relative z-10">
          {education.map((edu, i) => (
            <div key={i} className="bg-surface border border-border-subtle p-6 rounded-2xl">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{edu.level}</h3>
                  <p className="text-lg text-text-secondary font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-canvas text-text-muted border border-border-subtle">{edu.period}</span>
                  <span className="text-sm font-semibold text-accent font-mono">
                    {edu.score ? `${edu.score.obtained} / ${edu.score.total} (${edu.score.percentage}%)` : null}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {edu.recognition && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {edu.recognition}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
