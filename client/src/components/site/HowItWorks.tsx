import { motion } from "framer-motion";
import { Search, ShoppingCart, CreditCard, BookOpen, Award, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: Search, title: "Browse Courses", desc: "Explore IT & Non-IT programs." },
  { icon: ShoppingCart, title: "Add to Cart", desc: "Pick the courses you love." },
  { icon: CreditCard, title: "Enroll & Confirm", desc: "Secure, simple checkout." },
  { icon: BookOpen, title: "Learn & Complete", desc: "Live projects & mentorship." },
  { icon: Award, title: "Get Certified", desc: "Earn recognized credentials." },
  { icon: ShieldCheck, title: "Verify Certificate", desc: "Share & verify instantly." },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From enrollment to <span className="text-gradient">your dream job</span></>}
          sub="A clear, guided path from your first lesson to a verified certificate."
        />
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-brand-tri lg:block" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className="relative z-10 mx-auto grid size-18 place-items-center rounded-2xl bg-card shadow-float"
                  style={{ width: "4.5rem", height: "4.5rem" }}
                >
                  <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-brand opacity-90" />
                  <s.icon className="size-7 text-primary-foreground" />
                  <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full border-2 border-white bg-foreground text-xs font-bold text-background">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}