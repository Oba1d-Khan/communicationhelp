import BlogMain from "@/components/blog/blog-main";
import { client } from "../../../sanity/client";
import {
  ALL_BLOGS_QUERY,
  ALL_TOPICS_QUERY,
} from "../../../sanity/utils/queries";
import React from "react";

const options = { next: { revalidate: 60 } };

export const metadata = {
  title: "Blog | Bruce Lambert",
  description:
    "Articles on persuasion, listening, empathy, leadership, and communication by Bruce Lambert, Ph.D.",
};
const BlogPage = async () => {
  const blogs = await client.fetch(ALL_BLOGS_QUERY, options);

  // fetch topics
  const topics = await client.fetch(ALL_TOPICS_QUERY, options);
  // console.log("blogs", blogs);
  return (
    <main>
      <BlogMain blogs={blogs} topics={topics} />
    </main>
  );
};

export default BlogPage;
