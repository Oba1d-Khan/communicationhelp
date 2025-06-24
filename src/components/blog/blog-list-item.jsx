"use client";

import { formattedDate } from "@/sanity/utils/date";
import { urlForImage } from "@/sanity/utils/urlFor";
import { Calendar, Tag, ArrowRight, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogListItem = ({ blog, index = 0 }) => {
  // Optimized animation variants with reduced complexity
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: Math.min(index * 0.08, 0.4), // Cap the delay
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Link href={`/blog/${blog.slug.current}`} className="block">
      <motion.article
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px", amount: 0.3 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="group relative grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer border border-gray-100"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <motion.div
            className="aspect-[4/3] relative"
            variants={imageVariants}
          >
            <Image
              src={
                urlForImage(blog.coverImage.asset._ref).url() ||
                "/placeholder.svg?height=400&width=600"
              }
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjOWQ4ZGI0Ii8+PC9zdmc+"
            />

            {/* Floating Topic Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-primary font-semibold text-sm shadow-lg border border-primary/10">
                <Tag className="w-3 h-3 mr-2" />
                {blog.topic.title}
              </span>
            </div>

            {/* Reading Time Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                <Clock className="w-3 h-3 mr-1" />5 min read
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between relative z-10">
          {/* Meta Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-text-light">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formattedDate(blog.publishedAt)}
              </span>

              {blog.author && (
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {blog.author.name}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-heading text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="text-text-light text-lg leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>

          {/* Read More Button */}
          <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-primary font-semibold text-lg">
                <span>Read Article</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2 duration-300" />
              </div>

              {/* Decorative Element */}
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.article>
    </Link>
  );
};

export default BlogListItem;
