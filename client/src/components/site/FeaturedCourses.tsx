import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, Reveal, Magnetic } from "./primitives";
import { CourseCard } from "./CourseCard";
import { courses } from "@/lib/courses";

export function FeaturedCourses() {
  return (
    <section id="courses" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Courses"
          title={<>Programs built for <span className="text-gradient">real careers</span></>}
          sub="Hand-picked IT & Non-IT courses designed with industry partners."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {courses.slice(0, 8).map((c) => (
            <StaggerItem key={c.id}>
              <CourseCard course={c} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Magnetic>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background shadow-float transition-transform hover:scale-[1.03]"
            >
              View Full Course Catalog <ArrowRight className="size-4" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}