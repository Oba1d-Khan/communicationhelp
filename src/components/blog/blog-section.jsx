import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { client } from "../../../sanity/client";
import { ALL_BLOGS_QUERY } from "../../../sanity/utils/queries";
import Link from "next/link";
import BlogListItem from "./blog-list-item";

const options = { next: { revalidate: 60 } };

const BlogSection = async () => {
  const blogs = await client.fetch(ALL_BLOGS_QUERY, options);
  const latestBlog = blogs[0];

  return (
    <section className="section-wrapper bg-gradient-to-br from-background via-background to-primary/5">
      <div className="section-content py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header - Instant appearance */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 gap-6 animate-fadeIn">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4 leading-tight">
                Latest Articles
              </h2>
              <p className="text-text-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Dive deeper into the art and science of human connection
              </p>
            </div>

            <Link href="/blog" className="flex justify-center lg:justify-start">
              <Button
                variant="outline"
                className="group border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full px-6 py-3"
              >
                View All Blogs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </Link>
          </div>

          {/* Latest Article - Quick slide up */}
          <div className="animate-slideUp">
            <BlogListItem blog={latestBlog} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
