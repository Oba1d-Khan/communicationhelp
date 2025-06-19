import BlogSingle from "@/components/blog/blog-single";
import { client } from "@/sanity/client";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/utils/queries";
import React from "react";

export const metadata = {
  title: "Blog | Bruce Lambert",
  description:
    "Articles on persuasion, listening, empathy, leadership, and communication by Bruce Lambert, Ph.D.",
};

const BlogSinglePage = async ({ params }) => {
  const { slug } = await params;
  const blog = await client.fetch(BLOG_BY_SLUG_QUERY, { slug });
  return (
    <main>
      <BlogSingle blog={blog} />
    </main>
  );
};

export default BlogSinglePage;
