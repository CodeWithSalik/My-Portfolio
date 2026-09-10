import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';
import Section from '@/components/ui/Section';
import { timeline } from '@/data/timeline';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Salik Pirzada, engineering philosophy, and journey timeline.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-canvas">
      <Section>
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              About Me
            </h1>
            <div className="text-lg text-text-secondary leading-relaxed">
              <p>
                I'm Salik Pirzada, a Computer Science student and independent builder based in Srinagar, J&K, India. 
                Currently pursuing my B.Tech at Lovely Professional University, I focus on building production-grade 
                web applications and exploring modern engineering practices.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {/* What I Do */}
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-text-primary mb-6">What I Do</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I specialize in frontend and full-stack development, utilizing the React and Next.js ecosystem. 
                My passion lies in bridging the gap between beautiful design and robust engineering. Whether it's 
                architecting scalable database schemas, integrating secure payment gateways, or crafting intricate 
                animations, I strive for excellence in every layer of the stack.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                I actively embrace AI-assisted development tools to accelerate prototyping, improve code quality, 
                and tackle complex algorithmic challenges more effectively.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-12">Journey Timeline</h2>
            <div className="relative border-l border-border-subtle ml-4 md:ml-0 md:pl-8 space-y-12 max-w-4xl">
              {timeline?.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                  <div className="absolute -left-10 md:-left-10 w-4 h-4 rounded-full bg-surface border-2 border-accent top-1.5" />
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                    <span className="text-accent font-mono text-sm tracking-wider font-semibold shrink-0">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed md:ml-20">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Philosophy */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">Engineering Philosophy</h2>
                <div className="space-y-6 text-text-secondary">
                  <p>
                    <strong className="text-text-primary block mb-1">User-Centric Architecture</strong>
                    Technology exists to solve human problems. I design systems that prioritize user experience without compromising on performance or security.
                  </p>
                  <p>
                    <strong className="text-text-primary block mb-1">Iterative Refinement</strong>
                    Perfect is the enemy of shipped. I build modularly, deploy early, and iterate continuously based on feedback and real-world usage.
                  </p>
                  <p>
                    <strong className="text-text-primary block mb-1">Maintainability over Cleverness</strong>
                    Code is read more often than it is written. I prefer clear, expressive code over clever one-liners that obscure intent.
                  </p>
                </div>
              </div>
              
              <div className="bg-surface-elevated p-8 rounded-2xl border border-border-subtle">
                <h2 className="text-2xl font-bold text-text-primary mb-6">AI & Engineering</h2>
                <div className="text-text-secondary leading-relaxed space-y-4">
                  <p>
                    I view AI not as a replacement for software engineering, but as a powerful lever that multiplies an engineer's impact. 
                  </p>
                  <p>
                    By leveraging LLMs for boilerplate generation, complex refactoring, and exploring architectural trade-offs, I can focus my cognitive energy on high-level system design, security, and the unique business logic of the applications I build.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Connect */}
          <FadeIn>
            <div className="text-center bg-surface border border-border-subtle rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Want to connect?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button className="group">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button href="/resume" variant="secondary" className="rounded-full">
                  View Resume
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
