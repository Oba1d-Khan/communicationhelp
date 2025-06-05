import React from "react";
import { Sparkles, CircleCheckBig } from "lucide-react"; // Feel free to use better art icons or custom SVGs

const Mission = () => {
  return (
    <section className="relative w-full py-30 px-6 sm:px-10 md:px-20 border-t overflow-hidden">
      {/* Decorative Background Art */}
      <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-[-60px] right-[-40px] w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Benefits */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight flex items-center gap-2">
            <Sparkles className="text-orange-500 size-16" />
            Communicate Effectively. Lead Confidently.
          </h2>

          <p className="text-muted-foreground text-center md:text-start text-lg mb-6">
            You want to improve your personal relationships, move ahead in your
            career, and express yourself with confidence.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CircleCheckBig className="text-green-500 size-5 mt-1" />
              <span className="text-base text-foreground">
                Master communication by understanding core principles—not just
                tips.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CircleCheckBig className="text-green-500 size-5 mt-1" />
              <span className="text-base text-foreground">
                Develop unshakable confidence in any situation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CircleCheckBig className="text-green-500 size-5 mt-1" />
              <span className="text-base text-foreground">
                Apply research-backed insights most people never learn.
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Bio */}
        <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border space-y-4 text-center md:text-start ">
          <p className="text-muted-foreground text-base">
            My name is{" "}
            <span className="font-semibold text-foreground">Bruce Lambert</span>
            . I’ve taught thousands of people across the U.S. how to communicate
            more effectively.
          </p>

          <p className="text-muted-foreground text-base">
            With a Ph.D. in Communication, over{" "}
            <strong>100 scientific publications</strong>, and more than{" "}
            <strong>$17M in research funding</strong>, I’ve spent 34 years
            teaching, researching, and consulting on health, communication, and
            technology.
          </p>

          <p className="text-muted-foreground text-base">
            My goal with this website is to help you enhance your relationships,
            grow your career, and make your communication impactful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
