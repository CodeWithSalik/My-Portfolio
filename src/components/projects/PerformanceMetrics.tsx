'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

interface PerformanceMetricsProps {
  metrics: Metric[];
  className?: string;
}

function CountUp({ value, suffix = '', prefix = '', decimals = 0 }: Omit<Metric, 'label'>) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(start);
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

export function PerformanceMetrics({ metrics, className }: PerformanceMetricsProps) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3", className)}>
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-surface border border-border-subtle rounded-xl p-5 flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold tracking-tighter text-text-primary font-mono mb-2">
            <CountUp value={metric.value} suffix={metric.suffix} prefix={metric.prefix} decimals={metric.decimals} />
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-text-muted">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
