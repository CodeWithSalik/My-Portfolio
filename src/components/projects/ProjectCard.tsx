import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col h-full rounded-2xl bg-surface border border-border-subtle overflow-hidden',
        'hover:border-accent/50 transition-colors duration-300',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-canvas text-text-muted border border-border-subtle">
              {project.category}
            </span>
            {project.status && (
              <span className={cn(
                "px-2.5 py-1 text-xs font-mono uppercase tracking-widest rounded-full border",
                project.status === 'production' ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-medium" : "bg-canvas text-text-muted border-border-subtle"
              )}>
                {project.status}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label={`View ${project.title} source code on GitHub`}>
                <GitHubIcon size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label={`Visit ${project.title} live site`}>
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <Link href={`/projects/${project.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-accent rounded-lg">
          <h3 className="text-xl font-semibold tracking-tight text-text-primary mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
            {project.description}
          </p>
        </Link>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-canvas text-text-secondary border border-border-subtle">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-xs font-medium rounded-md bg-canvas text-text-muted border border-border-subtle">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
