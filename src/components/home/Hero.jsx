"use client";
import heroImg from "../../../public/images/hero-home.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  MessageCircle,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Award,
  Mic,
  Video,
  BookOpen,
  Brain,
  Heart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 50]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.8]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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

  const achievements = [
    { label: "Students Transformed", value: "10K+", icon: Users },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Years Experience", value: "15+", icon: Award },
  ];

  const socialProof = [
    { platform: "YouTube", metric: "500K+ Views", icon: Video },
    { platform: "TikTok", metric: "2M+ Engagements", icon: Mic },
    { platform: "Speaking", metric: "200+ Events", icon: MessageCircle },
  ];

  return (
    <section className="section-wrapper relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements - Full Width */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: y, opacity }}>
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl"
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
      </motion.div>

      {/* Content Container */}
      <div className="section-content py-16 md:py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Hero Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 relative"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Social Proof Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Trusted by 10,000+ professionals
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[0.9] max-w-6xl mx-auto text-foreground"
                variants={itemVariants}
              >
                Transform Through{" "}
                <motion.span
                  className="relative inline-block text-primary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Communication
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full blur-sm"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl  text-text-light max-w-4xl mx-auto leading-relaxed font-medium lg:px-15"
                variants={itemVariants}
              >
                Master the psychology of persuasion, empathetic listening, and
                authentic connection to build meaningful relationships and
                influence with integrity.
              </motion.p>
            </motion.div>

            {/* Social Proof Metrics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
              {socialProof.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-primary/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="font-bold text-foreground">
                      {item.metric}
                    </div>
                    <div className="text-sm text-text-light">
                      {item.platform}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-7xl mx-auto"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl scale-105 animate-pulse" />

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src={heroImg || "/placeholder.svg?height=720&width=1280"}
                width={1280}
                height={720}
                alt="Professor teaching communication skills"
                className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Enhanced Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                  className="max-w-2xl mx-8 md:mx-16 text-white space-y-6"
                >
                  <Badge className="bg-primary/90 text-white border-0 text-sm px-4 py-2">
                    <Mic className="w-4 h-4 mr-2" />
                    Communication Expert
                  </Badge>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                    Evidence-Based
                    <span className="block text-secondary">
                      Communication Mastery
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                    Discover the neuroscience and psychology behind persuasive
                    communication. Transform how you connect, influence, and
                    inspire others.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white shadow-xl transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Preview
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Explore Content
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 right-8 hidden lg:block"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {achievements.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                          <stat.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-xs text-text-light font-medium leading-tight">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-5xl mx-auto space-y-8 pt-20"
          >
            <Badge
              variant="outline"
              className="bg-primary/5 border-primary/20 text-primary px-6 py-3 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Psychology-Backed Methods
            </Badge>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                Build Deeper Connections
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-text-light leading-relaxed max-w-4xl mx-auto">
              Learn evidence-based strategies from neuroscience and behavioral
              psychology. Become a more effective communicator who builds trust,
              influences with integrity, and creates lasting positive impact.
            </p>
          </motion.div>

          {/* Enhanced Benefits Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto pb-20"
          >
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative group cursor-pointer"
              >
                {/* Enhanced Background Effects */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110`}
                />

                <div
                  className={`relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border ${item.borderColor} group-hover:shadow-2xl transition-all duration-300 h-full`}
                >
                  {/* Icon */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center ${item.iconColor} transition-all duration-300`}
                    >
                      <item.icon className="w-8 h-8" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-text-light leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
