"use client";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
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

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 md:p-12 rounded-3xl border border-primary/20 shadow-xl"
        >
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BookOpen className="w-6 h-6 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-6">
            Ready to Transform Your Communication?
          </h2>

          <p className="text-lg text-text-light mb-8 leading-relaxed">
            Explore our collection of practical guides, tips, and insights to
            start building better connections today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="flex items-center gap-2">
                  Start Reading the Blog
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
  );
};

export default CTA;
