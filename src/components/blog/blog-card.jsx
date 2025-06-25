"use client";

import { formattedDate } from "../../../sanity/utils/date";
import { getPlainTextFromPortableText } from "../../../sanity/utils/getPlainTextFromPortableText";
import { calculateReadTime } from "../../../sanity/utils/readTime";
import { urlForImage } from "../../../sanity/utils/urlFor";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ blog, variant = "default", index = 0 }) => {
  const { title, content, excerpt, coverImage, publishedAt, topic, slug } =
    blog;
  const date = formattedDate(publishedAt);
  const plainText = getPlainTextFromPortableText(content);
  const readTime = calculateReadTime(plainText);

  // Ultra-fast animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25, // Super fast
        ease: [0.4, 0, 0.2, 1], // Snappy easing
        delay: Math.min(index * 0.03, 0.15), // Minimal stagger
      },
    },
  };

  // Featured variant (hero-style with overlay)
  if (variant === "featured") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px", amount: 0.2 }}
        className="h-full"
      >
        <Link href={`/blog/${slug?.current}`} className="block h-full">
          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer h-full"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <Image
                src={
                  urlForImage(coverImage?.asset?._ref).url() ||
                  "/placeholder.svg?height=400&width=600"
                }
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/20">
                    <Tag className="w-3 h-3 mr-1.5" />
                    {topic?.title}
                  </span>
                  <span className="flex items-center text-xs text-white/80">
                    <Clock className="w-3 h-3 mr-1" />
                    {readTime} min read
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading line-clamp-2 mb-3 group-hover:text-secondary transition-colors duration-200">
                  {title}
                </h3>

                <p className="text-sm md:text-base text-white/90 line-clamp-2 mb-4 leading-relaxed">
                  {excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xs text-white/70">
                    <Calendar className="w-3 h-3 mr-1" />
                    {date}
                  </span>
                  <span className="flex items-center text-sm font-medium text-white group-hover:text-secondary transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  // Default variant (clean card design)
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px", amount: 0.2 }}
      className="h-full"
    >
      <Link href={`/blog/${slug?.current}`} className="block h-full">
        <motion.article
          className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer h-full flex flex-col border border-primary/10"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Image */}
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={
                urlForImage(coverImage.asset._ref).url() ||
                "/placeholder.svg?height=300&width=400"
              }
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />

            {/* Topic Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-primary border border-primary/20 shadow-lg">
                <Tag className="w-3 h-3 mr-1.5" />
                {topic?.title}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-4 text-sm text-text-light">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5" />
                {date}
              </span>
              <span className="flex items-center font-medium">
                <Clock className="w-4 h-4 mr-1.5" />
                {readTime} min read
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4 line-clamp-2 group-hover:text-primary/90 transition-colors duration-200 leading-tight">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-text-light text-base line-clamp-3 mb-6 leading-relaxed flex-grow">
              {excerpt}
            </p>

            {/* Read More */}
            <div className="mt-auto pt-4 border-t border-primary/10">
              <span className="inline-flex items-center text-sm text-primary font-semibold group-hover:text-secondary transition-colors duration-200">
                Read Article
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
