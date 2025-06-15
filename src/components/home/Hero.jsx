import React from "react";
import heroImg from "../../../public/images/hero-home.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="root-layout">
      {/* Hero Section */}
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="lg:text-5xl max-w-3xl leading-tight">
          Improve Your{" "}
          <span className="text-primary text-shadow-md">Relationships</span>
        </h1>
        <p className="italic text-xl text-text-light max-w-xl">
          Succeed at work. Be more confident.
        </p>
        <Image
          src={heroImg}
          width="1280"
          height="720"
          placeholder="blur"
          alt="People socializing"
          className="w-full max-w-4xl rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* Value Proposition */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mt-12">
        <p className="uppercase tracking-wide text-sm text-primary font-medium">
          Communicate with confidence
        </p>
        <h2 className="text-3xl font-heading">
          Know what to say in challenging situations.
        </h2>
        <p>
          Unlock the mysteries of the social world. Understand how communication
          really works. Learn to express yourself, build stronger relationships,
          and get things done effectively — at work or in life.
        </p>
      </div>

      {/* Benefits / Feature Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
        {[
          {
            title: "Master Social Scenarios",
            desc: "Respond with clarity in awkward or high-stakes moments.",
          },
          {
            title: "Boost Confidence",
            desc: "Feel prepared, not anxious — in meetings or daily life.",
          },
          {
            title: "Say No Gracefully",
            desc: "Refuse invitations or demands with elegance and honesty.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-muted/20 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
