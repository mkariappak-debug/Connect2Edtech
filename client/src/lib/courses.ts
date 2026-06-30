export type Course = {
  id: string;
  title: string;
  category: "IT" | "Non-IT";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
  gradient: string;
  emoji: string;
  tag: string;
};

export const courses: Course[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    category: "IT",
    level: "Intermediate",
    duration: "6 months",
    rating: 4.9,
    reviews: 1240,
    price: 24999,
    oldPrice: 39999,
    gradient: "linear-gradient(135deg,#ff5ca8,#ff82c3)",
    emoji: "💻",
    tag: "Bestseller",
  },
  {
    id: "python",
    title: "Python Programming",
    category: "IT",
    level: "Beginner",
    duration: "3 months",
    rating: 4.8,
    reviews: 980,
    price: 12999,
    oldPrice: 19999,
    gradient: "linear-gradient(135deg,#7c5cff,#ff82c3)",
    emoji: "🐍",
    tag: "Popular",
  },
  {
    id: "data-science",
    title: "Data Science",
    category: "IT",
    level: "Advanced",
    duration: "8 months",
    rating: 4.9,
    reviews: 1530,
    price: 34999,
    oldPrice: 49999,
    gradient: "linear-gradient(135deg,#ff5ca8,#ffb45c)",
    emoji: "📊",
    tag: "Trending",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    category: "IT",
    level: "Advanced",
    duration: "8 months",
    rating: 5.0,
    reviews: 870,
    price: 39999,
    oldPrice: 59999,
    gradient: "linear-gradient(135deg,#5cb8ff,#ff5ca8)",
    emoji: "🤖",
    tag: "New",
  },
  {
    id: "cyber",
    title: "Cyber Security",
    category: "IT",
    level: "Intermediate",
    duration: "5 months",
    rating: 4.7,
    reviews: 640,
    price: 27999,
    oldPrice: 42999,
    gradient: "linear-gradient(135deg,#1b1b1b,#ff5ca8)",
    emoji: "🛡️",
    tag: "Hot",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Non-IT",
    level: "Beginner",
    duration: "3 months",
    rating: 4.8,
    reviews: 1120,
    price: 14999,
    oldPrice: 22999,
    gradient: "linear-gradient(135deg,#ff82c3,#ffd35c)",
    emoji: "📈",
    tag: "Popular",
  },
  {
    id: "ui-ux",
    title: "UI UX Design",
    category: "Non-IT",
    level: "Intermediate",
    duration: "4 months",
    rating: 4.9,
    reviews: 760,
    price: 19999,
    oldPrice: 29999,
    gradient: "linear-gradient(135deg,#ff5ca8,#b45cff)",
    emoji: "🎨",
    tag: "Bestseller",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Non-IT",
    level: "Beginner",
    duration: "3 months",
    rating: 4.7,
    reviews: 540,
    price: 11999,
    oldPrice: 17999,
    gradient: "linear-gradient(135deg,#ff9a5c,#ff5ca8)",
    emoji: "🖌️",
    tag: "Popular",
  },
];

export const formatPrice = (n: number) =>
  "₹" + n.toLocaleString("en-IN");