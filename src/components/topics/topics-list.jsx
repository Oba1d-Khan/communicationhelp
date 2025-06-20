"use client";

import { useState, useMemo, act } from "react";
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

const TopicsList = ({ blogs, topics }) => {
  const [activeTopic, setActiveTopic] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, popular

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
  ];
  // console.log("activeTopic", activeTopic);
  const filteredBlogs = useMemo(() => {
    const filtered = blogs.filter((blog) => {
      const matchesTopic =
        activeTopic === "all" || blog.topic._id === activeTopic;
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTopic && matchesSearch;
    });

    // Sort articles
    switch (sortBy) {
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
        );
        break;
      case "popular":
        filtered.sort((a, b) => b.createdAt - a.createdAt);
        break;
      default: // newest
        filtered.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
    }

    return filtered;
  }, [activeTopic, searchQuery, sortBy]);

  const activeTopicData = topics.find((topic) => topic._id === activeTopic);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h1 className="text-2xl md:text-3xl font-heading text-foreground mb-6">
                Topics
              </h1>

              {/* Categories */}
              <div className="space-y-3">
                <Button
                  variant={activeTopic === "all" ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto p-4 rounded-xl"
                  onClick={() => setActiveTopic("all")}
                >
                  <div className="flex items-center w-full">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">All Topics</div>
                      <div className="text-xs text-muted-foreground">
                        {blogs.length} blogs
                      </div>
                    </div>
                  </div>
                </Button>

                {topics.map((topic) => (
                  <Button
                    key={topic._id}
                    variant={activeTopic === topic._id ? "default" : "ghost"}
                    className="w-full justify-start text-left h-auto p-4 rounded-xl cursor-pointer"
                    onClick={() => setActiveTopic(topic._id)}
                  >
                    <div className="flex items-center w-full">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-3`}
                      />
                      <div className="flex-1">
                        <div className="font-medium">{topic.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {/* {topic.count} articles */}
                        </div>
                      </div>
                      {activeTopic === topic._id && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              {activeTopicData && (
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
                    {activeTopicData.name}
                  </h2>
                  <p className="text-text-light">
                    {activeTopicData.description}
                  </p>
                </div>
              )}

              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search
                    strokeWidth={2}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5"
                  />
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-full pl-10 pr-4 py-2 border border-primary/20 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2">
                  {/* Sort */}
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

                  {/* View Mode */}
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
            <div className="space-y-6">
              {blogs.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-muted mb-4" />
                  <h3 className="text-lg font-heading text-foreground mb-2">
                    No blogs found
                  </h3>
                  <p className="text-text-light">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredBlogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} variant="grid" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBlogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} variant="list" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, variant = "grid" }) => {
  const date = formattedDate(blog.publishedAt);
  const plainText = getPlainTextFromPortableText(blog.content);
  const readTime = calculateReadTime(plainText);
  if (variant === "list") {
    return (
      <Link href={`/blog/${blog.slug?.current}`}>
        <div className="group flex gap-4 p-4 bg-white dark:bg-primary/5 rounded-xl border border-primary/10 hover:shadow-md transition-all duration-300 cursor-pointer my-3">
          <div className="w-24 h-24 relative flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={
                urlForImage(blog.coverImage?.asset?._ref).url() ||
                "/images/blog-img.jpg"
              }
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        </div>
      </Link>
    );
  }

  return (
    // GRID
    <Link href={`/blog/${blog.slug?.current}`}>
      <div className="group bg-white dark:bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={
              urlForImage(blog.coverImage?.asset?._ref).url() ||
              "/images/blog-img.jpg"
            }
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
      </div>
    </Link>
  );
};

export default TopicsList;
