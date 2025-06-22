"use client";

import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  Users,
  Target,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  {
    text: "Attract people with your ability to make them feel seen, heard, and understood",
    icon: Heart,
    color: "text-pink-500",
  },
  {
    text: "Know exactly how to respond when someone shares something personal",
    icon: Target,
    color: "text-blue-500",
  },
  {
    text: "Build the trust that makes you a leader people actually want to follow",
    icon: Users,
    color: "text-green-500",
  },
  {
    text: "Eliminate awkward silences",
    icon: Zap,
    color: "text-yellow-500",
  },
];

export default function ProgramDetails() {
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

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 px-6 sm:px-10 md:px-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg mb-6"
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
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary">
              Transform Your Communication
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Listening to Lead:{" "}
            <span className="text-primary relative inline-block">
              Become the Person
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            People Trust
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join the waitlist for{" "}
            <span className="font-semibold text-primary">
              The Listening Leap
            </span>{" "}
            and get your completely free guide with tools to change your next
            conversation—starting immediately.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Benefits List */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <motion.h3
            className="text-2xl md:text-3xl font-heading text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You'll Master:
          </motion.h3>

          <div className="grid gap-6 md:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={benefitVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl hover-lift transition-all duration-300">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </motion.div>
                  <div className="flex-1 text-left">
                    <p className="text-base md:text-lg text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                      {benefit.text}
                    </p>
                  </div>
                  <motion.div
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-success" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl border border-primary/20"
        >
          <motion.p
            className="text-lg text-text-light mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform how people see you?
          </motion.p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
