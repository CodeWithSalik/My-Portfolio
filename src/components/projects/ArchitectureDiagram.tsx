import { cn } from '@/lib/utils';

interface Layer {
  name: string;
  items: string[];
}

interface ArchitectureDiagramProps {
  layers: Layer[];
  className?: string;
}

export function ArchitectureDiagram({ layers, className }: ArchitectureDiagramProps) {
  return (
    <div className={cn("flex flex-col items-center w-full max-w-3xl mx-auto py-8", className)}>
      {layers.map((layer, index) => (
        <div key={layer.name} className="flex flex-col items-center w-full">
          <div className="w-full bg-surface border border-border-subtle rounded-xl p-6 relative group hover:border-accent/50 transition-colors">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4 text-center">
              {layer.name}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {layer.items.map((item) => (
                <div key={item} className="px-3 py-1.5 bg-canvas border border-border-subtle rounded-md text-sm font-medium text-secondary group-hover:text-text-primary transition-colors shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          {index < layers.length - 1 && (
            <div className="flex flex-col items-center py-3">
              <div className="w-px h-8 bg-gradient-to-b from-border-subtle to-accent/30" />
              <div className="w-2 h-2 rounded-full bg-accent/50 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
