"use client";

import { formattedDate } from "@/sanity/utils/date";
import { urlForImage } from "@/sanity/utils/urlFor";
import { Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, variant = "default" }) => {
  console.log("blog", blog);
  const { title, excerpt, coverImage, publishedAt, topic, slug } = blog;

  const date = formattedDate(publishedAt);
  // console.log("coverImage", coverImage?.asset?._ref);

  // Featured variant (simplified with overlay content)
  if (variant === "featured") {
    return (
      <Link href={`/blog/${slug?.current}`} className="block h-full">
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-primary/5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 h-full">
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={
                urlForImage(coverImage?.asset?._ref).url() ||
                "/images/blog-img.jpg"
              }
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {topic}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading line-clamp-2 mb-2">
                {title}
              </h3>
              <p className="text-sm text-white/80 line-clamp-2 mb-3 hidden sm:block">
                {excerpt}
              </p>
              <div className="flex items-center text-xs sm:text-sm text-white/70 gap-4">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  10 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant (clean card with better spacing)
  return (
    <Link
      // href={`/blog/${slug}`}
      href={`/blog/${slug?.current}`}
      className="block h-full"
    >
      <article className="group bg-background dark:bg-primary/5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 h-full flex flex-col">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={
              urlForImage(coverImage.asset._ref).url() || "/images/blog-img.jpg"
            }
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          {/* Topic tag */}
          <div className="flex jcb aic mb-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
              <Tag className="w-3 h-3 mr-1" />
              {topic}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              10 min
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-heading text-foreground mb-10 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt - hidden on smallest screens */}
          <p className="text-text-light text-sm line-clamp-2 mb-3 hidden xs:block">
            {excerpt}
          </p>

          {/* Meta information */}
          <div className="mt-auto pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm border-t border-primary/10">
            <div className="flex items-center gap-3 text-text-light">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {date}
              </span>
            </div>
            <span className="text-primary font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
