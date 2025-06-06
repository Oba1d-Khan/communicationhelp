import { CheckCircle, Quote, Star, ArrowRight } from "lucide-react";
import { FiYoutube } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
import Image from "next/image";
import { Button } from "../ui/button";
import { benefits } from "@/constants/constants";

const AboutMentor = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      {/* Decorative lines */}
      <div className="absolute top-[24%] left-0 w-[34%] h-1 bg-gradient-to-r from-transparent to-secondary/30 rounded-full" />
      <div className="absolute bottom-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent to-primary/30" />

      <div className=" relative z-10 px-2 md:px-0">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  xl:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-sm font-medium text-primary">
                  Featured Program
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading leading-tight">
                  <span className="text-foreground">Listening to Lead:</span>
                  <br />
                  <span className="text-primary">
                    Become the Person People Trust
                  </span>
                  <br />
                  <span className="text-secondary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    with Their Deepest Thoughts
                  </span>
                </h1>

                <p className="text-base md:text-lg text-text-light lg:w-[92%]">
                  Join the waitlist for{" "}
                  <span className="font-semibold text-foreground italic mr-2">
                    The Listening Leap
                  </span>
                  and get your <strong>completely free guide</strong> with tools
                  to change your next conversation—starting immediately.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 lg:w-[88%]">
                <h3 className="text-lg font-semibold text-foreground">
                  With your free guide, you'll learn how to:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-text-light text-sm md:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 lg:px-12 py-3 text-sm md:text-base font-medium cursor-pointer">
                  Get Free Guide Now + Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="px-6 md:px-8 py-3 text-sm md:text-base cursor-pointer"
                >
                  Continue to Site
                </Button>
              </div>
            </div>

            {/* Right Column - Author Card */}
            <div className="lg:col-span-5">
              <div className="relative w-[95%] max-w-md mx-auto lg:max-w-none">
                {/* Background decorative shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl transform lg:rotate-2" />

                {/* Main card */}
                <div className="relative bg-white dark:bg-primary/2 p-6 rounded-2xl shadow-xl border border-dashed border-primary/10">
                  {/* Author Image and Basic Info */}
                  <div className="text-center mb-6">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4">
                      <Image
                        src="/images/dp.jpg"
                        alt="Bruce Lambert"
                        fill
                        className="object-cover rounded-full border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading text-foreground">
                      Bruce Lambert Ph.D.
                    </h3>
                    <p className="text-text-light text-sm">
                      Professor, Scientist, and Coach
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-xl md:text-2xl font-heading text-primary">
                        35
                      </div>
                      <div className="text-xs text-text-light">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-xl md:text-2xl font-heading text-primary">
                        2.5M
                      </div>
                      <div className="text-xs text-text-light">
                        YouTube Views
                      </div>
                    </div>
                  </div>

                  {/* Social Stats */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <FiYoutube className="w-4 h-4 text-primary" />
                        <span className="text-text-light">YouTube</span>
                      </div>
                      <span className="font-medium">2.5M Views</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <PiTiktokLogoBold className="w-4 h-4 text-primary" />
                        <span className="text-text-light">TikTok</span>
                      </div>
                      <span className="font-medium">339K Followers</span>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
                    <Quote className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-text-light italic mb-2">
                      "I used your method that night and had the best talk I've
                      had with my son in years."
                    </p>
                    <p className="text-xs text-primary font-medium">
                      — Workshop participant
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-xs text-text-light text-center">
                      Professor of communication with{" "}
                      <strong>35 years' experience</strong>,
                      <strong> 100+ scientific publications</strong>, and more
                      than
                      <strong> $17M in research funding</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;
