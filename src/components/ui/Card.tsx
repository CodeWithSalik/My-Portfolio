'use client';

import { ReactNode, MouseEvent, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className, href }: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const content = (
    <div
      ref={cardRef}
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm transition-colors',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-accent-glow), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}
