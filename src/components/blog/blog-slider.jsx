"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formattedDate } from "@/sanity/utils/date";
import { urlForImage } from "@/sanity/utils/urlFor";

const BlogSlider = ({ featuredBlogs }) => {
  // @states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredBlogs.length, isAutoPlaying]);

  // @slider-functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div
      className="relative h-[72vh] sm:h-[70vh] md:h-[80vh] lg:h-[89vh] overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full">
        {featuredBlogs.map((blog, index) => (
          <div
            key={index}
            className={`py-4 sm:py-6 absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== currentSlide}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={
                  urlForImage(blog.coverImage.asset._ref).url() ||
                  "/images/blog-img.jpg"
                }
                alt={blog.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container  px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto   ">
                  {/* Date */}
                  <div className="flex items-center justify-center sm:justify-start lg:justify-center text-white/80 mb-2 sm:mb-4">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">
                      {formattedDate(blog.publishedAt)}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-white mb-3 sm:mb-4 md:mb-6 leading-tight text-center sm:text-left lg:text-center">
                    {blog.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto text-center sm:text-left lg:text-center">
                    {blog.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="flex justify-center sm:justify-start lg:justify-center">
                    <Link href={`/blog/${blog.slug.current}`}>
                      <Button
                        size="default"
                        className="bg-white text-primary hover:bg-white/90 font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base"
                      >
                        View Post
                        <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on small screens, visible on hover for larger screens */}
      <div className="hidden sm:block">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      {/* Dots Indicator - Larger touch targets for mobile */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {featuredBlogs.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / featuredBlogs.length) * 100}%`,
          }}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax={featuredBlogs.length}
          aria-valuenow={currentSlide + 1}
        />
      </div>
    </div>
  );
};

export default BlogSlider;
