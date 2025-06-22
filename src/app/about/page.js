import Intro from "@/components/about/Intro";
import Mission from "@/components/about/Mission";
import ProgrammDetails from "@/components/about/ProgramDetails";
import FreeEbookForm from "@/components/shared/FreeEbookForm";
import React from "react";

const page = () => {
  return (
    <main className=" min-h-screen">
      <Intro />
      <ProgrammDetails />
      <Mission />
      <FreeEbookForm />
    </main>
  );
};

export default page;
