"use client";
import { useState, useMemo, useEffect } from "react";
import BlogSlider from "@/components/blog/blog-slider";
import BlogCard from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Filter, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [visibleCount, setVisibleCount] = useState(9);
  const [isMobile, setIsMobile] = useState(false);

  // Create topics array with "All" option
  const topicOptions = [{ title: "All", slug: "all" }, ...topics];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
  ];

  // Filter and sort blogs with performance optimization
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

  // Add mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleCount(window.innerWidth < 768 ? 6 : 9);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(isMobile ? 6 : 9);
  }, [selectedTopic, searchQuery, sortBy, isMobile]);

  // Get visible blogs based on pagination
  const visibleBlogs = useMemo(() => {
    return filteredAndSortedBlogs.slice(0, visibleCount);
  }, [filteredAndSortedBlogs, visibleCount]);

  // Check if there are more blogs to load
  const hasMoreBlogs = filteredAndSortedBlogs.length > visibleCount;

  const featured = useMemo(() => {
    return blogs.filter((blog) => blog.featured);
  }, [blogs]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTopic("All");
    setSortBy("newest");
  };

  const loadMoreBlogs = () => {
    const increment = isMobile ? 6 : 9;
    setVisibleCount((prev) => prev + increment);
  };

  // Lightning-fast animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Super minimal stagger
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2, // Very fast
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Slider Section */}
      <section className="section-wrapper mt-16">
        <BlogSlider featuredBlogs={featured} />
      </section>
      {/* Main Content */}
      <section className="section-wrapper">
        <div className="section-content py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto animate-fadeIn">
            {/*  Search and Filters Bar */}
            <div className="bg-gradient-to-tl from-white/90 via-primary/5 to-secondary/5 backdrop-blur-sm rounded-3xl p-6 md:p-4 mb-8 border border-primary/10 shadow-md">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative w-full lg:w-auto lg:min-w-[320px]">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles or topics..."
                    className="w-full pl-12 pr-10 py-3 md:py-2 border-2 border-primary/20 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-base transition-all duration-150 hover:border-primary/40"
                    value={searchQuery}
                    onChange={(e) => {
                      console.log("Search input value:", e.target.value);
                      setSearchQuery(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      // Ensure spaces are allowed
                      if (e.key === " ") {
                        e.stopPropagation();
                      }
                    }}
                    spellCheck="false"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-light hover:text-primary transition-colors duration-150"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
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
                  >
                    <SelectTrigger className="w-[180px] border-primary/30 rounded-full bg-white hover:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-150">
                      <SelectValue placeholder="All Topics" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-primary/20 bg-white shadow-xl">
                      {topicOptions.map((topic) => (
                        <SelectItem
                          key={topic.slug || topic.title}
                          value={topic.title}
                          className="rounded-lg hover:bg-primary/10 focus:bg-primary/10 transition-colors duration-100"
                        >
                          {topic.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Sort Filter */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px] border-primary/30 rounded-full bg-white hover:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-150">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-primary/20 bg-white shadow-xl">
                      {sortOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="rounded-lg hover:bg-primary/10 focus:bg-primary/10 transition-colors duration-100"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Results count - Instant */}
            <div className="mb-6">
              <p className="text-text-light text-lg">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {visibleBlogs.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-foreground">
                  {filteredAndSortedBlogs.length}
                </span>{" "}
                article
                {filteredAndSortedBlogs.length !== 1 ? "s" : ""}
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

            {/* Blog Grid - Ultra-fast transitions */}
            <AnimatePresence mode="wait">
              {visibleBlogs.length > 0 ? (
                <motion.div
                  key="blog-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                  {visibleBlogs.map((blog, index) => (
                    <BlogCard
                      key={blog.id || index}
                      blog={blog}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="text-center py-16"
                >
                  <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/10 shadow-lg">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Search className="w-8 h-8 text-primary/60" />
                    </div>
                    <h3 className="text-2xl font-heading text-foreground mb-3">
                      No articles found
                    </h3>
                    <p className="text-text-light mb-6 leading-relaxed">
                      Try adjusting your search terms or filters to find what
                      you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      Clear Filters
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More Button */}
            {hasMoreBlogs && (
              <div className="text-center mt-12 animate-fadeIn">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={loadMoreBlogs}
                  className="px-8 py-4  rounded-full border-primary/30 bg-gradient-theme text-white transition-all duration-300 shadow-lg hover:shadow-xl  scale-95 hover:scale-105"
                >
                  Load More (
                  <span className="font-semibold">
                    {filteredAndSortedBlogs.length - visibleCount}
                  </span>
                  )
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Newsletter CTA Section */}
      <section
        className={`py-16 md:py-20 transition-all duration-700 
        }`}
      >
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/90 via-primary/5 to-secondary/5 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-primary/20 shadow-2xl text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading text-foreground mb-4 leading-tight">
                Never Miss an Insight
              </h3>
              <p className="text-text-light text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Get the latest articles on communication and human connection
                delivered to your inbox.
              </p>

              <div className="flex flex-col  sm:flex-row sm:items-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 md:px-6 py-3 md:py-2 border-2 border-primary/20 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-150 text-sm md:text-base"
                />
                <Button className="px-6 md:px-8 py-3 md:py-5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-150 shadow-lg hover:shadow-xl font-medium whitespace-nowrap text-sm md:text-base">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
