import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '404 - Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-canvas text-center px-4">
      <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-text-primary font-mono mb-4">
        404
      </h1>
      <p className="text-xl text-text-secondary mb-8">
        This page doesn't exist.
      </p>
      <Button href="/" variant="primary" className="rounded-full group">
        Go home
      </Button>
    </div>
  );
}
