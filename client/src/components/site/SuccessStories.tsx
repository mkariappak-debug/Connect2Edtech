import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stories = [
  { name: "Ananya Verma", company: "Google", text: "Connect2Edtech transformed my career. The live projects and mentorship landed me my dream role.", initials: "AV" },
  { name: "Rohan Mehta", company: "Microsoft", text: "Best decision ever. The placement team prepared me for every interview round.", initials: "RM" },
  { name: "Sneha Iyer", company: "Amazon", text: "From zero coding to a software engineer. The trainers genuinely care about your growth.", initials: "SI" },
  { name: "Karan Singh", company: "Infosys", text: "Affordable, premium and outcome-driven. I got placed within 2 months of finishing.", initials: "KS" },
  { name: "Divya Rao", company: "Accenture", text: "The certificates are recognized everywhere. Recruiters trusted my skills instantly.", initials: "DR" },
  { name: "Aman Gupta", company: "TCS", text: "Hands-on internships made all the difference. I walked into interviews with real experience.", initials: "AG" },
];

function Card({ s }: { s: (typeof stories)[number] }) {
  return (
    <div className="w-80 shrink-0 rounded-3xl glass-strong p-6 shadow-soft">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground">“{s.text}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
          {s.initials}
        </span>
        <div>
          <p className="text-sm font-bold">{s.name}</p>
          <p className="text-xs text-muted-foreground">{s.company}</p>
        </div>
      </div>
    </div>
  );
}

export function SuccessStories() {
  const row = [...stories, ...stories];
  return (
    <section id="stories" className="overflow-hidden py-20">
      <div className="px-5 sm:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title={<>Careers <span className="text-gradient">transformed</span></>}
          sub="Real students. Real placements. Real impact."
        />
      </div>
      <div className="group relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div
          className="marquee-track flex w-max gap-5 animate-marquee"
          style={{ ["--marquee-duration" as string]: "42s" }}
        >
          {row.map((s, i) => (
            <Card key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}