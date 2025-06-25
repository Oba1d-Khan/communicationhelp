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
import { formattedDate } from "../../../sanity/utils/date";
import { urlForImage } from "../../../sanity/utils/urlFor";
import { motion } from "framer-motion";

const BlogSlider = ({ featuredBlogs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 2000);
  }, [featuredBlogs.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 2000);
  }, [featuredBlogs.length, isTransitioning]);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setIsAutoPlaying(false);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsAutoPlaying(true);
      }, 2000);
    },
    [currentSlide, isTransitioning]
  );

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
      {/* Slides Container */}
      <div className="relative h-full overflow-hidden">
        <div className="relative h-full">
          <div
            className={`flex h-full transition-all duration-500 ease-out ${
              isTransitioning ? "scale-[0.98]" : "scale-100"
            }`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredBlogs.map((blog, index) => (
              <div
                key={`${blog.slug?.current}-${index}`}
                className="min-w-full h-full relative"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={
                      urlForImage(blog.coverImage.asset._ref).url() ||
                      "/placeholder.svg?height=800&width=1200" ||
                      "/placeholder.svg"
                    }
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjOWQ4ZGI0Ii8+PC9zdmc+"
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                </div>

                {/* Content - This is the main content area */}
                <div
                  className="relative h-full flex items-center"
                  id="slide-content"
                >
                  <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center lg:text-left">
                      {/* Date Badge */}
                      <div className="flex items-center justify-center lg:justify-start text-white/80 mb-4">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">
                            {formattedDate(blog.publishedAt)}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-white mb-4 sm:mb-6 leading-tight">
                        {blog.title}
                      </h1>

                      {/* Excerpt */}
                      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                        {blog.excerpt}
                      </p>

                      {/* CTA Button */}
                      <div className="flex justify-center lg:justify-start">
                        <Link href={`/blog/${blog.slug.current}`}>
                          <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl rounded-full group"
                          >
                            Read Article
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      {featuredBlogs.length > 1 && (
        <>
          {/* Arrow Navigation - Centered with slide content */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-20">
            <Button
              variant="outline"
              size="icon"
              className="ml-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12 rounded-full pointer-events-auto shadow-lg hover:shadow-xl transform hover:scale-110"
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="mr-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12 rounded-full pointer-events-auto shadow-lg hover:shadow-xl transform hover:scale-110"
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation - Also centered */}
          <div className="md:hidden absolute inset-0 flex items-center justify-between pointer-events-none z-20">
            <Button
              variant="outline"
              size="icon"
              className="ml-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 rounded-full pointer-events-auto shadow-lg"
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="mr-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 rounded-full pointer-events-auto shadow-lg"
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 h-10 w-10 rounded-full z-10"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>

          {/* Dots Indicator - At bottom */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
            {featuredBlogs.map((_, index) => (
              <button
                key={index}
                className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                } ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
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
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
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
