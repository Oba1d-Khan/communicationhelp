"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Gift,
  ArrowRight,
  Sparkles,
  Brain,
  Heart,
  MessageCircle,
  Award,
  TrendingUp,
  Download,
  Clock,
  Shield,
  Zap,
  BookOpen,
  Target,
  Quote,
  Trophy,
  Rocket,
  Crown,
  BadgeCheck,
  Minus,
} from "lucide-react";
import { benefits } from "@/constants/constants";

export default function JoinNow() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setIsLoading(false);
    }
  };

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
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
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

  const joinBenefits = [
    {
      text: "The Listening Leap PDF Guide (FREE Instant Access)",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      text: "Early-bird discounts on course launch",
      icon: Trophy,
      color: "text-amber-600",
    },
    {
      text: "Bonus listening resources & templates",
      icon: Gift,
      color: "text-purple-600",
    },
    {
      text: "Course launches later at $149",
      icon: Crown,
      color: "text-emerald-600",
    },
  ];

  const learningOutcomes = [
    {
      text: "Attract people with your ability to make them feel seen, heard, and understood",
      icon: Heart,
      color: "text-pink-600",
    },
    {
      text: "Eliminate awkward silences and navigate difficult conversations",
      icon: MessageCircle,
      color: "text-blue-600",
    },
    {
      text: "Know exactly how to respond when someone shares something personal",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      text: "Build the trust that makes you a leader people actually want to follow",
      icon: Target,
      color: "text-emerald-600",
    },
  ];

  const socialProof = [
    { label: "Students", value: "10K+", icon: Users },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Years Exp.", value: "35+", icon: Award },
  ];

  return (
    <div className="bg-white/70 mt-20 relative overflow-hidden">
      {/* Artistic Moving Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className=" absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-emerald-200/25 via-teal-200/25 to-cyan-200/25 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            x: [0, -80, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-72 h-72 bg-gradient-to-r from-amber-200/20 via-orange-200/20 to-red-200/20 rounded-full blur-3xl"
          style={{ y: y3 }}
          animate={{
            x: [0, 60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-emrald-200/25 via-violet-200/25 to-purple-200/25 rounded-full blur-3xl "
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
        />
      </div>

      <div className="section-content py-8 md:py-12 lg:py-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Compact Professional Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 relative"
          >
            {/* Refined Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-5 py-2 shadow-lg mb-6"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <BadgeCheck className="w-6 h-6 text-green-500" />

              <span className="text-sm font-semibold text-foreground">
                Join The Waitlist
              </span>
            </motion.div>

            {/* Compact Headline */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl w-[80%] mx-auto font-heading font-bold leading-tight mb-4 relative"
              variants={itemVariants}
            >
              <span className="text-foreground">The Science-Based </span>
              <motion.span
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent relative inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Listening Techniques
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
              <span className="text-foreground">
                {" "}
                That Transform Relationships
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Join the waitlist for The Listening Leap and get your{" "}
              <strong className="text-primary">free 10-page PDF guide</strong>{" "}
              with tools to change your next conversation—starting immediately.
            </motion.p>

            {/* Compact Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-8 mb-18 "
            >
              {socialProof.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-light font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content Flex Layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start lg:justify-between">
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:flex-1 lg:max-w-2xl space-y-6"
            >
              {/* Author Credibility Card - Keep as is */}

              <motion.div
                variants={cardVariants}
                className="relative group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 " />

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none z-0" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 z-50">
                      <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        From Bruce Lambert, PhD
                      </h3>
                      <p className="text-text-light mb-4 leading-relaxed">
                        Professor of communication with 35 years' experience,{" "}
                        <span className="text-primary font-semibold">
                          7.7M YouTube views
                        </span>
                        , 339K TikTok followers.
                      </p>
                      <blockquote className="text-primary bg-primary/5 rounded-lg text-sm py-2 italic font-medium mt-2 border-l-4 border-primary/30 pl-4">
                        "These techniques saved my marriage."
                        <span className="text-primary/80  ms-2 ">
                          —Former Client
                        </span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compact Learning Outcomes */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h3 className="text-lg md:text-xl font-heading text-foreground text-center lg:text-left flex items-center justify-center lg:justify-start gap-2 mt-10">
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
            </motion.div>

            {/* Right Form */}
            <motion.div
              variants={cardVariants}
              className="w-full lg:flex-1 lg:max-w-lg relative"
            >
              <motion.div
                className="relative group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-105" />

                {/* Main Form Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-3xl" />

                  {/* Floating Sparkles */}
                  <motion.div
                    className="absolute top-6 right-6 text-primary/20"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Sparkles className="w-12 h-12" />
                  </motion.div>

                  <div className="relative z-10">
                    {!isSubmitted ? (
                      <>
                        {/* Form Header */}
                        <div className="text-center mb-8">
                          <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 px-4 py-2 rounded-full border border-primary/30 mb-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Gift className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                              Limited Time Offer
                            </span>
                          </motion.div>

                          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Don't Miss Your Chance
                          </h2>
                          <p className="text-text-light font-medium">
                            Sign up now and receive:
                          </p>
                        </div>

                        {/* Enhanced Benefits List */}
                        <div className="space-y-5  mb-8">
                          {joinBenefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 group cursor-pointer"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.5 + index * 0.1,
                                duration: 0.5,
                              }}
                              whileHover={{ x: 5, scale: 1.02 }}
                            >
                              <div className="flex items-center gap-2">
                                <benefit.icon
                                  className={`w-6 h-6 ${benefit.color} flex-shrink-0`}
                                />
                                <span className="text-text-light text-sm leading-relaxed group-hover:text-foreground transition-colors duration-200">
                                  {benefit.text}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Creative Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {[
                            {
                              name: "firstName",
                              placeholder: "First Name",
                              type: "text",
                            },
                            {
                              name: "lastName",
                              placeholder: "Last Name",
                              type: "text",
                            },
                            {
                              name: "email",
                              placeholder: "Email Address",
                              type: "email",
                            },
                          ].map((field, index) => (
                            <motion.div
                              key={field.name}
                              whileFocus={{ scale: 1.02 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.8 + index * 0.1,
                                duration: 0.4,
                              }}
                            >
                              <div className="relative group">
                                <Input
                                  type={field.type}
                                  name={field.name}
                                  placeholder={field.placeholder}
                                  value={formData[field.name]}
                                  onChange={handleInputChange}
                                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-gray-50/50 focus:bg-white text-sm group-hover:border-primary/50"
                                  required
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                              </div>
                            </motion.div>
                          ))}

                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className="pt-4"
                          >
                            <Button
                              type="submit"
                              disabled={isLoading}
                              className="w-full h-14 bg-gradient-theme text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                              {isLoading ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                >
                                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                                </motion.div>
                              ) : (
                                <>
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.8 }}
                                  />
                                  <span className="relative z-10 flex items-center justify-center">
                                    <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                    Get My FREE Guide Now
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                  </span>
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </form>

                        {/* Enhanced Trust Indicators */}
                        <div className="text-center mt-6 space-y-4">
                          <p className="text-xs text-text-light">
                            We won't send spam. Unsubscribe at any time.
                          </p>
                          <div className="flex justify-center items-center gap-6 text-xs">
                            {[
                              {
                                icon: Shield,
                                text: "100% Secure",
                                color: "text-green-500",
                              },
                              {
                                icon: Clock,
                                text: "Instant Access",
                                color: "text-blue-500",
                              },
                              {
                                icon: Zap,
                                text: "No Spam Ever",
                                color: "text-purple-500",
                              },
                            ].map((indicator, index) => (
                              <motion.div
                                key={index}
                                className="flex items-center gap-1 group cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <indicator.icon
                                  className={`w-3 h-3 ${indicator.color} group-hover:scale-125 transition-transform duration-200`}
                                />
                                <span className="text-text-light group-hover:text-foreground transition-colors duration-200">
                                  {indicator.text}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center py-8"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="mb-6"
                        >
                          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                            <CheckCircle className="w-10 h-10 text-white" />
                          </div>
                        </motion.div>

                        <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                          🎉 Welcome to the Community!
                        </h3>
                        <p className="text-text-light mb-6 leading-relaxed">
                          Check your email for your free guide and exclusive
                          access to The Listening Leap course. You're on your
                          way to transforming your relationships!
                        </p>

                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 border border-primary/20">
                          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                            <Download className="w-5 h-5" />
                            <span>Guide sent to {formData.email}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
