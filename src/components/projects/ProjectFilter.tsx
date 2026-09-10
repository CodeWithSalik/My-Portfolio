'use client';

import { cn } from '@/lib/utils';

export type Category = 'All' | 'fullstack' | 'mobile' | 'web' | 'native' | 'experiment';

interface ProjectFilterProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  className?: string;
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange, className }: ProjectFilterProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeCategory === category
              ? "bg-text-primary text-canvas font-semibold shadow-sm"
              : "bg-surface text-text-secondary border border-border-subtle hover:text-text-primary hover:border-text-primary/30"
          )}
        >
          {category === 'fullstack' ? 'Full Stack' : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
