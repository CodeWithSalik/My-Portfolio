import { personalInfo } from '@/data/personal';
import { socialLinks } from '@/data/social';

export default function ContactCTA() {
  const githubLink = socialLinks.find(link => link.platform.toLowerCase() === 'github');

  return (
    <section className="py-32 px-4 md:px-6 relative overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 bg-gradient-to-b from-canvas to-elevated -z-10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6">
          Let's build something.
        </h2>
        <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
          Currently open for new opportunities, collaborations, and interesting conversations about software engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-4 rounded-lg bg-text-primary text-canvas font-medium text-lg transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Email me
          </a>
          
          {githubLink && (
            <a 
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-surface border border-border-subtle text-text-primary font-medium text-lg hover:bg-elevated transition-colors w-full sm:w-auto"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
