import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import { blogPost, relatedBlogs } from "@/constants/constants";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              href="/contents"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </Link>

            {/* Cover Image */}
            <div className="aspect-[16/9] relative overflow-hidden rounded-2xl mb-8">
              <Image
                // src={blogPost.coverImage || "/placeholder.svg"}
                src={"/images/blog-img.jpg"}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-light">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                {blogPost.topic}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {blogPost.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {blogPost.readTime}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {blogPost.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-8 leading-tight">
              {blogPost.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-text-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-primary/10">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Older Post
              </Button>
              <Button variant="outline" className="flex items-center">
                Newer Post
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-foreground mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedBlogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
