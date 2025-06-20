"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import BlogSlider from "@/components/blog/blog-slider";
import BlogCard from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlogMain({ blogs, topics }) {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  // Create topics array with "All" option
  const topicOptions = [{ title: "All", slug: "all" }, ...topics];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
  ];

  // Filter and sort blogs
  const filteredAndSortedBlogs = useMemo(() => {
    const filtered = blogs.filter((blog) => {
      const matchesTopic =
        selectedTopic === "All" || blog.topic?.title === selectedTopic;
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTopic && matchesSearch;
    });

    // Sort the filtered results
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.publishedAt || b.createdAt) -
            new Date(a.publishedAt || a.createdAt)
          );
        case "oldest":
          return (
            new Date(a.publishedAt || a.createdAt) -
            new Date(b.publishedAt || b.createdAt)
          );
        case "popular":
          return (b.views || 0) - (a.views || 0);
        default:
          return 0;
      }
    });

    return sorted;
  }, [blogs, selectedTopic, searchQuery, sortBy]);

  const featured = useMemo(() => {
    return blogs.filter((blog) => blog.featured);
  }, [blogs]);

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
            {/* All Posts Section */}
            <section className="pb-20 md:pb-32">
              <div className="container">
                <div className="max-w-6xl mx-auto">
                  {/* Filters and Search */}
                  <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
                    {/* Search */}
                    <div className="relative w-[90%] mb-3 md:mb-0 md:px-0 md:w-auto md:min-w-[320px]">
                      <Search
                        strokeWidth={2}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Search articles or topics..."
                        className="w-full pl-11 pr-4 py-3 md:py-[5px] border border-primary/50 rounded-full bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base transition-all duration-200 hover:border-primary/70 focus:bg-background"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col lg:flex-row gap-3 items-center">
                      <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-text-light" />
                        <span className="text-sm text-text-light font-medium">
                          Filter by:
                        </span>
                      </div>

                      {/* Topic Filter */}
                      <Select
                        value={selectedTopic}
                        onValueChange={setSelectedTopic}
                        // className="bg-primary"
                      >
                        <SelectTrigger className="w-[180px] border-primary/50 rounded-full bg-primary/5 hover:border-primary/70 focus:ring-2 focus:ring-primary/30 transition-all duration-200 cursor-pointer">
                          <SelectValue placeholder="All Topics" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-primary/30 bg-background shadow-lg">
                          {topicOptions.map((topic) => (
                            <SelectItem
                              key={topic.slug || topic.title}
                              value={topic.title}
                              className="rounded-lg hover:bg-primary/10 focus:bg-primary/10 cursor-pointer transition-colors duration-150"
                            >
                              {topic.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* Sort Filter */}
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-[160px] border-primary/50 rounded-full bg-primary/5 hover:border-primary/70 focus:ring-2 focus:ring-primary/30 transition-all duration-200 cursor-pointer">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-primary/30 bg-background shadow-lg">
                          {sortOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              className="rounded-lg hover:bg-primary/10 focus:bg-primary/10 cursor-pointer transition-colors duration-150"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Results count */}
                  <div className="mb-8">
                    <p className="text-text-light">
                      Showing{" "}
                      <span className="font-semibold text-foreground">
                        {filteredAndSortedBlogs.length}
                      </span>{" "}
                      article{filteredAndSortedBlogs.length !== 1 ? "s" : ""}
                      {selectedTopic !== "All" && (
                        <span>
                          {" "}
                          in{" "}
                          <span className="font-semibold text-primary">
                            {selectedTopic}
                          </span>
                        </span>
                      )}
                      {searchQuery && (
                        <span>
                          {" "}
                          for "
                          <span className="font-semibold text-primary">
                            {searchQuery}
                          </span>
                          "
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Blog Grid */}
                  {filteredAndSortedBlogs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                      {filteredAndSortedBlogs.map((blog, index) => (
                        <BlogCard key={blog.id || index} blog={blog} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="max-w-md mx-auto">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <Search className="w-8 h-8 text-primary/60" />
                        </div>
                        <h3 className="text-xl font-heading text-foreground mb-2">
                          No articles found
                        </h3>
                        <p className="text-text-light mb-6">
                          Try adjusting your search terms or filters to find
                          what you're looking for.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedTopic("All");
                            setSortBy("newest");
                          }}
                          className="rounded-full"
                        >
                          Clear Filters
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Load More Button - Only show if there are results */}
                  {filteredAndSortedBlogs.length > 0 && (
                    <div className="text-center mt-16">
                      <Button
                        variant="outline"
                        size="lg"
                        className="px-8 rounded-full border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Mobile View All Button */}
            <div className="text-center md:hidden">
              <Link href="/contents">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full"
                >
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
                className="flex-1 px-4 py-3 border border-primary/30 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
              />
              <Button className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
