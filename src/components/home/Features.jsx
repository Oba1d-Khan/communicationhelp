"use client";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Brain, Heart, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const benefits = [
    {
      title: "Master Social Psychology",
      desc: "Navigate complex conversations using evidence-based psychological insights and proven frameworks for professional and personal success.",
      icon: Brain,
      gradient: "from-blue-500/15 via-indigo-500/15 to-purple-500/15",
      iconColor: "text-blue-600",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Empathetic Connection",
      desc: "Develop deep listening techniques rooted in neuroscience that build genuine trust, understanding, and meaningful relationships.",
      icon: Heart,
      gradient: "from-emerald-500/15 via-teal-500/15 to-green-500/15",
      iconColor: "text-emerald-600",
      accent: "bg-gradient-to-r from-emerald-500 to-teal-600",
      borderColor: "border-emerald-200",
    },
    {
      title: "Ethical Influence",
      desc: "Learn persuasion techniques based on behavioral psychology that inspire authentic action and create positive, lasting change.",
      icon: Zap,
      gradient: "from-amber-500/15 via-orange-500/15 to-yellow-500/15",
      iconColor: "text-amber-600",
      accent: "bg-gradient-to-r from-amber-500 to-orange-600",
      borderColor: "border-amber-200",
    },
  ];

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

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="section-wrapper relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl"
          animate={
            isInView
              ? {
                  scale: [1.1, 1, 1.1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      <div className="section-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div
            variants={headerVariants}
            className="text-center max-w-5xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <Badge
                variant="outline"
                className="bg-primary/5 border-primary/20 text-primary px-6 py-3 text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Psychology-Backed Methods
              </Badge>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              variants={headerVariants}
            >
              <span className="gradient-heading">Build Deeper Connections</span>
            </motion.h2>

            <motion.p
              className="text-lg text-text-light leading-relaxed max-w-4xl mx-auto"
              variants={headerVariants}
            >
              Learn evidence-based strategies from neuroscience and behavioral
              psychology. Become a more effective communicator who builds trust,
              influences with integrity, and creates lasting positive impact.
            </motion.p>
          </motion.div>

          {/* Enhanced Benefits Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="relative group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Enhanced Background Effects */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border ${item.borderColor} group-hover:shadow-2xl transition-all duration-500 h-full overflow-hidden`}
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Animated Dotted Background Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none z-0"
                    animate={
                      isInView
                        ? {
                            backgroundPosition: ["0px 0px", "16px 16px"],
                          }
                        : {}
                    }
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                  />

                  {/* Foreground Content */}
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1,
                        transition: {
                          duration: 0.6,
                          type: "spring",
                          stiffness: 300,
                        },
                      }}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={
                        isInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -90 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + i * 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center ${item.iconColor} transition-all duration-300 group-hover:shadow-xl`}
                        whileHover={{
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                      >
                        <item.icon className="w-8 h-8" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.6 + i * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <motion.h3
                        className="text-2xl lg:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        className="text-text-light leading-relaxed text-md xl:text-lg mt-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.8 + i * 0.2,
                        }}
                      >
                        {item.desc}
                      </motion.p>
                    </motion.div>

                    {/* Subtle hover indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={
                        isInView
                          ? {
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0.7, 0.3],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
