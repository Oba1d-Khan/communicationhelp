import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { FiYoutube, FiLinkedin } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";

const Intro = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background relative overflow-hidden ">
      <div className="container relative">
        {/* Hello bubble */}
        <div className="absolute -top-6 md:top-[-50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0">
          <div className="bg-white dark:bg-primary/20 px-6 py-2  rounded-full border border-primary/20">
            <span className="font-medium">Hello!</span>
          </div>
        </div>

        {/* Name and title positioned behind the head */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading">
            <span className="text-foreground">I'm </span>
            <span className="text-primary">Bruce</span>
            <span className="text-foreground">,</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading text-foreground mt-2">
            Professor & Scientist
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Left side - Quote */}
          <div className="md:w-1/4 mb-8 md:mb-0 relative z-20">
            <div className="text-4xl font-heading text-primary absolute -left-8 top-0">
              "
            </div>
            <p className="text-text-light text-center md:text-end pl-4 italic">
              I used your method that night and had the best talk I've had with
              my son in years.
              <span className="block mt-2 font-medium">
                ~ Workshop participant
              </span>
            </p>
          </div>

          {/* Center - Profile Image with background circle */}
          <div className="relative md:w-2/4 flex justify-center">
            {/* Background circle */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-secondary/30 z-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-10 -left-4 md:left-24 z-0">
              <svg
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 30C15 25 30 15 30 10"
                  stroke="#8A784E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 25C10 20 25 10 25 5"
                  stroke="#8A784E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Profile image */}
            <div className="relative w-64 h-64 md:w-82 md:h-82 z-20">
              {/* <Image
                src="/images/dp.jpg"
                alt="Bruce Lambert"
                fill
                className="object-cover rounded-full"
                priority
              /> */}
            </div>
          </div>

          {/* Right side - Achievements and social */}
          <div className="md:w-1/4 text-right mt-12 md:mt-0 relative z-20">
            {/* Star rating */}
            <div className="flex jcc md:justify-end mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-6 text-center md:text-end">
              <h4 className="text-3xl md:text-4xl font-heading">35 Years</h4>
              <p className="text-sm text-text-light">Experience</p>
            </div>

            {/* Social stats */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center jcc md:justify-end gap-2">
                <span className="font-medium">2.3M Views</span>
                <FiYoutube className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center jcc md:justify-end gap-2">
                <span className="font-medium">340k Followers</span>
                <PiTiktokLogoBold className="h-5 w-5 text-primary" />
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2 jcc md:justify-end">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                <FaXTwitter className="h-4 w-4" />

                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                <FiLinkedin className="h-4 w-4" />

                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                <FiYoutube className="h-4 w-4" />

                <span className="sr-only">YouTube</span>
              </Button>{" "}
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
              >
                <PiTiktokLogoBold className="h-4 w-4" />

                <span className="sr-only">TikTok</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
