"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formattedDate } from "@/sanity/utils/date";
import { urlForImage } from "@/sanity/utils/urlFor";
import { motion, AnimatePresence } from "framer-motion";

const BlogSlider = ({ featuredBlogs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-play with progress tracking - faster intervals
  useEffect(() => {
    if (!isAutoPlaying || featuredBlogs.length <= 1) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % featuredBlogs.length);
          return 0;
        }
        return prev + 2.5; // Faster progress: 4 seconds total
      });
    }, 100);

    return () => clearInterval(interval);
  }, [featuredBlogs.length, isAutoPlaying]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000); // Faster resume
  }, [featuredBlogs.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  }, [featuredBlogs.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  }, []);

  // Optimized touch handlers
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 50) nextSlide(); // Reduced threshold for faster response
    if (touchStart - touchEnd < -50) prevSlide();
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isAutoPlaying]);

  if (!featuredBlogs || featuredBlogs.length === 0) {
    return null;
  }

  return (
    <div
      className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Featured blog posts carousel"
    >
      {/* Slides - Ultra-fast transitions */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          {featuredBlogs.map(
            (blog, index) =>
              index === currentSlide && (
                <motion.div
                  key={`${blog.slug?.current}-${index}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} // Faster transition
                  className="absolute inset-0"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={
                        urlForImage(blog.coverImage.asset._ref).url() ||
                        "/placeholder.svg?height=800&width=1200"
                      }
                      alt={blog.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                  </div>

                  {/* Content - Instant appearance */}
                  <div className="relative h-full flex items-center">
                    <div className="section-content">
                      <div className="max-w-4xl mx-auto text-center lg:text-left">
                        {/* Date Badge - No delay */}
                        <div className="flex items-center justify-center lg:justify-start text-white/80 mb-4">
                          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">
                              {formattedDate(blog.publishedAt)}
                            </span>
                          </div>
                        </div>

                        {/* Title - Instant */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white mb-6 leading-tight">
                          {blog.title}
                        </h1>

                        {/* Excerpt - Instant */}
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                          {blog.excerpt}
                        </p>

                        {/* CTA Button - Instant */}
                        <div className="flex justify-center lg:justify-start">
                          <Link href={`/blog/${blog.slug.current}`}>
                            <Button
                              size="lg"
                              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl rounded-full group"
                            >
                              Read Article
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {featuredBlogs.length > 1 && (
        <>
          {/* Arrow Navigation - Faster transitions */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 h-12 w-12 rounded-full"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 h-12 w-12 rounded-full"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 h-10 w-10 rounded-full"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>

          {/* Dots Indicator - Faster transitions */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {featuredBlogs.map((_, index) => (
              <button
                key={index}
                className={`relative w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              >
                {index === currentSlide && (
                  <div
                    className="absolute inset-0 rounded-full bg-white/30 scale-150 transition-all duration-100"
                    style={{
                      background: `conic-gradient(white ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Progress Bar - Smooth animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentSlide + 1) / featuredBlogs.length) * 100}%`,
          }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
};

export default BlogSlider;
