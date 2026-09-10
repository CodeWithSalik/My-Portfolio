export default function HowIBuild() {
  const practices = [
    "Reviews and refines generated code",
    "Identifies edge cases & bugs",
    "Understands system behavior deeply",
    "Reasons about architecture & scalability",
    "Identifies missing requirements",
    "Thinks about failure states proactively",
    "Tests implementations thoroughly"
  ];

  return (
    <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="bg-gradient-to-br from-surface to-elevated border border-border-subtle rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-6">
            AI helps me move faster. Systems thinking tells me <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400">where to go.</span>
          </h2>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            I use AI as a development multiplier, but I don't outsource my thinking. Writing code is only 20% of the job; understanding the problem, designing the architecture, and handling failure states is the other 80%.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            My methodology combines rapid prototyping with rigorous engineering standards to build software that actually works in production.
          </p>
        </div>
        
        <div className="md:w-1/2 w-full">
          <div className="bg-canvas border border-border-subtle rounded-2xl p-6 shadow-xl">
            <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6 pb-4 border-b border-border-subtle">My Approach</h3>
            <ul className="space-y-4">
              {practices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-primary">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
