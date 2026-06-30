import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Compass,
  FileCheck2,
  ShieldCheck,
  Building2,
  Briefcase,
  FileText,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, Reveal } from "./primitives";

const supports = [
  { icon: Compass, title: "Course Guidance" },
  { icon: FileCheck2, title: "Internship Verification" },
  { icon: ShieldCheck, title: "Certification Verification" },
  { icon: Building2, title: "University Collaboration" },
  { icon: Briefcase, title: "Placement Guidance" },
  { icon: FileText, title: "Resume Review" },
  { icon: HeartHandshake, title: "Career Counselling" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Thanks! Our team will reach out within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  return (
    <section id="contact" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={<>How can we <span className="text-gradient">help you?</span></>}
          sub="Have a question about courses, certifications or placements? We're here."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={submit} className="rounded-[2rem] glass-strong p-7 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Name" {...field("name")} required />
                <Input label="Email" type="email" {...field("email")} required />
                <Input label="Phone" {...field("phone")} />
                <Input label="Subject" {...field("subject")} />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  {...field("message")}
                  rows={4}
                  required
                  className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-gradient-brand py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2" stagger={0.07}>
            {supports.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full items-center gap-3 rounded-2xl glass-strong p-4 shadow-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <p className="text-sm font-semibold">{s.title}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}