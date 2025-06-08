import React from "react";

const page = async ({ params }) => {
  const slug = await params.slug;
  return (
    <div className="root-layout min-h-screen">
      <h3 className="text-3xl">page: {slug}</h3>
    </div>
  );
};

export default page;
