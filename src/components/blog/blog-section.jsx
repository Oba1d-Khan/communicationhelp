import React from "react";
import BlogListItem from "./blog-list-item";
import { ArrowRight, Link } from "lucide-react";
import { Button } from "../ui/button";
import { client } from "@/sanity/client";
import { ALL_BLOGS_QUERY } from "@/sanity/utils/queries";

const options = { next: { revalidate: 60 } };

const BlogSection = async () => {
  const blogs = await client.fetch(ALL_BLOGS_QUERY, options);
  const latestBlog = blogs[0];
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading text-center md:text-start text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-text-light text-lg text-center lg:text-start leading-tight">
            Dive deeper into the art and science of human connection
          </p>
        </div>
        <Link href="/blog" className="cursor-pointer">
          <Button variant="outline" className="hidden md:flex items-center">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
      {/* Latest Article Item  */}
      <div className="mb-16 ">
        <BlogListItem blog={latestBlog} />
      </div>
    </section>
  );
};

export default BlogSection;
