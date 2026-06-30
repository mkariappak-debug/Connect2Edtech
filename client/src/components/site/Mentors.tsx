import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, Tilt } from "./primitives";
import mentor1 from "@/assets/mentor-1.png";
import mentor2 from "@/assets/mentor-2.png";

const mentors = [
  {
    img: mentor1,
    name: "Dr. Rahul Sharma",
    role: "Founder & CEO",
    expertise: "AI | Data Science Expert",
  },
  {
    img: mentor2,
    name: "Priya Nair",
    role: "Technical Director",
    expertise: "Full Stack & Cloud Architect",
  },
];

export function Mentors() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Leadership"
          title={<>Meet Our <span className="text-gradient">Expert Mentors</span></>}
          sub="Industry veterans guiding you at every step of your career journey."
        />
        <Stagger className="mt-16 grid gap-16 pt-8 sm:grid-cols-2" stagger={0.15}>
          {mentors.map((m) => (
            <StaggerItem key={m.name}>
              <Tilt className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-[2rem] glass-strong px-6 pb-7 pt-24 text-center shadow-float"
                >
                  <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2">
                    <div className="absolute inset-x-6 bottom-0 top-10 rounded-full bg-gradient-brand-tri opacity-70 blur-md" />
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      width={700}
                      height={800}
                      className="relative z-10 h-48 w-full object-contain drop-shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="mt-1 font-semibold text-primary">{m.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.expertise}</p>
                  <div className="mt-5 flex justify-center gap-2">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="grid size-10 place-items-center rounded-full bg-muted text-foreground transition-colors hover:bg-gradient-brand hover:text-primary-foreground"
                      >
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}