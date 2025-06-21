import BlogSection from "@/components/blog/blog-section";
import AboutMentor from "@/components/home/AboutMentor";
import Hero from "@/components/home/Hero";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Hero />
      <BlogSection />
      <AboutMentor />
      <CTA />
    </main>
  );
}
