import { useSeo } from "@/lib/seo";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStats } from "@/components/site/TrustStats";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Mentors } from "@/components/site/Mentors";
import { FeaturedCourses } from "@/components/site/FeaturedCourses";
import { Certifications } from "@/components/site/Certifications";
import { HowItWorks } from "@/components/site/HowItWorks";
import { SuccessStories } from "@/components/site/SuccessStories";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Index() {
  useSeo(
    "Connect2Edtech — Learn Skills. Build Careers. Shape Your Future.",
    "Premium IT & Non-IT training, certifications, internships and placement support for students, graduates and professionals. Connect your passion, build your future.",
  );

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <WhyChoose />
        <Mentors />
        <FeaturedCourses />
        <Certifications />
        <HowItWorks />
        <SuccessStories />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
