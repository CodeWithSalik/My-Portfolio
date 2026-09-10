import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
}

export default function Section({
  children,
  className,
  id,
  title,
  subtitle,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={cn('w-full py-16 md:py-24', className)}>
      <div className={cn('mx-auto px-6', fullWidth ? 'w-full' : 'max-w-6xl')}>
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-text-secondary">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
