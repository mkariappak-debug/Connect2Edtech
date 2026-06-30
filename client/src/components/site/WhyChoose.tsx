import { motion } from "framer-motion";
import {
  GraduationCap,
  Hammer,
  Rocket,
  Briefcase,
  BadgeCheck,
  Award,
  Wallet,
  Infinity as InfinityIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./primitives";

const features = [
  { icon: GraduationCap, title: "Industry Expert Trainers", desc: "Learn from professionals working at top tech companies." },
  { icon: Hammer, title: "Hands-on Learning", desc: "Build real skills through practical, project-based modules." },
  { icon: Rocket, title: "Live Projects", desc: "Work on real-world projects that strengthen your portfolio." },
  { icon: Briefcase, title: "Internships", desc: "Gain genuine industry experience with guided internships." },
  { icon: BadgeCheck, title: "Placement Assistance", desc: "Dedicated support from mock interviews to offer letters." },
  { icon: Award, title: "Industry Certifications", desc: "Earn recognized certificates that employers trust." },
  { icon: Wallet, title: "Affordable Fees", desc: "Premium training at prices designed for every learner." },
  { icon: InfinityIcon, title: "Lifetime Learning Access", desc: "Revisit course content and updates whenever you want." },
];

export function WhyChoose() {
  return (
    <section id="why" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Connect2Edtech"
          title={<>Everything you need to <span className="text-gradient">get hired</span></>}
          sub="A complete learning ecosystem built around outcomes, mentorship and real industry exposure."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl glass-strong p-6 shadow-soft"
              >
                <div className="absolute -right-10 -top-10 size-28 rounded-full bg-gradient-brand-tri opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                  <f.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold">{f.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}