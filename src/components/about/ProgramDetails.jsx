"use client";
import { Ear, MessageCircle, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const ProgramDetails = () => {
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
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Respond effectively in sensitive conversations",
      description: "Navigate difficult topics with confidence and compassion",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Eliminate awkward silences",
      description: "Master the flow of meaningful dialogue",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Build trust that inspires leadership",
      description:
        "Develop the communication skills that make people want to follow you",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
            What You'll Master
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Practical skills that transform how you connect with others
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <>
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div className="absolute inset-0 rounded-3xl bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none z-10" />
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r gradient-floating-icons rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-20`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramDetails;
