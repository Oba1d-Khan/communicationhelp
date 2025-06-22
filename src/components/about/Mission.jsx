"use client";
import {
  Sparkles,
  BookOpen,
  Award,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const benefits = [
    {
      text: "Master communication by understanding core principles—not just tips.",
      icon: Lightbulb,
      color: "text-yellow-500",
    },
    {
      text: "Develop unshakable confidence in any situation.",
      icon: Target,
      color: "text-blue-500",
    },
    {
      text: "Apply research-backed insights most people never learn.",
      icon: BookOpen,
      color: "text-green-500",
    },
  ];

  const achievements = [
    { icon: Award, label: "Ph.D. in Communication", color: "text-purple-500" },
    { icon: BookOpen, label: "100+ Publications", color: "text-blue-500" },
    {
      icon: TrendingUp,
      label: "$17M Research Funding",
      color: "text-green-500",
    },
    { icon: Users, label: "34 Years Teaching", color: "text-orange-500" },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 px-6 sm:px-10 md:px-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[-60px] left-[-60px] w-80 h-80 bg-gradient-to-r from-orange-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 8,
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
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Enhanced Left Side - Benefits */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="text-orange-500 w-6 h-6" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                Your Transformation
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Communicate Effectively.{" "}
              <span className="text-primary relative inline-block">
                Lead Confidently.
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-text-light text-lg md:text-xl leading-relaxed"
              variants={itemVariants}
            >
              You want to improve your personal relationships, move ahead in
              your career, and express yourself with confidence.
            </motion.p>
          </div>

          {/* Enhanced Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl hover-lift transition-all duration-300">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </motion.div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Right Side - Bio */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-primary/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-primary/20 hover-lift transition-all duration-300">
            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -right-4 grid grid-cols-2 gap-2">
              {achievements.slice(0, 2).map((achievement, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-primary/20 flex items-center justify-center"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <achievement.icon
                    className={`w-5 h-5 ${achievement.color}`}
                  />
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Meet Your Guide
                </span>
              </motion.div>

              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <motion.p
                  className="text-text-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  My name is{" "}
                  <span className="font-semibold text-foreground bg-gradient-to-r from-primary/20 to-secondary/20 px-2 py-1 rounded">
                    Bruce Lambert
                  </span>
                  . I've taught thousands of people across the U.S. how to
                  communicate more effectively.
                </motion.p>

                <motion.p
                  className="text-text-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  With a Ph.D. in Communication, over{" "}
                  <strong className="text-primary">
                    100 scientific publications
                  </strong>
                  , and more than{" "}
                  <strong className="text-primary">
                    $17M in research funding
                  </strong>
                  , I've spent 34 years teaching, researching, and consulting on
                  health, communication, and technology.
                </motion.p>

                <motion.p
                  className="text-text-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  My goal with this website is to help you enhance your
                  relationships, grow your career, and make your communication
                  impactful.
                </motion.p>
              </div>

              {/* Achievement Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-white/60 rounded-xl border border-primary/10 hover-lift transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <achievement.icon
                      className={`w-5 h-5 ${achievement.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-xs font-medium text-foreground">
                      {achievement.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mission;
