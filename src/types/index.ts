export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'fullstack' | 'mobile' | 'web' | 'native' | 'experiment';
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'production' | 'active' | 'completed' | 'in-progress';
  date: string;
  featured: boolean;
  lessonsLearned?: string[];
  highlights?: string[];
  architecture?: {
    overview: string;
    layers: { name: string; description: string; technologies: string[] }[];
  };
  metrics?: { label: string; value: string; description?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  year: number;
  organization: string;
  category: 'academic' | 'certification' | 'recognition' | 'participation';
  description: string;
  certificateImage?: string;
  details?: string;
}

export interface Education {
  id: string;
  level: string;
  institution: string;
  period: string;
  score?: { obtained: number; total: number; percentage: number };
  status: 'completed' | 'current';
  recognition?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'education' | 'project' | 'achievement' | 'milestone';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  brand: string;
  tagline: string;
  description: string;
  currentStatus: string;
  email: string;
  location: string;
}
