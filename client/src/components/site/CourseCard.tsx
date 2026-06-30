import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, BarChart3, Heart, ShoppingCart } from "lucide-react";
import { type Course, formatPrice } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  const [wished, setWished] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl glass-strong shadow-soft"
    >
      <div
        className="relative flex h-40 items-center justify-center overflow-hidden"
        style={{ backgroundImage: course.gradient }}
      >
        <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
          {course.emoji}
        </span>
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-foreground backdrop-blur">
          {course.tag}
        </span>
        <button
          onClick={() => setWished((w) => !w)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/85 text-foreground backdrop-blur transition-transform hover:scale-110"
        >
          <Heart className={`size-4 ${wished ? "fill-primary text-primary" : ""}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="rounded-full bg-muted px-2.5 py-1 text-primary">{course.category}</span>
          <span className="inline-flex items-center gap-1"><BarChart3 className="size-3.5" />{course.level}</span>
        </div>
        <h3 className="text-lg font-bold leading-snug">{course.title}</h3>
        <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock className="size-4" />{course.duration}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-foreground">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {course.rating}
            <span className="font-normal text-muted-foreground">({course.reviews})</span>
          </span>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-xl font-extrabold">{formatPrice(course.price)}</span>
          <span className="mb-0.5 text-sm text-muted-foreground line-through">
            {formatPrice(course.oldPrice)}
          </span>
        </div>

        <div className="mt-4 flex gap-2 pt-1">
          <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
            <ShoppingCart className="size-4" /> Add to Cart
          </button>
          <button className="rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}