"use client";

import {
  CheckCircle,
  Quote,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Play,
  Sparkles,
  Star,
  Heart,
  Target,
  Brain,
  GraduationCap,
  Minus,
} from "lucide-react";
import { FiYoutube } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.5 + i * 0.1,
      },
    }),
  };

  const statsData = [
    {
      value: "35",
      label: "Years Experience",
      icon: Award,
      gradient: "from-blue-500 to-blue-600",
      lightBg: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      value: "2.5M",
      label: "YouTube Views",
      icon: Play,
      gradient: "from-red-500 to-red-600",
      lightBg: "from-red-50 to-red-100",
      iconColor: "text-red-600",
    },
    {
      value: "339K",
      label: "TikTok Followers",
      icon: Users,
      gradient: "from-pink-500 to-pink-600",
      lightBg: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600",
    },
    {
      value: "$17M",
      label: "Research Funding",
      icon: TrendingUp,
      gradient: "from-green-500 to-green-600",
      lightBg: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
  ];

  const socialStats = [
    {
      platform: "YouTube",
      icon: FiYoutube,
      metric: "2.5M Views",
      description: "Educational Content",
      color: "text-red-600",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      platform: "TikTok",
      icon: PiTiktokLogoBold,
      metric: "339K Followers",
      description: "Communication Tips",
      color: "text-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-primary/5 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/6 to-secondary/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [-15, 15, -15],
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary/8 to-accent/8 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            x: [15, -15, 15],
            y: [8, -8, 8],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="section-content">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Main Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-8 lg:pr-6 relative z-20"
            >
              {/* Refined Badge */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: -15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-primary/20 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div>
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-sm font-semibold text-primary">
                    Featured Program
                  </span>
                </motion.div>
              </motion.div>

              {/* Refined Hero Heading */}
              <motion.div
                className="space-y-6 text-center lg:text-left"
                variants={itemVariants}
              >
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {/* Main Title */}
                  <motion.h1 className="relative mb-6">
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-heading leading-tight">
                      <span className="text-foreground font-bold">
                        Listening to Lead:
                      </span>
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-heading leading-tight mt-2">
                      <span className="text-primary relative">
                        Become the Person People Trust
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                      </span>
                    </span>
                  </motion.h1>

                  {/* Subtitle with Icon */}
                  {/* <motion.div
                    className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Heart className="w-6 h-6 text-red-500 fill-current" />
                    </motion.div>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-heading text-foreground">
                      with Their{" "}
                      <span className="text-primary font-bold">
                        Deepest Thoughts
                      </span>
                    </span>
                  </motion.div> */}
                </motion.div>

                <motion.p
                  className="text-base md:text-lg text-text-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={itemVariants}
                >
                  Join the waitlist for{" "}
                  <span className="font-bold text-primary">
                    The Listening Leap
                  </span>{" "}
                  and get your{" "}
                  <span className="font-bold text-foreground bg-gradient-to-r from-primary/20 to-secondary/20 px-2 py-1 rounded">
                    completely free guide
                  </span>{" "}
                  with tools to transform your next conversation.
                </motion.p>
              </motion.div>

              {/* Refined Benefits */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h3 className="text-lg md:text-xl font-heading text-foreground text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                  <Minus className="w-5 h-5 text-primary" />
                  What you'll master:
                </motion.h3>

                <motion.div className="relative">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-7 border border-primary/15 shadow-xl">
                    <div className="grid gap-4">
                      {benefits.slice(0, 4).map((benefit, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={benefitVariants}
                          className="flex items-start gap-4 group"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-r from-success to-success/80 flex items-center justify-center shadow-md"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.4 }}
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                          <span className="text-text-light text-sm md:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Refined CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start pt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 text-white px-8 py-4 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden rounded-xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <span className="relative z-10 flex items-center">
                      Get Free Guide + Join Waitlist
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Professional Author Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-5 flex justify-center lg:justify-end relative z-10"
            >
              <motion.div
                className="relative w-full max-w-md"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Professional Card Design */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                  {/* Header Section */}
                  <div className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-8 text-center border-b border-gray-100">
                    {/* Professional Avatar */}
                    <motion.div
                      className="relative w-24 h-24 mx-auto mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-3 border-white shadow-lg">
                        <Users className="w-12 h-12 text-gray-500" />
                      </div>
                    </motion.div>

                    <motion.h3 className="text-xl font-heading text-foreground mb-1">
                      Bruce Lambert Ph.D.
                    </motion.h3>
                    <motion.p className="text-text-light text-sm font-medium">
                      Professor & Communication Expert
                    </motion.p>

                    {/* Credentials Badge */}
                    <motion.div
                      className="inline-flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full mt-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <GraduationCap className="w-5 h-5 mr-1 text-primary" />
                      <span className="text-xs font-semibold text-primary">
                        Ph.D. Communication
                      </span>
                    </motion.div>
                  </div>

                  {/* Professional Stats Grid */}
                  <div className="p-6">
                    <motion.div
                      className="grid grid-cols-2 gap-3 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      {statsData.map((stat, index) => (
                        <motion.div
                          key={index}
                          className={`text-center p-4 bg-gradient-to-br ${stat.lightBg} rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <motion.div
                            className="flex items-center justify-center mb-2"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <stat.icon
                              className={`w-6 h-6 ${stat.iconColor}`}
                            />
                          </motion.div>
                          <div className="text-lg font-heading font-bold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-xs text-text-light font-medium">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Professional Social Stats */}
                    {/* <motion.div
                      className="space-y-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      {socialStats.map((social, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center justify-between p-4 bg-gradient-to-r ${social.bgGradient} rounded-xl border ${social.borderColor} hover:shadow-md transition-all duration-300`}
                          whileHover={{ scale: 1.01, x: 3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                              <social.icon
                                className={`w-5 h-5 ${social.color}`}
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground text-sm">
                                {social.platform}
                              </div>
                              <div className="text-xs text-text-light">
                                {social.description}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-foreground text-sm">
                              {social.metric}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div> */}

                    {/* Professional Testimonial */}
                    <motion.div
                      className="relative bg-gradient-to-br from-gray-50 to-primary/5 p-5 rounded-xl border border-gray-200/50 mb-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-text-light italic mb-2 leading-relaxed text-sm">
                            "I used your method that night and had the best talk
                            I've had with my son in years."
                          </p>
                          <p className="text-primary font-semibold text-xs">
                            — Workshop participant
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMentor;
