"use client";

import {
  CheckCircle,
  Quote,
  Star,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Play,
} from "lucide-react";
import { FiYoutube } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
import Image from "next/image";
import { Button } from "../ui/button";
import { benefits } from "@/constants/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMentor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4 + i * 0.05,
      },
    }),
  };

  const statsData = [
    { value: "35", label: "Years Experience", icon: Award },
    { value: "2.5M", label: "YouTube Views", icon: Play },
    { value: "339K", label: "TikTok Followers", icon: Users },
    { value: "$17M", label: "Research Funding", icon: TrendingUp },
  ];

  const socialStats = [
    {
      platform: "YouTube",
      icon: FiYoutube,
      metric: "2.5M Views",
      color: "text-red-600",
    },
    {
      platform: "TikTok",
      icon: PiTiktokLogoBold,
      metric: "339K Followers",
      color: "text-pink-600",
    },
  ];

  return (
    <section className="section-wrapper relative w-full bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Elements - Full Width */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-content py-16 md:py-20 lg:py-24 xl:py-32">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 items-center"
        >
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 w-[90%]">
            {/* Enhanced Badge */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="w-5 h-5 text-primary fill-current animate-pulse" />
                <span className="text-sm md:text-base font-semibold text-primary">
                  Featured Program
                </span>
              </motion.div>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-center lg:text-left"
            >
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading leading-[1] font-semibold mb-5 text-shadow-sm">
                <motion.span className="block text-foreground font-bold mb-2">
                  Listening to Lead:
                </motion.span>
                <motion.span className="block text-primary mt-2 text-4xl">
                  Become the Person People Trust
                </motion.span>
                <motion.span className="block text-primary text-4xl"></motion.span>
                <motion.span className="block text-primary font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-2">
                  with Their{" "}
                  <span className="text-primary "> Deepest Thoughts</span>
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-text-light max-w-2xl mx-auto lg:mx-0 leading-relaxed text-shadow-sm"
                variants={itemVariants}
              >
                Join the waitlist for{" "}
                <motion.span
                  className="font-bold text-foreground italic relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  The Listening Leap
                </motion.span>{" "}
                and get your{" "}
                <strong className="text-primary">completely free guide</strong>{" "}
                with tools to change your next conversation—starting
                immediately.
              </motion.p>
            </motion.div>

            {/* Enhanced Benefits List */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3
                className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground text-center lg:text-left"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                With your free guide, you'll learn how to:
              </motion.h3>

              <motion.div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/10 shadow-lg">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={benefitVariants}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 transition-colors" />
                      </motion.div>
                      <motion.span
                        className="text-text-light text-sm md:text-base lg:text-lg leading-relaxed group-hover:text-foreground transition-colors duration-200"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {benefit}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 md:px-8 lg:px-12 py-4 text-sm md:text-base lg:text-lg font-semibold shadow-xl transition-all duration-300"
                >
                  Get Free Guide Now + Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-secondary hover:border-secondary hover:text-white px-6 md:px-8 py-4 text-sm md:text-base lg:text-lg font-semibold shadow-lg transition-all duration-300"
                >
                  Continue to Site
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Author Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={cardVariants}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Enhanced Background decorative shapes */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/15 to-secondary/20 rounded-3xl transform rotate-1 blur-sm"
                animate={{ rotate: [1, -1, 1] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Main enhanced card */}
              <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-2xl border border-primary/20 transition-all duration-300">
                {/* Author Image and Basic Info */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <motion.div
                    className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/images/dpdpdpdp.jpg"
                      alt="Bruce Lambert"
                      fill
                      className="object-cover rounded-full border-4 border-white shadow-xl"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl md:text-2xl lg:text-3xl font-heading text-foreground mb-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    Bruce Lambert Ph.D.
                  </motion.h3>
                  <motion.p className="text-text-light text-sm md:text-base">
                    Professor, Scientist, and Coach
                  </motion.p>
                </motion.div>

                {/* Enhanced Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-3 md:gap-4 mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  {statsData.slice(0, 4).map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-primary transition-colors" />
                      </div>
                      <motion.div className="text-xl md:text-2xl lg:text-3xl font-heading text-primary">
                        {stat.value}
                      </motion.div>
                      <div className="text-xs md:text-sm text-text-light leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Social Stats */}
                <motion.div
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  {socialStats.map((social, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-white/50 to-primary/5 rounded-xl border border-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.01, x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <social.icon
                          className={`w-5 h-5 ${social.color} transition-transform`}
                        />
                        <span className="text-text-light font-medium">
                          {social.platform}
                        </span>
                      </div>
                      <motion.span className="font-bold text-foreground">
                        {social.metric}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Testimonial */}
                <motion.div
                  className="relative bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-6 rounded-2xl border-l-4 border-primary mb-8 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Quote className="w-6 h-6 text-primary mb-3" />
                  <motion.p className="text-sm md:text-base text-text-light italic mb-3 leading-relaxed">
                    "I used your method that night and had the best talk I've
                    had with my son in years."
                  </motion.p>
                  <motion.p className="text-xs md:text-sm text-primary font-semibold">
                    — Workshop participant
                  </motion.p>
                </motion.div>

                {/* Enhanced Credentials */}
                <motion.div
                  className="pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.4 }}
                >
                  <motion.p
                    className="text-xs md:text-sm text-text-light text-center leading-relaxed"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    Professor of communication with{" "}
                    <strong className="text-primary">
                      35 years' experience
                    </strong>
                    ,{" "}
                    <strong className="text-secondary">
                      100+ scientific publications
                    </strong>
                    , and more than{" "}
                    <strong className="text-primary">
                      $17M in research funding
                    </strong>
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMentor;
