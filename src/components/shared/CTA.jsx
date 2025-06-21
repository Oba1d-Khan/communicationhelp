"use client";

import React from "react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Gift,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MessageSquareHeart,
} from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className=" bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Elements - Full Width */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-content py-16 md:py-20 lg:py-24">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main CTA Container */}
          <motion.div
            className="relative bg-gradient-to-br from-white/90 via-primary/5 to-secondary/5 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl border border-primary/20 shadow-2xl overflow-hidden"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-3xl" />

            {/* Floating Icons */}
            <motion.div
              className="absolute top-6 left-6 text-primary/30"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-16 h-16 opacity-50" />
            </motion.div>
            <motion.div
              className="absolute bottom-6 right-6 text-secondary/30"
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>

            <div className="relative z-10 text-center space-y-8">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Free Communication Guide
                  </span>
                </motion.div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                    100+ Ways to Politely
                  </span>
                  <br />
                  <span className="text-primary">Refuse an Invitation</span>
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Get our{" "}
                  <strong className="text-primary">
                    free comprehensive guide
                  </strong>{" "}
                  plus weekly communication tips delivered straight to your
                  inbox.
                </motion.p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
              >
                {[
                  { icon: CheckCircle, text: "100+ Polite Phrases" },
                  { icon: Mail, text: "Weekly Tips" },
                  { icon: Sparkles, text: "Instant Download" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-primary/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Form */}
              <motion.div variants={formVariants}>
                {!isSubmitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
                    layout
                  >
                    <motion.div
                      className="flex-1"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 px-6 text-base border-2 border-primary/20 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      >
                        <span>Yes, I want this!</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-4 p-8 bg-green-50 rounded-2xl border-2 border-green-200"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-600" />
                    </motion.div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-green-800 mb-2">
                        Success!
                      </h3>
                      <p className="text-green-700">
                        Check your email for your free guide and welcome to our
                        community!
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center items-center gap-6 text-sm text-text-light"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>10,000+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>No Spam, Ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span>Unsubscribe Anytime</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
