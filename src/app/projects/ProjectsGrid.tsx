'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilter, Category } from '@/components/projects/ProjectFilter';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES: Category[] = ['All', 'fullstack', 'web'];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = projects.filter(
    (project) => {
      if (activeCategory === 'All') return true;
      return project.category === activeCategory;
    }
  );

  return (
    <div className="space-y-12">
      <ProjectFilter 
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
