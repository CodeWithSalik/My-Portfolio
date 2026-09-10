import { Metadata } from 'next';
import ResumeContent from '@/components/resume/ResumeContent';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume of Salik Pirzada, Computer Science student and full-stack developer.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <ResumeContent />
    </div>
  );
}
