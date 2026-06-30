import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* newsletter */}
        <div className="rounded-[2.5rem] bg-gradient-brand px-6 py-10 text-center shadow-float sm:px-12">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Join our newsletter for free resources, scholarships and career tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/95 px-5 py-3.5 text-sm text-foreground outline-none"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]">
              Subscribe <ArrowRight className="size-4" />
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <GraduationCap className="size-5" />
              </span>
              <span className="text-lg font-bold">
                Connect<span className="text-gradient">2</span>Edtech
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Connect your passion, build your future with industry-ready training,
              certifications and placement support.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-9 place-items-center rounded-full bg-muted text-foreground transition-colors hover:bg-gradient-brand hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={["Home", "About", "Why Us", "Testimonials"]} />
          <FooterCol title="Courses" links={["Full Stack", "Data Science", "UI UX Design", "Digital Marketing"]} />

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="size-4 text-primary" /> hello@connect2edtech.com</li>
              <li className="flex items-center gap-2"><Phone className="size-4 text-primary" /> +91 98765 43210</li>
              <li className="flex items-start gap-2"><MapPin className="size-4 shrink-0 text-primary" /> Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Connect2Edtech. All rights reserved.</p>
          <p>Connect Your Passion. Build Your Future.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-primary">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}