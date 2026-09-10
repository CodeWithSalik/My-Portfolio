import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';

export default function SelectedWork() {
  const featuredProjects = projects.filter(p => p.featured);
  
  return (
    <section id="work" className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-3">Selected Work</h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Real software systems built from the ground up — spanning production e-commerce, real-time web applications, and commercial business platforms.
          </p>
        </div>
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline transition-colors group"
        >
          View all projects 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => {
          const isFlagship = project.slug === 'kashmir-stag';

          return (
            <div 
              key={project.slug}
              className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface border border-border-subtle hover:border-indigo-500/40 transition-all duration-300 overflow-hidden ${
                isFlagship ? 'md:col-span-2 min-h-[380px] bg-gradient-to-br from-surface via-surface to-surface-elevated' : 'min-h-[320px]'
              }`}
            >
              <div className="z-10 relative">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div className="space-y-1">
                    {isFlagship && (
                      <span className="inline-block text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-1">
                        Flagship Production Platform
                      </span>
                    )}
                    <Link href={`/projects/${project.slug}`} className="block">
                      <h3 className={`font-bold text-text-primary group-hover:text-accent transition-colors ${
                        isFlagship ? 'text-3xl md:text-4xl' : 'text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-canvas border border-border-subtle text-text-secondary">
                      {project.status || 'Completed'}
                    </span>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-canvas text-text-muted hover:text-text-primary border border-border-subtle transition-colors"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-canvas text-text-muted hover:text-text-primary border border-border-subtle transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitHubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-secondary mb-6 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                {isFlagship && project.highlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-sm text-text-secondary">
                    {project.highlights.slice(0, 4).map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="z-10 relative mt-auto pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, isFlagship ? 7 : 4).map((tech: string) => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-canvas text-text-secondary border border-border-subtle">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > (isFlagship ? 7 : 4) && (
                    <span className="text-xs font-mono px-2 py-1 rounded-md bg-canvas text-text-muted border border-border-subtle">
                      +{project.technologies.length - (isFlagship ? 7 : 4)}
                    </span>
                  )}
                </div>

                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary group-hover:text-accent transition-colors"
                >
                  Read Case Study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
