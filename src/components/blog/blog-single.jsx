"use client";

import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import { urlForImage } from "../../../sanity/utils/urlFor";
import { formattedDate } from "../../../sanity/utils/date";
import { calculateReadTime } from "../../../sanity/utils/readTime";
import PortableRenderer from "../shared/PortableRenderer";
import { getPlainTextFromPortableText } from "../../../sanity/utils/getPlainTextFromPortableText";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

export default function BlogSingle({ blog, relatedBlogs, blogsMeta }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isContentInView, setIsContentInView] = useState(false);
  const [readingMode, setReadingMode] = useState(false);
  const [contentProgress, setContentProgress] = useState(0);

  // Refs for content tracking
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const relatedRef = useRef(null);
  const newsletterRef = useRef(null);

  const plainText = getPlainTextFromPortableText(blog.content);
  const readTime = calculateReadTime(plainText);

  // Find current and next blog
  const currentIndex = blogsMeta.findIndex(
    (item) => item?.slug?.current === blog.slug
  );
  const nextBlog =
    blogsMeta.length - 1 === currentIndex
      ? blogsMeta[0]
      : blogsMeta[currentIndex + 1] || null;

  // Dynamic grid columns based on related blogs count
  const getGridColumns = () => {
    const count = relatedBlogs.length;
    if (count === 1) return "grid-cols-1 max-w-md mx-auto";
    if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  // Enhanced scroll tracking with reading mode logic
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 100;
    setIsScrolled(scrolled);

    if (contentRef.current) {
      const contentElement = contentRef.current;
      const contentRect = contentElement.getBoundingClientRect();
      const contentTop = contentElement.offsetTop;
      const contentHeight = contentElement.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Check if content is in viewport
      const inView =
        contentRect.top < windowHeight * 0.8 &&
        contentRect.bottom > windowHeight * 0.2;
      setIsContentInView(inView);

      // Calculate content progress for reading mode
      const contentStart = contentTop - windowHeight * 0.3;
      const contentEnd = contentTop + contentHeight - windowHeight * 0.7;
      const progress = Math.max(
        0,
        Math.min(
          100,
          ((scrollTop - contentStart) / (contentEnd - contentStart)) * 100
        )
      );

      setContentProgress(progress);

      // Reading mode logic - activate when deeply engaged with content
      const readingModeStart = 15; // Start reading mode at 15% through content
      const readingModeEnd = 85; // End reading mode at 85% through content

      const shouldActivateReadingMode =
        inView && progress >= readingModeStart && progress <= readingModeEnd;
      setReadingMode(shouldActivateReadingMode);

      // Calculate reading progress for progress bar
      if (inView) {
        const readingStart = contentTop - windowHeight * 0.2;
        const readingEnd = contentTop + contentHeight - windowHeight * 0.8;
        const readingProgress = Math.max(
          0,
          Math.min(
            100,
            ((scrollTop - readingStart) / (readingEnd - readingStart)) * 100
          )
        );
        setReadingProgress(readingProgress);
      }
    }
  }, []);

  // Intersection Observer for better content tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === contentRef.current) {
            setIsContentInView(entry.isIntersecting);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Optimized scroll listener
  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  // Animation variants - optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.02 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1,
      },
    },
  };
  // console.log("blog", blog);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/5 relative">
      {/* Reading Mode Overlay */}
      <AnimatePresence>
        {readingMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.2) 100%)`,
              backdropFilter: "blur(0.5px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Clean Reading Progress Bar */}
      <AnimatePresence>
        {isContentInView && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 lg:top-18 left-0 right-0 z-40"
          >
            <div className="relative">
              {/* Background Bar */}
              <div className="h-1.5 bg-gradient-to-r from-gray-200/60 via-gray-200/80 to-gray-200/60 backdrop-blur-sm shadow-sm " />

              {/* Progress Fill */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 shadow-sm rounded-full"
                style={{ width: `${readingProgress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />

              {/* Subtle glow effect */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400/50 via-blue-400/50 to-purple-400/50 blur-sm"
                style={{ width: `${readingProgress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Bar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: readingMode ? 0.5 : 1,
              x: 0,
              scale: readingMode ? 0.9 : 1,
            }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-100 flex flex-col gap-3  "
          >
            {/* Share Button */}
            <motion.button
              whileHover={{ scale: readingMode ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-primary/20 text-foreground hover:bg-primary/10 shadow-lg transition-all duration-150 group cursor-pointer"
              title="Share article"
            >
              <Share2 className="w-5 h-5 mx-auto group-hover:scale-110 transition-transform duration-150" />
            </motion.button>

            {/* Scroll to Top */}
            <motion.button
              whileHover={{ scale: readingMode ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-primary/20 text-foreground hover:bg-primary/10  shadow-lg transition-all duration-150 group cursor-pointer"
              title="Scroll to top"
            >
              <ArrowLeft className="w-5 h-5 mx-auto rotate-90 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className={`relative pt-20 md:pt-24 pb-8 md:pb-16 overflow-hidden transition-all duration-700 ${
          readingMode ? "opacity-40 blur-[1px]" : "opacity-100 blur-0"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute top-10 left-4 md:top-20 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="section-content mt-10 lg:mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Back Button */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <Link
                href="/blog"
                className="group inline-flex items-center text-primary hover:text-primary/80 transition-all duration-150 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-primary/20 shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform duration-150" />
                <span className="font-medium text-sm md:text-base">
                  Back to all posts
                </span>
              </Link>
            </motion.div>

            {/* Enhanced Mobile-Optimized Cover Image */}
            <motion.div
              variants={imageVariants}
              className="relative mb-8 md:mb-12 group"
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                <Image
                  src={
                    urlForImage(blog.coverImage?.asset?._ref).url() ||
                    "/images/blog-img.jpg" ||
                    "/placeholder.svg"
                  }
                  placeholder={blog.blurDataURL ? "blur" : "empty"}
                  blurDataURL={blog.blurDataURL}
                  alt={blog.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              </div>

              {/* Enhanced Mobile-First Floating Meta Card */}
              <motion.div
                variants={floatingCardVariants}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 lg:bottom-8 lg:left-8 lg:right-8"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/20 shadow-2xl">
                  {/* Mobile-Optimized Meta Tags */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4 text-xs sm:text-sm">
                    <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold border border-primary/20 text-xs sm:text-sm">
                      {blog.topic.title}
                    </span>
                    <span className="flex items-center text-text-light">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                      <span className="hidden sm:inline text-xs sm:text-sm">
                        {formattedDate(blog.publishedAt)}
                      </span>
                      <span className="sm:hidden text-xs">
                        {formattedDate(blog.publishedAt).split(",")[0]}
                      </span>
                    </span>
                    <span className="flex items-center text-text-light">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                      <span className="text-xs sm:text-sm">
                        {readTime === 1
                          ? `${readTime} min`
                          : `${readTime} mins`}
                      </span>
                    </span>
                  </div>

                  {/* Mobile-Responsive Title */}
                  <h1 className="gradient-theme text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-heading  leading-tight sm:leading-tight md:leading-tight">
                    {blog.title}
                  </h1>

                  {/* Author Info - Responsive Display */}
                  {blog.author && (
                    <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary/10">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-foreground">
                          {blog.author.name}
                        </p>
                        <p className="text-xs text-text-light">Author</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content - Reading Mode Focus Area */}
      <section
        ref={contentRef}
        className={`py-8 md:pb-16  relative z-20 transition-all duration-700 ${readingMode ? "relative z-30" : ""}`}
      >
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Content Container */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/10 shadow-lg mb-8 md:mb-12 transition-all duration-700 ${
                readingMode
                  ? "bg-white/95 shadow-2xl border-primary/20 relative z-30"
                  : ""
              }`}
            >
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-text-light prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-img:rounded-xl prose-img:shadow-lg">
                <PortableRenderer content={blog.content} />
              </div>
            </div>

            {/* Navigation Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className={`flex flex-col gap-6 p-6 md:p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl md:rounded-3xl border border-primary/10 transition-all duration-700 ${
                readingMode ? "opacity-60 blur-[0.5px]" : "opacity-100 blur-0"
              }`}
            >
              {/* Share Action */}
              <div className="flex items-center justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: readingMode ? 1.01 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 text-foreground hover:bg-primary/10 border border-primary/20 transition-all duration-150 text-sm font-medium shadow-sm group"
                >
                  <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-150" />
                  <span>Share this blog</span>
                </motion.button>
              </div>

              {/* Next Article */}
              {nextBlog && (
                <Link
                  href={`/blog/${nextBlog?.slug?.current}`}
                  className="block"
                >
                  <motion.div
                    whileHover={{
                      scale: readingMode ? 1.002 : 1.005,
                      x: readingMode ? 1 : 3,
                    }}
                    whileTap={{ scale: 0.995 }}
                    className="group flex items-center gap-4 p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-150"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm text-text-light/80 font-medium mb-1">
                        Next Article
                      </p>
                      <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-150 line-clamp-2">
                        {nextBlog.title}
                      </p>
                      <p className="text-xs text-text-light mt-1 hidden md:block">
                        {nextBlog.excerpt?.slice(0, 100)}...
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:translate-x-0.5 transition-transform duration-150 flex-shrink-0" />
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section
        ref={relatedRef}
        className={`py-16 md:py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 transition-all duration-700 ${
          readingMode ? "opacity-40 blur-[1px]" : "opacity-100 blur-0"
        }`}
      >
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg mb-6"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  {relatedBlogs.length === 1
                    ? "Related Blogs"
                    : "You Might Also Like"}
                </span>
              </motion.div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading  mb-2 leading-tight gradient-heading ">
                Expand Your Horizons
              </h2>
              <p className="text-text-light text-base md:text-lg lg:text-xl max-w-2xl mx-auto ">
                Explore more insights on communication, empathy, and human
                connection
              </p>
            </div>

            {/* Related Articles Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              className={`grid gap-6 md:gap-8 lg:gap-10 ${getGridColumns()}`}
            >
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <BlogCard blog={relatedBlog} index={index} />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button */}
            {relatedBlogs.length >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="text-center mt-12 md:mt-16"
              >
                <Link href="/blog">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 group"
                  >
                    <span>Explore All Blogs</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        ref={newsletterRef}
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
    </div>
  );
}
