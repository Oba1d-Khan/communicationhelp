"use client";
import {
  Heart,
  Users,
  Target,
  Lightbulb,
  Code,
  BookOpen,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Ear,
  Shield,
  Coffee,
  Github,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutPage = () => {
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

  const skills = [
    {
      icon: Ear,
      title: "Make people feel heard and seen",
      description:
        "Learn the art of empathic listening that creates genuine connection",
    },
    {
      icon: MessageCircle,
      title: "Respond effectively in sensitive conversations",
      description: "Navigate difficult topics with confidence and compassion",
    },
    {
      icon: Target,
      title: "Eliminate awkward silences",
      description: "Master the flow of meaningful dialogue",
    },
    {
      icon: Users,
      title: "Build trust that inspires leadership",
      description:
        "Develop the communication skills that make people want to follow you",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "Every interaction starts with understanding",
    },
    {
      icon: Lightbulb,
      title: "Clarity Over Complexity",
      description: "Simple, actionable insights that actually work",
    },
    {
      icon: Shield,
      title: "Research-Backed",
      description: "Grounded in proven communication science",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Hero Section - Mission */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse-soft" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Our Mission
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8"
          >
            Helping people master the art of{" "}
            <span className="text-primary relative inline-block">
              listening
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>{" "}
            and leading with{" "}
            <span className="text-secondary font-bold">empathy</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-light max-w-4xl mx-auto leading-relaxed"
          >
            Communication Help is your guide to building deeper connections,
            navigating sensitive conversations, and developing the trust that
            makes you a natural leader.
          </motion.p>
        </motion.div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
              What You'll Master
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Practical skills that transform how you connect with others
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 group-hover:shadow-xl transition-all">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Creator Section */}
      <section className="py-20 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
                Who Built This Site?
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-primary/10 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent"
                    >
                      <Coffee className="w-4 h-4 mr-2" />
                      Portfolio
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading text-foreground mb-4">
                      Hi, I'm a developer passionate about meaningful
                      communication.
                    </h3>
                    <p className="text-text-light leading-relaxed mb-4">
                      I created Communication Help as an independent project to
                      make research-backed communication skills more accessible.
                      This platform is inspired by the work of communication
                      experts like Dr. Bruce Lambert, but it's built from the
                      ground up to serve anyone looking to improve their
                      interpersonal skills.
                    </p>
                    <p className="text-text-light leading-relaxed">
                      As a developer, I believe in the power of technology to
                      make valuable knowledge more approachable and actionable.
                      This site represents my commitment to creating tools that
                      genuinely help people connect better with others.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">
                      <strong>Why this matters to me:</strong> Great
                      communication skills shouldn't be locked behind expensive
                      courses or academic papers. Everyone deserves access to
                      tools that help them connect more meaningfully with
                      others.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-muted/20 to-muted/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-primary shadow-lg"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-heading text-foreground mb-3">
                  Important Disclaimer
                </h3>
                <p className="text-text-light leading-relaxed">
                  <strong>
                    This project is not officially affiliated with Dr. Bruce
                    Lambert.
                  </strong>{" "}
                  Communication Help is an independent platform created for
                  educational and portfolio purposes. While our content is
                  inspired by research in communication science, including Dr.
                  Lambert's work, this site represents my own interpretation and
                  presentation of these concepts.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border border-primary/20"
          >
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading text-foreground mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              Explore our collection of practical guides, tips, and insights to
              start building better connections today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span className="flex items-center gap-2">
                    Start Reading the Blog
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <span className="flex items-center gap-2">
                    Explore Topics
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
