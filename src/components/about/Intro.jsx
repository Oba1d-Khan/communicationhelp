"use client";
import {
  Sparkles,
  TrendingUp,
  Users,
  Award,
  User,
  Quote,
  GraduationCap,
} from "lucide-react";
import { FiYoutube, FiLinkedin } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Intro = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: FaXTwitter,
      label: "Twitter",
      href: "#",
      color: "hover:bg-gray-50 hover:border-gray-300",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-50 hover:border-blue-300",
    },
    {
      icon: FiYoutube,
      label: "YouTube",
      href: "#",
      color: "hover:bg-red-50 hover:border-red-300",
    },
    {
      icon: PiTiktokLogoBold,
      label: "TikTok",
      href: "#",
      color: "hover:bg-pink-50 hover:border-pink-300",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-bl from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Large Primary Blob */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Blob */}
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-secondary/25 via-secondary2/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 25, 0],
            y: [0, 25, -30, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Success Color Blob */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-success/20 via-success/10 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -25, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Accent Blob */}
        <motion.div
          className="absolute top-10 right-1/3 w-72 h-72 bg-gradient-to-bl from-secondary2/20 via-primary/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 35, -25, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Small Floating Blob */}
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-to-tr from-primary/15 via-secondary/20 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, 15, -25, 0],
            y: [0, -15, 25, 0],
            opacity: [0.3, 0.6, 0.2, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Additional Ambient Blobs */}
        <motion.div
          className="absolute top-2/3 right-10 w-56 h-56 bg-gradient-to-l from-text-light/10 via-secondary/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 20, -35, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative mt-15 lg:mt-10">
        {/* Hello Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex justify-center mb-6 md:mb-4"
        >
          <div className="bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2  rounded-full border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                <span className="text-lg md:text-xl">👋</span>
              </motion.div>
              <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors text-sm md:text-base">
                Hello!
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-12"
        >
          {/* Name and Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 md:mb-12"
          >
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-foreground/90">I'm </span>
              <motion.span
                className="gradient-theme  relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Bruce
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute -bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </motion.span>
              <span className="text-slate-800">,</span>
            </motion.h1>
            <motion.h2
              className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Professor & Scientist
            </motion.h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start lg:mt-15">
            {/* Quote Section - Mobile: Last, Desktop: Left */}
            <motion.div
              variants={itemVariants}
              className="order-3 lg:order-1 lg:col-span-4 mt-6 lg:mt-22"
            >
              {" "}
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 relative group max-w-md mx-auto lg:max-w-none">
                <motion.div className="absolute inset-0 rounded-3xl bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none z-10" />
                {/* <motion.div
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Heart className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </motion.div> */}

                <div className="text-3xl md:text-4xl font-bold text-slate-300 absolute -left-1 md:-left-2 -top-1 md:-top-2">
                  <Quote className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <blockquote className="text-slate-700 leading-relaxed text-sm md:text-base pl-3 md:pl-4 italic group-hover:text-slate-800 transition-colors">
                  I used your method that night and had the best talk I've had
                  with my son in years.
                  <footer className="block mt-3 md:mt-4 font-semibold text-slate-800 not-italic text-xs md:text-sm">
                    <cite>~ Workshop participant</cite>
                  </footer>
                </blockquote>
              </div>
            </motion.div>

            {/* Profile Image - Mobile: First, Desktop: Center */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 lg:col-span-4 flex justify-center relative w-[70%] mx-auto"
            >
              {/* Animated Background Rings */}
              <motion.div
                className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tl from-purple-100/50 to-blue-100/50 z-10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Smaller Floating Elements */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-3 -left-0 sm:-left-6 md:-left-8 z-30"
              >
                <div className="w-10 h-10 md:w-10 md:h-10 bg-gradient-to-r from-green-800/70 to-sky-900/70 rounded-full flex items-center justify-center shadow-lg border-2 border-white/80">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute bottom-6 right-1 sm:-right-6 md:-right-10 z-30"
                transition={{ delay: 1 }}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-green-800/70 to-sky-900/70 rounded-full flex items-center justify-center shadow-lg border-2 border-white/80">
                  <Users className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute bottom-10 -left-1 sm:-left-8 md:-left-10 z-30 "
                transition={{ delay: 2 }}
              >
                <div className="w-8 h-8 md:w-9 md:h-9 gradient-floating-icons rounded-full flex items-center justify-center shadow-lg border-2 border-white/80">
                  <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-10 -right-1 sm:-right-8 md:top-18 md:-right-12 z-30 "
                transition={{ delay: 2.5 }}
              >
                <div className="w-9 h-9 md:w-8 md:h-8 gradient-floating-icons rounded-full flex items-center justify-center shadow-lg border-2 border-white/80">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 z-20 group mt-5"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-slate-400" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Compact Bento Grid - Mobile: Second, Desktop: Right */}
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-3 lg:col-span-4 mt-10"
            >
              <div className="max-w-sm mx-auto lg:max-w-none">
                {/* Compact Bento Grid Container */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {/* Experience Card - Spans 2 columns but smaller */}
                  <motion.div
                    className="col-span-2 bg-gradient-to-br from-primary/10 via-white/90 to-secondary/10 backdrop-blur-sm p-4 md:p-5 rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                          <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-heading text-primary group-hover:text-primary/80 transition-colors">
                            35 Years
                          </h3>
                          <p className="text-xs md:text-sm font-semibold text-text-light">
                            Professional Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* YouTube Views Card - Smaller */}
                  <motion.div
                    className="bg-gradient-to-r from-red-50 to-red-100 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-red-200 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative z-10">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm mb-2">
                        <FaYoutube className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg md:text-xl font-bold text-foreground group-hover:text-red-600 transition-colors">
                          2.5M+
                        </div>
                        <div className="text-xs font-medium text-text-light">
                          Youtube Views
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Followers Card - Smaller */}
                  <motion.div
                    className="bg-gradient-to-r from-purple-50 to-purple-100 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative z-10">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm mb-2">
                        <FaTiktok className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg md:text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                          339k+
                        </div>
                        <div className="text-xs font-medium text-text-light">
                          Followers
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional Stats - Smaller Cards */}
                  <motion.div
                    className="bg-gradient-to-r from-success/10 to-secondary2/10 backdrop-blur-sm p-3 rounded-xl border border-success/20 shadow-md hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 md:w-8 md:h-8 gradient-floating-icons rounded-lg flex items-center justify-center shadow-sm">
                        <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-bold text-foreground group-hover:text-success transition-colors">
                          98%
                        </div>
                        <div className="text-xs font-medium text-text-light">
                          Satisfaction
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm p-3 rounded-xl border border-accent/20 shadow-md hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-secondary2 to-primary rounded-lg flex items-center justify-center shadow-sm">
                        <Users className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-bold text-foreground group-hover:text-accent transition-colors">
                          50k+
                        </div>
                        <div className="text-xs font-medium text-text-light">
                          Students
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Social Links - Compact Grid */}
                  <div className="col-span-2 grid grid-cols-4 gap-1.5 md:gap-2">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className={`w-full h-8 md:h-10 rounded-lg border border-primary/20 hover:border-primary/40 ${social.color} transition-all duration-200 shadow-sm hover:shadow-md bg-white/90 backdrop-blur-sm`}
                        >
                          <a
                            href={social.href}
                            aria-label={social.label}
                            className="w-full h-full flex items-center justify-center"
                          >
                            <social.icon className="h-3 w-3 md:h-4 md:w-4 group-hover:scale-110 transition-transform" />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
