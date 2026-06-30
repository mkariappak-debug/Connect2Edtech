import { Reveal, Counter, Stagger, StaggerItem } from "./primitives";

const stats = [
  { to: 5000, suffix: "+", label: "Students Trained" },
  { to: 150, suffix: "+", label: "Courses" },
  { to: 95, suffix: "%", label: "Placement Assistance" },
  { to: 40, suffix: "+", label: "Industry Mentors" },
  { to: 300, suffix: "+", label: "Hiring Partners" },
];

export function TrustStats() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-brand px-6 py-12 shadow-float sm:px-12">
        <Reveal className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Trusted by thousands
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Numbers that speak for themselves
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-5" stagger={0.1}>
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-primary-foreground sm:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm font-medium text-primary-foreground/80">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}