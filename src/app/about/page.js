import AboutPage from "@/components/about/AboutPage";
import CTA from "@/components/about/CTA";
import Intro from "@/components/about/Intro";
import Mission from "@/components/about/Mission";
import ProgrammDetails from "@/components/about/ProgramDetails";
import AboutMentor from "@/components/home/AboutMentor";
import FreeEbookForm from "@/components/shared/FreeEbookForm";
import React from "react";

const page = () => {
  return (
    <main className=" min-h-screen">
      <Intro />
      {/* <AboutPage /> */}
      <ProgrammDetails />
      {/* <Mission /> */}
      {/* <AboutMentor /> */}
      <CTA />
    </main>
  );
};

export default page;
