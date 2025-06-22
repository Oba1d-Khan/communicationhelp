"use client";
import {
  Star,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Heart,
  User,
  Play,
  Eye,
} from "lucide-react";
import { FiYoutube, FiLinkedin } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
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
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const socialStats = [
    {
      icon: Play,
      label: "2.3M Views",
      color: "text-red-500",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      icon: Eye,
      label: "340k Followers",
      color: "text-purple-500",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
  ];

  const socialLinks = [
    {
      icon: FaXTwitter,
      label: "Twitter",
      href: "#",
      color: "hover:bg-gray-100",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-50",
    },
    { icon: FiYoutube, label: "YouTube", href: "#", color: "hover:bg-red-50" },
    {
      icon: PiTiktokLogoBold,
      label: "TikTok",
      href: "#",
      color: "hover:bg-pink-50",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-background via-muted/30 to-primary/5 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-success/10 to-secondary2/10 rounded-full blur-2xl animate-bounce-gentle" />
      </div>

      <div className="container relative">
        {/* Fixed Hello Badge with Proper Spacing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute -top-12 sm:-top-16 md:-top-20 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="bg-white/95 dark:bg-muted/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg hover-lift transition-smooth group">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                Hello!
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 md:space-y-20"
        >
          {/* Enhanced Name and Title with Better Spacing */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-20 relative z-10 mt-16 sm:mt-20 md:mt-12"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-foreground">I'm </span>
              <motion.span
                className="text-primary relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Bruce
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span>
              <span className="text-foreground">,</span>
            </motion.h2>
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-6 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Professor & Scientist
            </motion.h3>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
            {/* Enhanced Left Side - Quote */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/3 relative z-20 px-4 lg:px-0"
            >
              <div className="relative bg-white/90 dark:bg-muted/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-primary/10 hover-lift transition-smooth w-full max-w-sm mx-auto lg:max-w-none">
                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Heart className="w-5 h-5 text-white" />
                </motion.div>

                <div className="text-5xl md:text-6xl font-heading text-primary/20 absolute -left-3 -top-3">
                  "
                </div>
                <blockquote className="text-text-light text-center lg:text-left pl-6 italic leading-relaxed text-base md:text-lg">
                  I used your method that night and had the best talk I've had
                  with my son in years.
                  <footer className="block mt-6 font-semibold text-foreground not-italic text-sm">
                    <cite>~ Workshop participant</cite>
                  </footer>
                </blockquote>
              </div>
            </motion.div>

            {/* Enhanced Center - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/3 flex justify-center relative px-8 lg:px-20"
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute w-[300px] h-[300px] md:w-[370px] md:h-[370px] rounded-full bg-gradient-to-tl from-secondary/15 to-primary/15 z-10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Enhanced Decorative Elements - Better Positioning */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-4 -left-8 md:top-8 md:-left-12 lg:-left-16 z-30"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-xl border-2 border-white/50">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute bottom-8 -right-8 md:bottom-12 md:-right-12 lg:-right-16 z-30"
                transition={{ delay: 1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-success to-secondary2 rounded-full flex items-center justify-center shadow-xl border-2 border-white/50">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Additional floating icons for better visibility */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-1/2 -left-10 md:-left-14 lg:-left-20 z-30 hidden md:block"
                transition={{ delay: 2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-xl border-2 border-white/50">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-1/2 -right-10 md:-right-14 lg:-right-20 z-30 hidden md:block"
                transition={{ delay: 2.5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-success rounded-full flex items-center justify-center shadow-xl border-2 border-white/50">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 z-20 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-muted flex items-center justify-center border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <User className="w-24 h-24 md:w-32 md:h-32 text-gray-400" />
                  </div>
                  {/* Uncomment when image is available */}
                  {/* <Image
                    src="/images/dp.jpg"
                    alt="Bruce Lambert"
                    fill
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    priority
                  /> */}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Right Side - Achievements */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/3 text-center lg:text-right relative z-20 space-y-8"
            >
              {/* Animated Star Rating */}
              <motion.div
                className="flex justify-center lg:justify-end mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10 shadow-lg">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + star * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-current hover-scale transition-smooth" />
                      </motion.div>
                    ))}
                    <span className="ml-2 text-sm font-semibold text-foreground">
                      5.0
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Experience Badge */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-primary/10 via-white/90 to-secondary/10 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 shadow-xl hover-glow transition-smooth relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
                    animate={{ x: [-100, 100] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center lg:justify-end gap-3 mb-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Award className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h4 className="text-4xl md:text-5xl font-heading text-primary">
                        35 Years
                      </h4>
                    </div>
                    <p className="text-base text-text-light font-semibold">
                      Professional Experience
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Social Stats */}
              <div className="space-y-4">
                {socialStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-center lg:justify-end gap-4 bg-gradient-to-r ${stat.bgColor} backdrop-blur-sm px-6 py-4 rounded-2xl border ${stat.borderColor} shadow-lg hover-lift transition-smooth group relative overflow-hidden`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="relative z-10 flex items-center gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </motion.div>
                      <div className="text-left lg:text-right">
                        <span className="block text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {stat.label}
                        </span>
                        <span className="text-sm text-text-light font-medium">
                          {index === 0
                            ? "YouTube & Social"
                            : "Across Platforms"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <motion.div
                className="flex gap-3 justify-center lg:justify-end pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`rounded-full h-12 w-12 border-2 border-primary/20 hover:border-primary/40 ${social.color} transition-all duration-200 group shadow-md hover:shadow-lg`}
                      // asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
