"use client";

import { useState, useMemo, useEffect, useCallback, memo } from "react";
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  Tag,
  Grid,
  List,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { urlForImage } from "@/sanity/utils/urlFor";
import { formattedDate } from "@/sanity/utils/date";
import { getPlainTextFromPortableText } from "@/sanity/utils/getPlainTextFromPortableText";
import { calculateReadTime } from "@/sanity/utils/readTime";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";

const TopicsList = ({ blogs, topics }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsTopic = searchParams.get("tags")
    ? decodeURIComponent(searchParams.get("tags"))
    : null;

  const [activeTopic, setActiveTopic] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");

  // Memoize topics map for faster lookups
  const topicsMap = useMemo(() => {
    const map = new Map();
    topics.forEach((topic) => {
      map.set(topic.title.toLowerCase(), topic);
      map.set(topic._id, topic);
    });
    return map;
  }, [topics]);

  useEffect(() => {
    if (paramsTopic) {
      const matchedTopic = topicsMap.get(paramsTopic.toLowerCase());
      const newActiveTopic = matchedTopic?._id || "all";
      // Only update if the topic actually changed
      if (newActiveTopic !== activeTopic) {
        setActiveTopic(newActiveTopic);
      }
    } else {
      // Only update if not already "all"
      if (activeTopic !== "all") {
        setActiveTopic("all");
      }
    }
  }, [paramsTopic, topicsMap, activeTopic]);

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    // { value: "popular", label: "Most Popular" },
  ];

  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Topic filtering - prioritize URL params
    if (paramsTopic) {
      filtered = filtered.filter(
        (blog) => blog.topic.title.toLowerCase() === paramsTopic.toLowerCase()
      );
    } else if (activeTopic !== "all") {
      filtered = filtered.filter((blog) => blog.topic._id === activeTopic);
    }

    // Search filtering
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query)
      );
    }

    // Sorting
    switch (sortBy) {
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
        );
        break;
      case "popular":
        filtered.sort((a, b) => b.createdAt - a.createdAt);
        break;
      default:
        filtered.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
    }

    return filtered;
  }, [blogs, paramsTopic, activeTopic, searchQuery, sortBy]);

  const activeTopicData = useMemo(() => {
    if (paramsTopic) {
      return topicsMap.get(paramsTopic.toLowerCase());
    }
    return topicsMap.get(activeTopic);
  }, [paramsTopic, activeTopic, topicsMap]);

  const handleTopicClick = useCallback(
    (topicId, topicTitle) => {
      if (topicId === "all") {
        router.push("/topics");
      } else {
        // Don't set activeTopic here - let the useEffect handle it after URL change
        // This prevents double state updates
        router.push(
          `/topics?tags=${encodeURIComponent(topicTitle.toLowerCase())}`
        );
      }
    },
    [router]
  );

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-background mt-20 ">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h1 className="text-3xl ms-2 font-heading text-foreground mb-6">
                Topics
              </h1>

              <div className="space-y-3 bg-gradient-to-tr from-slate-100 to-slate-100/40  backdrop-blur-md pt-4 rounded-2xl">
                <Button
                  variant={activeTopic === "all" ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto p-4 rounded-xl"
                  onClick={() => handleTopicClick("all", "")}
                >
                  <div className="flex items-center w-full">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-3 invert" />
                    <div className="flex-1">
                      <div className="font-medium">All Topics</div>
                      <div className="text-xs text-muted-foreground">
                        {blogs.length} blogs
                      </div>
                    </div>
                  </div>
                </Button>

                {topics.map((topic) => (
                  <>
                    <Button
                      key={topic._id}
                      variant={activeTopic === topic._id ? "default" : "ghost"}
                      className="w-full justify-start text-left h-auto p-4 rounded-xl cursor-pointer"
                      onClick={() => handleTopicClick(topic._id, topic.title)}
                    >
                      <div className="flex items-center w-full">
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-tr from-primary/70 to-secondary mr-3 ${activeTopic === topic._id ? "invert" : ""} `}
                        />
                        <div className="flex-1">
                          <div className="font-medium">{topic.title}</div>
                        </div>
                        {activeTopic === topic._id && (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </Button>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mt-2 flex flex-col-reverse">
              <AnimatePresence mode="wait">
                {activeTopicData && (
                  <motion.div
                    key={activeTopicData._id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-heading gradient-theme text-shadow-sm mb-2 ">
                      {activeTopicData.name || activeTopicData.title}
                    </h2>
                    <p className="text-text-light">
                      {activeTopicData.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 px-3 sm:px-0 sm:items-center justify-between mb-10 sm:mb-10">
                <div className="relative flex-1 max-w-md">
                  <Search
                    strokeWidth={2}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5"
                  />
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-full pl-10 pr-4 py-2 border border-primary/40 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition-all duration-200"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>

                <div className="flex justify-center sm:justify-start items-center gap-2">
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

                  <div className="flex border border-primary/20 bg-primary/5 rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-none px-3"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-none px-3"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blogs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${paramsTopic}-${activeTopic}-${viewMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 "
              >
                {filteredBlogs.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-12"
                  >
                    <BookOpen className="mx-auto h-12 w-12 text-muted mb-4" />
                    <h3 className="text-lg font-heading text-foreground mb-2">
                      No blogs found
                    </h3>
                    <p className="text-text-light">
                      Try adjusting your search or filter criteria.
                    </p>
                  </motion.div>
                ) : viewMode === "grid" ? (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {filteredBlogs.map((blog, index) => (
                      <motion.div
                        key={blog._id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <BlogCard blog={blog} variant="grid" />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div layout className="space-y-4">
                    {filteredBlogs.map((blog, index) => (
                      <motion.div
                        key={blog._id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        <BlogCard blog={blog} variant="list" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = memo(({ blog, variant = "grid" }) => {
  const date = useMemo(
    () => formattedDate(blog.publishedAt),
    [blog.publishedAt]
  );
  const plainText = useMemo(
    () => getPlainTextFromPortableText(blog.content),
    [blog.content]
  );
  const readTime = useMemo(() => calculateReadTime(plainText), [plainText]);
  const imageUrl = useMemo(
    () =>
      urlForImage(blog.coverImage?.asset?._ref).url() ||
      "/placeholder.svg?height=200&width=400",
    [blog.coverImage?.asset?._ref]
  );

  if (variant === "list") {
    return (
      <Link href={`/blog/${blog.slug?.current}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex gap-4 p-4 bg-white dark:bg-primary/5 rounded-xl border border-primary/10 hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <div className="w-24 h-24 relative flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="96px"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjOWQ4ZGI0Ii8+PC9zdmc+"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                <Tag className="w-3 h-3 mr-1" />
                {blog.topic.title}
              </span>
              {blog.popular && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
                  Popular
                </span>
              )}
            </div>
            <h3 className="font-heading text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {blog.title}
            </h3>
            <p className="text-text-light text-sm line-clamp-2 mb-3">
              {blog.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {readTime === 1
                  ? `${readTime} min read`
                  : `${readTime} mins read`}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${blog.slug?.current}`}>
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group bg-white dark:bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      >
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjOWQ4ZGI0Ii8+PC9zdmc+"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
              <Tag className="w-3 h-3 mr-1" />
              {blog.topic.title}
            </span>
            {blog.popular && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
                Popular
              </span>
            )}
          </div>
          <h3 className="font-heading text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-text-light text-sm line-clamp-3 mb-4">
            {blog.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {readTime === 1
                  ? `${readTime} min read`
                  : `${readTime} mins read`}
              </span>
            </div>
            <span className="text-primary font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

BlogCard.displayName = "BlogCard";

export default TopicsList;
