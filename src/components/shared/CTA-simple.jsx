import React from "react";

const CTASimple = ({ ref }) => {
  return (
    <section
      ref={ref}
      className={`py-16 md:py-20 transition-all duration-700 ${
        readingMode ? "opacity-40 blur-[1px]" : "opacity-100 blur-0"
      }`}
    >
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/90 via-primary/5 to-secondary/5 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-primary/20 shadow-2xl text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading text-foreground mb-4 leading-tight">
              Never Miss an Insight
            </h3>
            <p className="text-text-light text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest articles on communication and human connection
              delivered to your inbox.
            </p>

            <div className="flex flex-col  sm:flex-row sm:items-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 md:px-6 py-3 md:py-2 border-2 border-primary/20 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-150 text-sm md:text-base"
              />
              <Button className="px-6 md:px-8 py-3 md:py-5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-150 shadow-lg hover:shadow-xl font-medium whitespace-nowrap text-sm md:text-base">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASimple;
