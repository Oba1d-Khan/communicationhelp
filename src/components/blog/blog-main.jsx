"use client";
import React, { useState } from "react";
import Link from "next/link";
import BlogListItem from "@/components/blog/blog-list-item";
import BlogSlider from "@/components/blog/blog-slider";
import BlogCard from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Search } from "lucide-react";
import { allBlogs } from "@/constants/constants";
import { recentBlogs } from "@/constants/constants";

export default function BlogMain({ blogs }) {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortBy, setSortBy] = useState("Newest First");
  const [searchQuery, setSearchQuery] = useState("");

  console.log("allBlogs", blogs);

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesTopic =
      selectedTopic === "All" || blog.topic.title === selectedTopic;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTopic && matchesSearch;
  });

  const topics = ["All", "Empathy", "Listening", "Persuasion"];
  const sortOptions = ["Newest First", "Oldest First", "Most Popular"];

  const featured = blogs.filter((blog) => blog.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="pb-2 md:pt-0 md:pb-12">
        <div className="">
          <div className="">
            <BlogSlider featuredBlogs={featured} />
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="root-layout pb-16 md:pb-24">
        <div className="">
          <div className="">
            {/* Section Header */}

            {/* All Posts Section */}
            <section className="pb-20 md:pb-32">
              <div className="container">
                <div className="max-w-6xl mx-auto">
                  {/* Filters and Search */}
                  <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
                    {/* Search */}
                    <div className="relative w-[90%] mb-3 md:mb-0 md:px-0  md:w-auto md:min-w-[320px]">
                      <Search
                        strokeWidth={3}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Search books or authors..."
                        className="w-full pl-11 pr-4 py-3 md:py-[6px] border border-primary/50 rounded-full bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base transition-all duration-200 hover:border-primary/70 focus:bg-background"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-text-light" />
                        <span className="text-sm text-text-light">
                          Filter by:
                        </span>
                      </div>

                      {/* Topic Filter */}
                      <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="px-4 py-2 border border-primary/30 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm cursor-pointer"
                      >
                        {topics.map((topic) => (
                          <option key={topic.title} value={topic.title}>
                            {topic.title}
                          </option>
                        ))}
                      </select>

                      {/* Sort Filter */}
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border border-primary/30 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm cursor-pointer"
                      >
                        {sortOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Results count */}
                  <div className="mb-8">
                    <p className="text-text-light">
                      Showing <b> {filteredBlogs.length}</b> article in
                      {filteredBlogs.length !== 1 ? "s" : ""}
                      {selectedTopic !== "All" && (
                        <b> {`  ${selectedTopic} `}</b>
                      )}
                    </p>
                  </div>

                  {/* Blog Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12  ">
                    {blogs.map((blog, index) => (
                      <BlogCard key={index} blog={blog} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  <div className="text-center mt-16">
                    <Button variant="outline" size="lg" className="px-8">
                      Load More Articles
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile View All Button */}
            <div className="text-center md:hidden">
              <Link href="/contents">
                <Button variant="outline" className="w-full sm:w-auto">
                  View All Posts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
              Get the latest articles on communication, empathy, and human
              connection delivered directly to your inbox. Join thousands of
              readers who are transforming their relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-primary/30 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button className="px-8 py-3 rounded-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
