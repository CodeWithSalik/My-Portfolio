import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestingEvidenceProps {
  tests: string[];
  className?: string;
}

export function TestingEvidence({ tests, className }: TestingEvidenceProps) {
  return (
    <div className={cn("bg-surface border border-border-subtle rounded-2xl p-6 md:p-8", className)}>
      <h3 className="text-xl font-semibold text-text-primary mb-6">Verified Workflows & Testing</h3>
      <ul className="space-y-4">
        {tests.map((test, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-status-green shrink-0 mt-0.5" />
            <span className="text-text-secondary leading-relaxed">{test}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
