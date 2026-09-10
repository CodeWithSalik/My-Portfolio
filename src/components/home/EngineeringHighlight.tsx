export default function EngineeringHighlight() {
  const principles = [
    "Correctness over appearance",
    "Production behavior matters more than demo behavior",
    "Every important state transition should be deliberate",
    "One source of truth beats duplicated state",
    "Security is part of architecture, not an afterthought",
    "If something can fail, understand how it fails",
    "Build the system, not just the interface",
    "Test the assumptions, not just the happy path"
  ];

  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">How I Think About Software</h2>
        <p className="text-text-secondary text-lg max-w-2xl">Principles that guide my technical decisions and engineering approach.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((principle, index) => (
          <div key={index} className="p-6 rounded-xl border border-border-subtle bg-surface hover:bg-elevated transition-colors flex flex-col">
            <span className="text-xs font-mono text-text-muted mb-4 block">0{index + 1}</span>
            <h3 className="text-base font-semibold text-text-primary leading-tight mt-auto">{principle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
