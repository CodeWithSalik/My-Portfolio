'use client';

import { timeline } from '@/data/timeline';
import { cn } from '@/lib/utils';

export default function JourneyTimeline() {
  return (
    <section className="py-24 px-4 md:px-6 max-w-3xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">Journey</h2>
        <p className="text-text-secondary text-lg">The path so far.</p>
      </div>

      <div className="relative pl-8 md:pl-0">
        <div className="relative border-l border-border-subtle ml-3 md:ml-0 md:border-l-0 md:border-t-0">
          <div className="space-y-12 md:space-y-0 md:relative md:border-t md:border-border-subtle md:mt-24">
            {timeline.map((event, index) => (
              <div key={index} className={cn(
                "relative md:w-1/2 pt-8 md:pt-8",
                index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
              )}>
                <span className="text-xs font-medium text-text-secondary bg-surface-elevated border border-border-subtle px-3 py-1 rounded-full w-fit">
                  {event.category}
                </span>
                
                <h3 className="text-xl font-bold text-text-primary mt-3">{event.title}</h3>
                <p className="text-text-secondary leading-relaxed mt-2">
                  {event.description}
                </p>

                <div className={cn(
                  "absolute top-0 w-8 h-8 rounded-full bg-surface border-4 border-canvas flex items-center justify-center shadow-md z-10",
                  index % 2 === 0 ? "-left-4 md:-right-4 md:left-auto" : "-left-4"
                )}>
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                <div className={cn(
                  "absolute top-1 text-sm font-mono font-bold text-text-muted hidden md:block",
                  index % 2 === 0 ? "-right-24" : "-left-24"
                )}>
                  {event.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
