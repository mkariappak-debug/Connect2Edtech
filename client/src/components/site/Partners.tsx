import { Reveal } from "./primitives";

const partners = ["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Accenture", "IBM", "Oracle", "Deloitte"];

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="overflow-hidden px-5 py-16 sm:px-8">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Placement Partners</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Our students work at the world's best</h2>
      </Reveal>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div
          className="marquee-track flex w-max items-center gap-4 animate-marquee"
          style={{ ["--marquee-duration" as string]: "30s" }}
        >
          {row.map((p, i) => (
            <div
              key={i}
              className="flex h-16 w-44 shrink-0 items-center justify-center rounded-2xl glass-strong text-lg font-bold text-muted-foreground shadow-soft transition-colors hover:text-primary"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}