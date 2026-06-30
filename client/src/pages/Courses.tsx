import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CourseCard } from "@/components/site/CourseCard";
import { Stagger, StaggerItem, Reveal } from "@/components/site/primitives";
import { courses } from "@/lib/courses";

const categories = ["All", "IT", "Non-IT"] as const;
const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export default function Courses() {
  useSeo(
    "Course Catalog — Connect2Edtech",
    "Browse premium IT & Non-IT courses. Filter by category, level and price. Find the right program to launch your career.",
  );

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [level, setLevel] = useState<(typeof levels)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(40000);

  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) &&
          (cat === "All" || c.category === cat) &&
          (level === "All" || c.level === level) &&
          c.price <= maxPrice,
      ),
    [query, cat, level, maxPrice],
  );

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden px-5 pb-12 pt-36 sm:px-8">
        <div className="pointer-events-none absolute -right-32 -top-10 size-96 animate-blob bg-gradient-brand-tri opacity-40 blur-3xl" />
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Course Catalog
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Find your <span className="text-gradient">perfect program</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our full range of IT & Non-IT courses built for real careers.
          </p>
        </Reveal>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[260px_1fr]">
          {/* Filters */}
          <aside className="h-max rounded-3xl glass-strong p-6 shadow-soft lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-sm font-bold">
              <SlidersHorizontal className="size-4 text-primary" /> Filters
            </div>

            <div className="relative mt-5">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses"
                className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>

            <FilterGroup label="Category">
              {categories.map((c) => (
                <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>
              ))}
            </FilterGroup>

            <FilterGroup label="Level">
              {levels.map((l) => (
                <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>
              ))}
            </FilterGroup>

            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Max Price: ₹{maxPrice.toLocaleString("en-IN")}</p>
              <input
                type="range"
                min={10000}
                max={40000}
                step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[color:var(--primary)]"
              />
            </div>
          </aside>

          {/* Grid */}
          <div>
            <p className="mb-5 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> courses
            </p>
            {filtered.length === 0 ? (
              <div className="rounded-3xl glass-strong p-12 text-center text-muted-foreground shadow-soft">
                No courses match your filters.
              </div>
            ) : (
              <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" stagger={0.05}>
                {filtered.map((c) => (
                  <StaggerItem key={c.id}>
                    <CourseCard course={c} />
                  </StaggerItem>
                ))}
              </Stagger>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <p className="mb-2 text-sm font-semibold">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-gradient-brand text-primary-foreground shadow-soft"
          : "bg-muted text-foreground hover:bg-accent"
      }`}
    >
      {children}
    </motion.button>
  );
}
