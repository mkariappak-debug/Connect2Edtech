import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ShieldCheck, Award, BadgeCheck, Briefcase, CheckCircle2, Search } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, Reveal } from "./primitives";

const certs = [
  { icon: Award, title: "Course Completion Certificate", desc: "Awarded on successful completion of any program." },
  { icon: BadgeCheck, title: "Industry Certification", desc: "Globally recognized, employer-trusted credentials." },
  { icon: Briefcase, title: "Internship Certificate", desc: "Proof of real, hands-on industry experience." },
];

export function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Credentials that <span className="text-gradient">open doors</span></>}
          sub="Verifiable certificates that prove your skills to employers worldwide."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {certs.map((c) => (
            <StaggerItem key={c.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-3xl glass-strong p-6 shadow-soft"
              >
                <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-brand-tri">
                  <div className="absolute inset-3 rounded-xl border-2 border-white/70" />
                  <div className="relative text-center text-primary-foreground">
                    <c.icon className="mx-auto size-10" />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-widest">Certified</p>
                    <p className="text-sm font-bold">Connect2Edtech</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-gradient-brand hover:text-primary-foreground">
                    <Download className="size-4" /> Download
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-gradient-brand hover:text-primary-foreground">
                    <ShieldCheck className="size-4" /> Verify
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <CertVerify />
        </Reveal>
      </div>
    </section>
  );
}

function CertVerify() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [id, setId] = useState("");

  function verify() {
    if (!id.trim()) return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  }

  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-brand p-1 shadow-float">
      <div className="rounded-[1.85rem] glass-strong p-8">
        <h3 className="text-center text-2xl font-bold">Certificate Verification</h3>
        <p className="mt-2 text-center text-muted-foreground">
          Instantly verify the authenticity of any Connect2Edtech certificate.
        </p>
        <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Certificate ID e.g. C2E-2024-8842"
              className="w-full rounded-full border border-border bg-card py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </div>
          <button
            onClick={verify}
            className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            {status === "loading" ? "Verifying…" : "Verify"}
          </button>
        </div>

        {status === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mx-auto mt-6 max-w-xl rounded-2xl border border-emerald-300 bg-emerald-50 p-5"
          >
            <div className="flex items-center gap-2 text-emerald-600">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              >
                <CheckCircle2 className="size-6" />
              </motion.span>
              <span className="text-lg font-bold">Verified</span>
            </div>
            <div className="mt-3 grid gap-1 text-sm text-foreground">
              <p><span className="text-muted-foreground">Name:</span> Ananya Verma</p>
              <p><span className="text-muted-foreground">Program:</span> Full Stack Development</p>
              <p><span className="text-muted-foreground">Issued:</span> March 2024</p>
              <p><span className="text-muted-foreground">Certificate ID:</span> {id || "C2E-2024-8842"}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}