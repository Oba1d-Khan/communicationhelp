"use client";

import { Calendar, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogListItem = ({ blog, featured = false }) => {
  if (featured) {
    return (
      <Link href={`/blog/${blog.slug}`}>
        <article className="group grid md:grid-cols-2 gap-8 items-center bg-foreground/10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              //   src={blog.coverImage || "/placeholder.svg"}
              src={"/images/blog-img.jpg"}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-4 text-sm text-text-light">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                <Tag className="w-3 h-3 mr-1" />
                {blog.topic}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {blog.date}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="text-text-light mb-6 line-clamp-3 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${blog.slug}`}>
      <article className="group bg-white dark:bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 border border-primary/5">
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-3 text-sm text-text-light">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {blog.date}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
              <Tag className="w-3 h-3 mr-1" />
              {blog.topic}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-text-light text-sm line-clamp-3 mb-4 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-light">By {blog.author}</span>
            <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogListItem;
