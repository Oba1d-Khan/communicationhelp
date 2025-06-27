"use client";
import heroImg from "../../../public/images/hero-home2.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  MessageCircle,
  Play,
  Star,
  TrendingUp,
  Award,
  Mic,
  Video,
  ScrollText,
  DollarSign,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "../magicui/marquee";
import Link from "next/link";

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

  const achievements = [
    { label: "Students Transformed", value: "10K+", icon: Users },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Years Experience", value: "35+", icon: Award },
  ];

  const socialProof = [
    { platform: "YouTube", metric: "2.5M+ Views", icon: Video },
    { platform: "TikTok", metric: "2M+ Engagements", icon: Mic },
    { platform: "Speaking", metric: "200+ Events", icon: MessageCircle },
    {
      platform: "Scientific Publications",
      metric: " 100+ Papers",
      icon: ScrollText,
    },
    {
      platform: "Research Funding",
      metric: "$17M+",
      icon: DollarSign,
    },
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
      <div className="section-content py-30 md:py-20 lg:py-24 lg:mt-10">
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
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3  shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5).slice(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">
                  35+ Years of Communication Research
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[0.9] max-w-6xl mx-auto text-foreground "
                variants={itemVariants}
              >
                Transform Through{" "}
                <motion.span
                  className="relative inline-block gradient-theme"
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
                className="text-md md:text-lg  text-text-light max-w-4xl mx-auto leading-relaxed font-medium lg:px-15"
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
              className="relative flex w-full flex-col items-center justify-center  gap-6 md:gap-8 overflow-hidden"
            >
              <Marquee pauseOnHover className="[--duration:30s]">
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
              </Marquee>
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-7xl mx-auto "
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl scale-105 animate-pulse" />

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group ">
              <Image
                src={heroImg || "/placeholder.svg?height=720&width=1280"}
                width={1280}
                height={720}
                alt="Professor teaching communication skills"
                className="w-full h-[700px] md:h-[600px] lg:h-[700px] object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 90vw,
         (max-width: 1280px) 95vw,
         1280px"
                quality={85}
              />

              {/* Enhanced Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                  className="max-w-2xl mx-8 md:mx-16 text-white space-y-6"
                >
                  <Badge className="bg-gradient-to-t from-primary/90  to-primary/80 text-white border-0 text-sm px-4 py-2 rounded-2xl">
                    <GraduationCap size={42} className=" mr-2" />
                    Communication Expert
                  </Badge>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                    Evidence-Based
                    <span className="block  text-blue-50">
                      Communication Mastery
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                    Discover the neuroscience and psychology behind persuasive
                    communication. Transform how you connect, influence, and
                    inspire others.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={"https://www.youtube.com/@HowCommunicationWorks"}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-secondary text-white shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative z-10 flex items-center px-2">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Play className="w-5 h-5 mr-2 group-hover:text-white transition-colors " />
                            </motion.div>
                            Watch Now
                          </span>
                        </Button>
                      </motion.div>
                    </Link>

                    <Link href={"/blog"}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative z-10 flex items-center">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <BookOpen className="w-5 h-5 mr-2 group-hover:text-white transition-colors" />
                            </motion.div>
                            Explore Content
                          </span>
                        </Button>
                      </motion.div>
                    </Link>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
