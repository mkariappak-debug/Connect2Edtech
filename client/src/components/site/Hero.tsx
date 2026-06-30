import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Play, ArrowRight, Sparkles, Award, Users, Briefcase } from "lucide-react";
import { Magnetic } from "./primitives";
import heroPerson from "@/assets/hero-person.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // mouse parallax
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pt-40"
    >
      {/* background blobs */}
      <motion.div
        style={{ y: yBlob }}
        className="pointer-events-none absolute -right-40 -top-20 size-[34rem] animate-blob bg-gradient-brand-tri opacity-40 blur-3xl"
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[28rem] animate-blob bg-accent opacity-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground shadow-soft"
          >
            <Sparkles className="size-4 text-primary" />
            Connect Your Passion. Build Your Future.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            Learn Skills.
            <br />
            Build Careers.
            <br />
            <span className="text-gradient">Shape Your Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Connect2Edtech empowers students, graduates and professionals with
            industry-focused training, certifications, internships and placement support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-float transition-transform hover:scale-[1.03]"
              >
                Explore Courses <ArrowRight className="size-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/auth"
                className="inline-flex items-center rounded-full glass-strong px-6 py-3.5 text-base font-semibold text-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Enroll Now
              </a>
            </Magnetic>
            <button className="group inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-base font-semibold text-foreground">
              <span className="grid size-10 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110">
                <Play className="size-4 fill-current" />
              </span>
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div>
              <span className="block text-2xl font-bold text-foreground">5000+</span>
              Students Trained
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="block text-2xl font-bold text-foreground">95%</span>
              Placement Rate
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="block text-2xl font-bold text-foreground">4.9★</span>
              Avg. Rating
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto h-[30rem] w-full max-w-md sm:h-[34rem]">
          {/* card behind, image pops out */}
          <motion.div
            style={{ x: useTransform(mx, (v) => v * 0.4), y: useTransform(my, (v) => v * 0.4) }}
            className="absolute inset-x-4 bottom-0 top-16 rounded-[2.5rem] bg-gradient-brand-tri shadow-float"
          />
          <div className="absolute inset-x-8 bottom-4 top-24 rounded-[2rem] glass-strong" />

          <motion.img
            src={heroPerson}
            alt="Connect2Edtech student"
            width={900}
            height={1100}
            style={{ y: yImg, x: useTransform(mx, (v) => v * 0.8) }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[34rem] w-auto object-contain drop-shadow-2xl"
          />

          {/* floating glass stat cards */}
          <FloatingCard className="left-0 top-12" delay={0.6} icon={<Award className="size-4" />} title="Industry Certified" sub="ISO Verified" />
          <FloatingCard className="-right-2 top-1/3" delay={0.8} icon={<Users className="size-4" />} title="2500+ Students" sub="Active learners" />
          <FloatingCard className="-left-2 bottom-16" delay={1} icon={<Briefcase className="size-4" />} title="Placement Support" sub="300+ partners" />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  delay,
  icon,
  title,
  sub,
}: {
  className: string;
  delay: number;
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-20 flex items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2.5 shadow-float ${className}`}
    >
      <span className="grid size-8 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </motion.div>
  );
}