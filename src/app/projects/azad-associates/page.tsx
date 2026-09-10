import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight, Sun, Calculator, MailCheck, ShieldCheck, Zap } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';
import { ArchitectureDiagram } from '@/components/projects/ArchitectureDiagram';

export const metadata: Metadata = {
  title: 'Azad Associates Solar — Commercial Platform & Estimator | Salik Pirzada',
  description: 'Case study of Azad Associates Solar: a commercial rooftop solar platform with an interactive savings calculator and dual-dispatch lead pipeline built by Salik Pirzada.',
};

export default function AzadAssociatesPage() {
  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Node.js',
    'Express 5',
    'Nodemailer',
    'CORS',
    'Render Cloud API',
  ];

  return (
    <article className="min-h-screen py-24 md:py-32 bg-canvas">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Header & Breadcrumb */}
        <section className="space-y-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors mb-4"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Sun size={14} className="text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">Commercial Client Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary">
              Azad Associates Solar
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed">
              Commercial platform and automated solar savings calculator for an authorized KPDCL rooftop vendor.
            </p>

            <div className="p-3 rounded-xl bg-surface border border-border-subtle inline-block">
              <span className="text-xs font-mono text-text-muted">
                Official Attribution: <strong className="text-text-primary">Developed by @CodeWithSalik</strong>
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-surface border border-border-subtle text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="https://github.com/CodeWithSalik/azad-associates" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface text-text-primary border border-border-subtle hover:bg-surface-elevated transition-colors"
            >
              <GitHubIcon size={18} />
              GitHub Repository
            </a>

            <a 
              href="https://aa-backend-litt.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-canvas text-text-muted border border-border-subtle hover:text-text-primary transition-colors text-xs font-mono"
            >
              <ExternalLink size={14} />
              Backend API (Render)
            </a>
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-6 pt-12 border-t border-border-subtle">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Overview</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Azad Associates Solar is an authorized rooftop solar vendor registered with the Kashmir Power Distribution Corporation Limited (KPDCL), operating in Sopore, Baramulla, Jammu & Kashmir. Built as an independent contract project, the platform establishes an authoritative digital presence for the business and streamlines customer intake under India&apos;s <strong>PM Surya Ghar Muft Bijli Yojana</strong> national solar rooftop initiative.
          </p>
        </section>

        {/* Architecture */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Architecture & Lead Pipeline</h2>
          <ArchitectureDiagram layers={[
            { name: 'Client Presentation Layer', items: ['Static Frontend (HTML5/CSS3/Vanilla JS)', 'Glassmorphism Theme', 'Interactive Calculator'] },
            { name: 'Lead Intake Microservice (Render)', items: ['Node.js', 'Express 5 REST API', 'CORS Security Middleware', 'Input Sanitization'] },
            { name: 'Automated Dual Autoresponder', items: ['Nodemailer SMTP Transporter', 'Instant Business Owner Alert', 'Branded Client Acknowledgment'] },
          ]} />
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Engineered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="text-lg font-semibold text-text-primary">Solar Savings Calculator</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Accepts monthly electricity consumption and recommended system capacity (kW) to compute estimated monthly solar generation, electricity bill reduction percentage, carbon offset metrics, and estimated ROI payback timeline.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <MailCheck className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-text-primary">Automated Dual Autoresponder</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Submissions to <code>/send-quote-request</code> asynchronously trigger two distinct emails via Nodemailer: an urgent notification containing full prospect parameters to the business operator, and a confirmation receipt to the applicant.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="text-lg font-semibold text-text-primary">PM Surya Ghar Subsidy Guide</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Clear breakdown of government subsidies, net-metering regulations, and application requirements specific to KPDCL domestic consumers in Jammu & Kashmir.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-status-green" />
                <h3 className="text-lg font-semibold text-text-primary">Production Reliability</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Decoupled backend hosted on Render prevents frontend downtime during traffic spikes and protects client API credentials with strict environment variables.
              </p>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Engineering Takeaways</h2>
          <div className="p-6 rounded-2xl bg-surface border border-border-subtle">
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              Building for a regional commercial enterprise underscored the value of lightweight static frontends paired with specialized microservices. The separation of concern ensured zero hosting costs for static assets, immediate page load speeds for mobile users across varied network conditions in Kashmir, and a reliable automated lead dispatch backend.
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <a 
            href="https://github.com/CodeWithSalik/azad-associates" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 rounded-xl bg-text-primary text-canvas font-semibold hover:bg-text-secondary transition-colors text-sm"
          >
            View GitHub Repository
          </a>

          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Browse Other Projects <ArrowRight size={14} />
          </Link>
        </section>

      </div>
    </article>
  );
}
