import Hero from "@/components/home/Hero";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <div className="root-layout  ">
      <main>
        <Hero />
      </main>
      <CTA />
    </div>
  );
}
