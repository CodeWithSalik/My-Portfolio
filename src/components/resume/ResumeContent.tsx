'use client';

import React from 'react';
import Link from 'next/link';
import {
  Printer,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Database,
  Lock,
  CheckCircle2,
  GraduationCap,
  Award,
  Mail,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';
import { GitHubIcon, InstagramIcon } from '@/components/ui/Icons';
import { education } from '@/data/education';
import { achievements } from '@/data/achievements';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { personalInfo } from '@/data/personal';

export default function ResumeContent() {
  const handlePrint = () => {
    window.print();
  };

  const kashmirStag = projects.find((p) => p.slug === 'kashmir-stag');
  const fragments = projects.find((p) => p.slug === 'fragments-of-me');
  const azad = projects.find((p) => p.slug === 'azad-associates');

  const coreStrengths = [
    {
      title: 'Full-Stack Web Engineering',
      icon: Terminal,
      description:
        'End-to-end architecture across React 19, Next.js App Router Server Components, and Node.js / Express microservices with full type safety.',
    },
    {
      title: 'System Design & Architecture',
      icon: Layers,
      description:
        'Domain-driven service separation (14 isolated domain services in KashmirStag), decoupling catalog discovery from transactional order processing.',
    },
    {
      title: 'API Development & Validation',
      icon: Cpu,
      description:
        'RESTful endpoints with strict Zod schema runtime validation, sliding-window rate limiting, and centralized error classification.',
    },
    {
      title: 'Data Modeling & Integrity',
      icon: Database,
      description:
        'Compound-indexed Mongoose 8 schemas in MongoDB Atlas and scalable subcollection structures in Firebase Firestore.',
    },
    {
      title: 'Defensive Security',
      icon: Lock,
      description:
        'Timing-safe signature verification (crypto.timingSafeEqual), stateless HTTP-only JWT cookies (jose), RBAC, IDOR protection, and magic-byte upload validation.',
    },
    {
      title: 'Testing & Verification',
      icon: CheckCircle2,
      description:
        'Audited 28-step end-to-end regression workflows verifying catalog, category, variant, inventory ledger, and order state machines.',
    },
    {
      title: 'Production-Oriented Engineering',
      icon: ShieldCheck,
      description:
        'Two-phase atomic inventory reservation (availableQty = onHand - reservedQty), race-condition protection, and payment webhook idempotency.',
    },
  ];

  return (
    <div className="pt-28 pb-20 print:pt-0 print:pb-0">
      {/* =========================================================
          WEB VIEW: Sophisticated Editorial Layout for Recruiters
          ========================================================= */}
      <div className="print:hidden">
        <Section>
          {/* Top Kicker & Action Bar */}
          <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border-subtle">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                  Recruiter & Engineering Profile
                </span>
                <span className="text-text-muted text-xs">•</span>
                <span className="text-xs font-mono text-text-muted">Updated 2026</span>
              </div>
              <p className="text-sm text-text-secondary">
                Designed for engineering managers, tech recruiters, and hiring teams.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={handlePrint} variant="primary" size="sm" className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                <span>Print / Download PDF</span>
              </Button>
              <Button href="/contact" variant="secondary" size="sm">
                Get in Touch
              </Button>
            </div>
          </FadeIn>

          {/* 1. Resume Hero */}
          <FadeIn delay={0.05}>
            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-border-subtle mb-16 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-status-green text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Software Engineering Internships & Opportunities</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
                    Salik Pirzada
                  </h1>

                  <p className="text-xl md:text-2xl font-semibold text-accent tracking-tight">
                    Computer Science Student • Full-Stack Developer • Independent Builder
                  </p>

                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    Undergraduate engineer with hands-on experience designing and deploying production software systems. Creator of <strong className="text-text-primary">KashmirStag</strong> (production B2C commerce platform with atomic inventory and payment verification) and <strong className="text-text-primary">Fragments of Me</strong>. Focused on systems thinking, data integrity, defensive security, and shipping software that works reliably in real-world conditions.
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-text-muted">
                    <span className="px-3 py-1.5 rounded-lg bg-canvas border border-border-subtle text-text-secondary">
                      Institution: Lovely Professional University (B.Tech CSE)
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-canvas border border-border-subtle text-text-secondary">
                      Location: Jalandhar, Punjab, India
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-canvas border border-border-subtle text-text-secondary">
                      Brand: CodeWithSalik
                    </span>
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="flex flex-col gap-2.5 shrink-0 lg:border-l lg:border-border-subtle lg:pl-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-text-muted font-bold mb-1">
                    Verified Links
                  </span>
                  <a
                    href="mailto:pirzadasalik543@gmail.com"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors font-mono"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span>pirzadasalik543@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/CodeWithSalik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors font-mono"
                  >
                    <GitHubIcon size={16} />
                    <span>github.com/CodeWithSalik</span>
                  </a>
                  <a
                    href="https://www.instagram.com/codewithsalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors font-mono"
                  >
                    <InstagramIcon size={16} />
                    <span>@codewithsalik</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 2. Core Engineering Strengths */}
          <section className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface border border-border-subtle text-accent">
                  <Cpu size={18} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                  Core Engineering Capabilities
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreStrengths.map((strength, idx) => {
                const Icon = strength.icon;
                const isWide = idx === 0;
                return (
                  <FadeIn key={strength.title} delay={idx * 0.04} className={isWide ? 'lg:col-span-2' : ''}>
                    <div className="h-full p-6 rounded-2xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-canvas border border-border-subtle text-accent">
                          <Icon size={16} />
                        </div>
                        <h3 className="font-semibold text-text-primary text-base">
                          {strength.title}
                        </h3>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </section>

          {/* 3. Selected Projects */}
          <section className="mb-20">
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle text-accent">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                      Selected Production Projects
                    </h2>
                    <p className="text-sm text-text-secondary">
                      Architected, developed, and deployed end-to-end software systems.
                    </p>
                  </div>
                </div>
                <Link
                  href="/projects"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View all project case studies <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {/* Flagship: KashmirStag */}
              {kashmirStag && (
                <FadeIn delay={0.08}>
                  <div className="p-8 md:p-10 rounded-3xl bg-surface border-2 border-amber-500/30 relative overflow-hidden shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>Flagship Production System</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
                          {kashmirStag.title}
                        </h3>
                        <p className="text-sm font-mono text-text-muted mt-1">
                          Role: Full-Stack Architect & Creator • Deployed Production
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href="/projects/kashmir-stag"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:bg-accent/90 transition-colors"
                        >
                          Engineering Case Study <ArrowRight size={14} />
                        </Link>
                        {kashmirStag.liveUrl && (
                          <a
                            href={kashmirStag.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-canvas border border-border-subtle text-text-secondary hover:text-text-primary text-xs font-mono transition-colors"
                          >
                            <ExternalLink size={13} /> Live Storefront
                          </a>
                        )}
                        {kashmirStag.githubUrl && (
                          <a
                            href={kashmirStag.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-canvas border border-border-subtle text-text-secondary hover:text-text-primary text-xs font-mono transition-colors"
                            aria-label="KashmirStag GitHub"
                          >
                            <GitHubIcon size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-base text-text-secondary mb-6 max-w-3xl leading-relaxed">
                      {kashmirStag.description}
                    </p>

                    {/* Engineering Highlights */}
                    <div className="bg-canvas border border-border-subtle rounded-2xl p-6 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted font-bold mb-4">
                        Key Engineering Achievements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-text-secondary">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-status-green shrink-0 mt-0.5" />
                          <span>Atomic two-phase inventory reservations (<code>availableQty = onHand - reservedQty</code>) preventing concurrent overselling.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-status-green shrink-0 mt-0.5" />
                          <span>Timing-safe Razorpay HMAC verification (<code>crypto.timingSafeEqual</code>) and idempotent webhook handling.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-status-green shrink-0 mt-0.5" />
                          <span>Audited back-office operations suite verified across an automated 28-step regression test suite.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-status-green shrink-0 mt-0.5" />
                          <span>Historical order line-item snapshots preserving past transaction fidelity against catalog mutations.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-status-green shrink-0 mt-0.5" />
                          <span>100 SEO, 100 Accessibility, 100 Best Practices Lighthouse audit with 0.4s FCP.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-status-green shrink-0 mt-0.5" />
                          <span>Layered architecture with 19 normalized Mongoose schemas and 14 domain services.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2">
                      {kashmirStag.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-canvas border border-border-subtle text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Grid for Fragments of Me & Azad Associates */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Fragments of Me */}
                {fragments && (
                  <FadeIn delay={0.12}>
                    <div className="h-full flex flex-col justify-between p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold">
                              Web Application & Audio Engine
                            </span>
                            <h3 className="text-2xl font-bold text-text-primary mt-1">
                              {fragments.title}
                            </h3>
                          </div>
                          {fragments.liveUrl && (
                            <a
                              href={fragments.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-canvas text-text-muted hover:text-text-primary border border-border-subtle transition-colors"
                              aria-label="Fragments of Me Live"
                            >
                              <ExternalLink size={15} />
                            </a>
                          )}
                        </div>

                        <p className="text-sm text-text-secondary leading-relaxed mb-6">
                          {fragments.description}
                        </p>

                        <ul className="space-y-2 text-xs text-text-secondary mb-6">
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Engineered custom ambient audio player with 4 mood-based soundscapes.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Designed Firestore subcollections for granular line reactions without document limit bottlenecks.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Created dedicated Express + Nodemailer microservice for transactional emails and newsletter dispatch.</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {fragments.technologies.slice(0, 6).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[11px] font-mono rounded bg-canvas border border-border-subtle text-text-secondary"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/projects/fragments-of-me"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-text-primary hover:text-accent transition-colors"
                        >
                          Read Case Study <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                )}

                {/* Azad Associates */}
                {azad && (
                  <FadeIn delay={0.16}>
                    <div className="h-full flex flex-col justify-between p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
                              Commercial Client Platform
                            </span>
                            <h3 className="text-2xl font-bold text-text-primary mt-1">
                              {azad.title}
                            </h3>
                          </div>
                          {azad.githubUrl && (
                            <a
                              href={azad.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-canvas text-text-muted hover:text-text-primary border border-border-subtle transition-colors"
                              aria-label="Azad Associates GitHub"
                            >
                              <GitHubIcon size={15} />
                            </a>
                          )}
                        </div>

                        <p className="text-sm text-text-secondary leading-relaxed mb-6">
                          {azad.description}
                        </p>

                        <ul className="space-y-2 text-xs text-text-secondary mb-6">
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Interactive solar estimator calculating monthly generation, tariff savings, and payback period.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Dedicated Express 5 lead dispatch service on Render sending dual automated notifications.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Built for an authorized KPDCL rooftop solar provider under PM Surya Ghar Muft Bijli Yojana.</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {azad.technologies.slice(0, 6).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[11px] font-mono rounded bg-canvas border border-border-subtle text-text-secondary"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/projects/azad-associates"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-text-primary hover:text-accent transition-colors"
                        >
                          Read Case Study <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </section>

          {/* 4. Technical Skills */}
          <section className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-surface border border-border-subtle text-accent">
                  <Terminal size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                    Technical Stack & Methodologies
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Organized by domain • No arbitrary percentage meters.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((category, idx) => (
                <FadeIn key={category.name} delay={idx * 0.04}>
                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-text-primary mb-4 pb-2 border-b border-border-subtle">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-canvas border border-border-subtle text-text-secondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* 5. Education */}
          <section className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-surface border border-border-subtle text-accent">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                    Education & Academic History
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Factual academic credentials with verified marks and distinctions.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu, idx) => (
                <FadeIn key={edu.id} delay={idx * 0.05}>
                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-canvas border border-border-subtle text-accent font-semibold">
                          {edu.period}
                        </span>
                        {edu.score && (
                          <span className="text-xs font-mono font-bold text-status-green">
                            {edu.score.obtained}/{edu.score.total} ({edu.score.percentage}%)
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-text-primary text-base mb-1">
                        {edu.level}
                      </h3>
                      <p className="text-sm text-text-secondary mb-3">
                        {edu.institution}
                      </p>
                    </div>

                    {edu.recognition && (
                      <div className="pt-3 border-t border-border-subtle">
                        <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">
                          ★ {edu.recognition}
                        </span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* 6. Verified Achievements & Certifications */}
          <section className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-surface border border-border-subtle text-accent">
                  <Award size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                    Verified Honors & Certifications
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Official certifications, institutional appreciation, and academic awards.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 0.05}>
                  <div className="p-6 rounded-2xl bg-surface border border-border-subtle h-full flex flex-col justify-between hover:border-accent/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-canvas border border-border-subtle text-text-muted">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-text-primary text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-accent mb-3">
                        {item.organization}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* 7. Contact / Recruiter CTA */}
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl bg-surface-elevated border border-border-subtle text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                Let&apos;s Build Something Meaningful
              </h2>
              <p className="text-base text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
                Currently looking for engineering internships, technical collaborations, and junior full-stack opportunities. Direct contact is welcomed.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="mailto:pirzadasalik543@gmail.com" className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>Email Directly</span>
                </Button>
                <Button href="https://github.com/CodeWithSalik" variant="secondary" className="flex items-center gap-2">
                  <GitHubIcon size={16} />
                  <span>Explore GitHub</span>
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact Form
                </Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      </div>

      {/* =========================================================
          PRINT VIEW: Clean, ATS-Compliant Document Layout
          ========================================================= */}
      <div className="hidden print:block bg-white text-black print:p-0 print:m-0 print:max-w-none print:w-full font-sans leading-relaxed text-xs">
        {/* Print Header */}
        <header className="border-b-2 border-black pb-3 mb-3 break-inside-avoid">
          <h1 className="text-xl font-bold tracking-tight text-black mb-0.5">
            {personalInfo.name}
          </h1>
          <p className="text-xs font-semibold text-gray-800 mb-1">
            Computer Science Student • Full-Stack Developer • Independent Builder
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-700 font-mono">
            <span>Email: {personalInfo.email}</span>
            <span>GitHub: github.com/CodeWithSalik</span>
            <span>Location: {personalInfo.location}</span>
          </div>
        </header>

        {/* Print Professional Summary */}
        <section className="mb-3 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1 font-mono">
            Professional Summary
          </h2>
          <p className="text-gray-800 leading-normal text-[11px]">
            Computer Science undergraduate at Lovely Professional University and full-stack software builder with hands-on experience designing, testing, and deploying production systems. Creator of KashmirStag (production B2C commerce platform with atomic inventory reservations, timing-safe payment verification, and 28-step audited back-office) and Fragments of Me. Experienced in TypeScript, React, Next.js, Node.js, and distributed database modeling.
          </p>
        </section>

        {/* Print Education */}
        <section className="mb-3 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1 font-mono">
            Education
          </h2>
          <div className="space-y-1.5 text-[11px]">
            <div>
              <div className="flex justify-between items-baseline">
                <strong className="text-black font-semibold">B.Tech in Computer Science and Engineering</strong>
                <span className="font-mono text-gray-700">2026 – Present</span>
              </div>
              <p className="text-gray-700">Lovely Professional University (LPU) · Currently in 1st Semester</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <strong className="text-black font-semibold">Class XII (Higher Secondary) — Distinction</strong>
                <span className="font-mono text-black font-semibold">439 / 500 (87.8%)</span>
              </div>
              <p className="text-gray-700">JKBOSE · Focus on Physics, Chemistry, Mathematics & IT</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <strong className="text-black font-semibold">Class X (Matriculation) — Distinction</strong>
                <span className="font-mono text-black font-semibold">442 / 500 (88.4%)</span>
              </div>
              <p className="text-gray-700">JKBOSE · Student of the Year (2023)</p>
            </div>
          </div>
        </section>

        {/* Print Selected Projects */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 font-mono">
            Key Engineering Projects
          </h2>

          <div className="space-y-2.5">
            {/* KashmirStag */}
            <div className="break-inside-avoid text-[11px]">
              <div className="flex justify-between items-baseline">
                <strong className="text-black font-semibold">KashmirStag — Full-Stack B2C E-Commerce Marketplace</strong>
                <span className="font-mono text-gray-700">Next.js 15, TypeScript, MongoDB, Razorpay</span>
              </div>
              <p className="text-[10px] font-mono text-gray-600 mb-0.5">
                Live: kashmir-stag.vercel.app · In-Depth Case Study: /projects/kashmir-stag
              </p>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800">
                <li>Architected production commerce platform with 19 normalized Mongoose schemas and 14 domain services.</li>
                <li>Designed atomic two-phase inventory reservation (<code>availableQty = onHand - reservedQty</code>) preventing concurrent overselling.</li>
                <li>Engineered timing-safe Razorpay signature verification (<code>crypto.timingSafeEqual</code>) and idempotent webhook handling.</li>
                <li>Built audited back-office operations suite verified across an automated 28-step end-to-end regression test suite.</li>
                <li>Achieved clean Lighthouse metrics: 100 SEO, 100 Accessibility, 100 Best Practices, and 0.4s FCP.</li>
              </ul>
            </div>

            {/* Fragments of Me */}
            <div className="break-inside-avoid text-[11px]">
              <div className="flex justify-between items-baseline">
                <strong className="text-black font-semibold">Fragments of Me — Emotion-First Literary Platform</strong>
                <span className="font-mono text-gray-700">Next.js 16, React 19, Firebase Firestore, Express</span>
              </div>
              <p className="text-[10px] font-mono text-gray-600 mb-0.5">
                Live: fragmants-of-me.vercel.app
              </p>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800">
                <li>Developed reading sanctuary with ambient audio soundscapes and granular line-by-line reactions.</li>
                <li>Modeled Firestore subcollections to scale line reactions and threaded commentary without document limit bottlenecks.</li>
                <li>Built dedicated Node.js/Express microservice for transactional email verification and broadcast newsletters.</li>
              </ul>
            </div>

            {/* Azad Associates */}
            <div className="break-inside-avoid text-[11px]">
              <div className="flex justify-between items-baseline">
                <strong className="text-black font-semibold">Azad Associates Solar — Commercial Platform & Estimator</strong>
                <span className="font-mono text-gray-700">HTML5, CSS3, JavaScript, Express 5, Nodemailer</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-800">
                <li>Developed commercial web presence for authorized KPDCL rooftop solar provider under PM Surya Ghar Muft Bijli Yojana.</li>
                <li>Implemented interactive solar savings calculator estimating monthly generation, tariff savings, and payback period.</li>
                <li>Engineered Express 5 lead dispatch service on Render sending dual automated notifications to owners and clients.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Print Technical Skills */}
        <section className="mb-3 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1 font-mono">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div>
              <strong className="text-black">Languages: </strong>
              <span className="text-gray-800">Python, TypeScript, JavaScript, HTML5, CSS3</span>
            </div>
            <div>
              <strong className="text-black">Frontend: </strong>
              <span className="text-gray-800">React 19, Next.js (App & Pages), Tailwind CSS, Server Components</span>
            </div>
            <div>
              <strong className="text-black">Backend: </strong>
              <span className="text-gray-800">Node.js, Express, REST APIs, Domain Services, Nodemailer</span>
            </div>
            <div>
              <strong className="text-black">Databases: </strong>
              <span className="text-gray-800">MongoDB, Mongoose 8, MongoDB Atlas, Firebase Firestore</span>
            </div>
            <div className="col-span-2">
              <strong className="text-black">Systems & Security: </strong>
              <span className="text-gray-800">Atomic Inventory Operations, Concurrency Protection, Payment Idempotency, Timing-Safe Verification, RBAC, IDOR Defense, Rate Limiting, Automated Testing</span>
            </div>
          </div>
        </section>

        {/* Print Honors */}
        <section className="break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1 font-mono">
            Verified Honors & Certifications
          </h2>
          <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] text-gray-800">
            <li>
              <strong className="text-black">Student of the Year (2023)</strong> — Matriculation. Conferred for academic excellence and institutional discipline.
            </li>
            <li>
              <strong className="text-black">Certified Game Developer (2022)</strong> — WhiteHat Jr / BYJU&apos;S FutureSchool. Completed applied curriculum in software logic and game loops.
            </li>
            <li>
              <strong className="text-black">Certificate of Appreciation (2025)</strong> — DIET Kupwara. District-level seminar &quot;Millets for Health & Sustainable Planet&quot; (16/04/2025).
            </li>
            <li>
              <strong className="text-black">Certificate of Participation & Appreciation (2024)</strong> — Khyber Medical Institute. Community medical camp service (30/10/2024).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

