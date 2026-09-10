import { Education } from '@/types';

export const education: Education[] = [
  {
    id: 'btech-cse',
    level: 'B.Tech Computer Science and Engineering',
    institution: 'Lovely Professional University (LPU)',
    period: '2026 – Present',
    status: 'current',
    recognition: 'Currently pursuing 1st Semester'
  },
  {
    id: 'class-12',
    level: 'Class XII (Higher Secondary)',
    institution: 'JKBOSE',
    period: 'Completed',
    score: { obtained: 439, total: 500, percentage: 87.8 },
    status: 'completed'
  },
  {
    id: 'class-10',
    level: 'Class X (Secondary)',
    institution: 'JKBOSE',
    period: 'Completed',
    score: { obtained: 442, total: 500, percentage: 88.4 },
    status: 'completed',
    recognition: 'Student of the Year (2023)'
  }
];
