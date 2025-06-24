import BlogSingle from "@/components/blog/blog-single";
import { client } from "@/sanity/client";
import {
  ALL_BLOGS_META_QUERY,
  BLOG_BY_SLUG_QUERY,
  RELATED_BLOGS_QUERY,
} from "@/sanity/utils/queries";
import { urlForImage } from "@/sanity/utils/urlFor";
import { getBlurPlaceholder } from "@/utils/blur-placeholder";
import React from "react";

export const metadata = {
  title: "Blog | Bruce Lambert",
  description:
    "Articles on persuasion, listening, empathy, leadership, and communication by Bruce Lambert, Ph.D.",
};

const options = { next: { revalidate: 60 } };
const BlogSinglePage = async ({ params }) => {
  const { slug } = await params;
  const blog = await client.fetch(BLOG_BY_SLUG_QUERY, { slug });
  const relatedBlogs = await client.fetch(
    RELATED_BLOGS_QUERY,
    { topic: blog.topic._id, slug: slug },
    options
  );
  const blogsMeta = await client.fetch(ALL_BLOGS_META_QUERY, options);

  const imageUrl = urlForImage(blog.coverImage.asset._ref).url();
  const blurDataURL = await getBlurPlaceholder(imageUrl);
  console.log("blurDataURL", blurDataURL);

  const blogWithBlur = {
    ...blog,
    coverImage: {
      ...blog.coverImage,
      blurDataURL,
    },
  };
  return (
    <main className="">
      <BlogSingle
        blog={blogWithBlur}
        relatedBlogs={relatedBlogs}
        blogsMeta={blogsMeta}
      />
    </main>
  );
};

export default BlogSinglePage;
