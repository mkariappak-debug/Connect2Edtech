import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { GraduationCap, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { useSeo } from "@/lib/seo";

export default function Auth() {
  useSeo(
    "Login or Sign Up — Connect2Edtech",
    "Access your Connect2Edtech student dashboard, courses and certificates.",
  );

  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-16">
      <div className="pointer-events-none absolute -left-32 top-0 size-[28rem] animate-blob bg-gradient-brand-tri opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[26rem] animate-blob bg-accent opacity-50 blur-3xl" />

      <Link to="/" className="absolute left-5 top-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" /> Back home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md rounded-[2rem] glass-strong p-8 shadow-float"
      >
        <div className="flex flex-col items-center text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
            <GraduationCap className="size-6" />
          </span>
          <h1 className="mt-4 text-2xl font-bold">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "login" ? "Login to continue learning" : "Start your career journey today"}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 rounded-full bg-muted p-1">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`relative rounded-full py-2 text-sm font-semibold transition-colors ${
                mode === m ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {mode === m && (
                <motion.span
                  layoutId="auth-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-brand"
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                />
              )}
              {m === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(mode === "login" ? "Logged in successfully!" : "Account created!");
          }}
          className="mt-6 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {mode === "signup" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Field icon={User} placeholder="Full name" />
              </motion.div>
            )}
          </AnimatePresence>
          <Field icon={Mail} type="email" placeholder="Email address" />
          <Field icon={Lock} type="password" placeholder="Password" />

          {mode === "login" && (
            <div className="text-right">
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-brand py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
        </div>

        <button
          onClick={() => toast("Google login coming soon")}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-3 text-sm font-semibold transition-colors hover:bg-muted"
        >
          <GoogleIcon /> Continue with Google
        </button>
      </motion.div>
    </div>
  );
}

function Field({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ElementType }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        {...props}
        required
        className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z" />
    </svg>
  );
}
