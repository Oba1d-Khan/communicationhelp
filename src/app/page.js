import AboutMentor from "@/components/home/AboutMentor";
import Hero from "@/components/home/Hero";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <main className="root-layout min-h-screen">
      <Hero />
      <AboutMentor />
      <CTA />
    </main>
  );
}
