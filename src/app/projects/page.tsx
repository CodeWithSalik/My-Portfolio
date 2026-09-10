import { Metadata } from 'next';
import { ProjectsGrid } from './ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects | Salik Pirzada',
  description: 'Selected work and case studies by Salik Pirzada.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            A collection of production platforms, real-time web applications, and commercial systems I&apos;ve built.
          </p>
        </header>
        
        <ProjectsGrid />
      </div>
    </div>
  );
}
