import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { Magnetic } from "./primitives";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Certifications", to: "/#certifications" },
  { label: "About", to: "/#why" },
  { label: "Testimonials", to: "/#stories" },
  { label: "Contact", to: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6"
    >
      <nav
        className={`mt-3 flex w-full max-w-6xl items-center justify-between rounded-full glass px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "py-2 shadow-soft" : "py-3"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft">
            <GraduationCap className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Connect<span className="text-gradient">2</span>Edtech
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/auth"
            className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Login
          </Link>
          <Magnetic>
            <Link
              to="/auth"
              className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Enroll Now
            </Link>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full bg-muted text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-3 top-20 rounded-3xl glass-strong p-4 shadow-float lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-gradient-brand px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}