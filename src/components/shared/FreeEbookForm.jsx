"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BookOpen,
  Download,
  Mail,
  Shield,
  CheckCircle,
  Gift,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FreeEbookForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    "7 pages of actionable insights",
    "Research-backed techniques",
    "Instant download",
    "No spam, ever",
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white via-primary/5 to-secondary/5 dark:from-background dark:via-primary/10 dark:to-secondary/10 py-20 md:py-28 lg:py-32 px-6 sm:px-10 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Gift className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary">
              Free Resource
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Free E-Book:{" "}
            <span className="text-primary relative inline-block">
              #1 Social Skill
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            Superpower
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-text-light leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Get Your 7-page PDF on{" "}
            <span className="font-semibold text-primary">
              Empathic Listening Skills
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Form Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white/90 dark:bg-background/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-primary/20 shadow-2xl max-w-2xl mx-auto"
        >
          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl border border-primary/10 group hover-lift transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4 text-success group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-left space-y-3">
              <Label
                htmlFor="email"
                className="text-base font-semibold text-foreground flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary" />
                Email Address
              </Label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="h-14 text-base border-2 border-primary/20 focus:border-primary rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Honeypot field */}
            <div style={{ display: "none" }}>
              <Label htmlFor="spam-check">Leave this empty</Label>
              <input type="text" id="spam-check" name="spam-check" />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                type="submit"
                disabled={isSubmitted}
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent! Check Your Email
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Get the E-Book!
                    </>
                  )}
                </span>
              </Button>
            </motion.div>

            {/* Privacy Notice */}
            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-text-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Shield className="w-4 h-4 text-success" />
              <span>We won't send you spam. Unsubscribe at any time.</span>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border border-primary/20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-primary animate-bounce-gentle" />
            <span className="text-lg font-semibold text-foreground">
              Start Your Journey Today
            </span>
          </div>
          <p className="text-text-light">
            Join thousands who've already transformed their communication skills
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
