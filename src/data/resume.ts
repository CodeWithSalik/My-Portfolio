import { personalInfo } from './personal';
import { education } from './education';
import { skills } from './skills';
import { achievements } from './achievements';
import { projects } from './projects';
import { socialLinks } from './social';

export const resumeData = {
  personalInfo,
  education,
  skills,
  achievements,
  projects: projects.map(p => ({
    title: p.title,
    description: p.description,
    technologies: p.technologies,
    highlights: p.highlights
  })),
  socialLinks
};
