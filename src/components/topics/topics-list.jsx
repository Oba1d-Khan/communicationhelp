"use client";

import { useState, useMemo } from "react";
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

const TopicsList = () => {
  const [activeCategory, setActiveCategory] = useState("persuasion");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, popular

  const categories = [
    {
      id: "persuasion",
      name: "Persuasion",
      description: "Learn the art and science of ethical influence",
      count: 12,
      color: "bg-red-500",
    },
    {
      id: "listening",
      name: "Listening",
      description: "Master the skill of active and empathetic listening",
      count: 8,
      color: "bg-blue-500",
    },
    {
      id: "empathy",
      name: "Empathy",
      description: "Develop deeper emotional connections",
      count: 6,
      color: "bg-green-500",
    },
    {
      id: "leadership",
      name: "Leadership",
      description: "Build trust and inspire others to follow",
      count: 10,
      color: "bg-purple-500",
    },
    {
      id: "communication",
      name: "Communication",
      description: "Enhance your verbal and nonverbal communication",
      count: 15,
      color: "bg-orange-500",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "The Theory of Reasoned Action Explained: A Simple Guide",
      excerpt:
        "Why do we intend to do things but often don't follow through? Learn how the Theory of Reasoned Action explains this puzzle—and how attitudes, social norms, and perceived obstacles shape your intentions and actions.",
      category: "persuasion",
      image: "/images/blog-img.jpg",
      readTime: "8 min read",
      date: "May 24, 2024",
      author: "Bruce Lambert",
      slug: "theory-of-reasoned-action",
      popular: true,
    },
    {
      id: 2,
      title: "How to Persuade People Effectively Using the Power of Stories",
      excerpt:
        "Our own behavior is killing us. If you look at the top 10 causes of death, you'll see at the top diseases like heart disease, cancer, and stroke, but it's actually our own behavior, smoking, drinking, not exercising, having a poor diet, which lead to the problems.",
      category: "persuasion",
      image: "/images/blog-img.jpg",
      readTime: "12 min read",
      date: "May 20, 2024",
      author: "Bruce Lambert",
      slug: "persuade-with-stories",
      popular: false,
    },
    {
      id: 3,
      title:
        "3 Persuasion Methods: Compliance, Identification, and Internalization",
      excerpt:
        "I'm going to teach you about three methods of persuasion, when to use each method, and which method is most likely to produce behavior change that really last.",
      category: "persuasion",
      image: "/images/blog-img.jpg",
      readTime: "10 min read",
      date: "May 18, 2024",
      author: "Bruce Lambert",
      slug: "three-persuasion-methods",
      popular: true,
    },
    {
      id: 4,
      title: "Ultimate Guide to Theory of Reasoned Action and Planned Behavior",
      excerpt:
        "I'm going to give you the ultimate guide to reasoned action theory, which is the world's foremost theory of persuasion and behavior change.",
      category: "persuasion",
      image: "/images/blog-img.jpg",
      readTime: "15 min read",
      date: "May 15, 2024",
      author: "Bruce Lambert",
      slug: "ultimate-guide-reasoned-action",
      popular: true,
    },
    {
      id: 5,
      title: "The Art of Active Listening: Beyond Just Hearing",
      excerpt:
        "Discover the difference between hearing and truly listening. Learn practical techniques to become a better listener and build stronger relationships.",
      category: "listening",
      image: "/images/blog-img.jpg",
      readTime: "7 min read",
      date: "May 22, 2024",
      author: "Bruce Lambert",
      slug: "art-of-active-listening",
      popular: false,
    },
    {
      id: 6,
      title: "Building Empathy: Understanding Others' Perspectives",
      excerpt:
        "Empathy is more than just sympathy. Learn how to truly understand and connect with others on a deeper emotional level.",
      category: "empathy",
      image: "/images/blog-img.jpg",
      readTime: "9 min read",
      date: "May 19, 2024",
      author: "Bruce Lambert",
      slug: "building-empathy",
      popular: false,
    },
  ];

  const filteredArticles = useMemo(() => {
    const filtered = articles.filter((article) => {
      const matchesCategory =
        activeCategory === "all" || article.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort articles
    switch (sortBy) {
      case "oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "popular":
        filtered.sort((a, b) => b.popular - a.popular);
        break;
      default: // newest
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  const activeTopicData = categories.find((cat) => cat.id === activeCategory);

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
                  variant={activeCategory === "all" ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto p-4 rounded-xl"
                  onClick={() => setActiveCategory("all")}
                >
                  <div className="flex items-center w-full">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">All Topics</div>
                      <div className="text-xs text-muted-foreground">
                        {articles.length} articles
                      </div>
                    </div>
                  </div>
                </Button>

                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      activeCategory === category.id ? "default" : "ghost"
                    }
                    className="w-full justify-start text-left h-auto p-4 rounded-xl cursor-pointer"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="flex items-center w-full">
                      <div
                        className={`w-3 h-3 rounded-full ${category.color} mr-3`}
                      />
                      <div className="flex-1">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {category.count} articles
                        </div>
                      </div>
                      {activeCategory === category.id && (
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
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 border border-primary/20 rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-primary/20 rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-primary/20 rounded-lg overflow-hidden">
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

            {/* Articles */}
            <div className="space-y-6">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-muted mb-4" />
                  <h3 className="text-lg font-heading text-foreground mb-2">
                    No articles found
                  </h3>
                  <p className="text-text-light">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="grid"
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="list"
                    />
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

const ArticleCard = ({ article, variant = "grid" }) => {
  if (variant === "list") {
    return (
      <Link href={`/blog/${article.slug}`}>
        <div className="group flex gap-4 p-4 bg-white dark:bg-primary/5 rounded-xl border border-primary/10 hover:shadow-md transition-all duration-300 cursor-pointer">
          <div className="w-24 h-24 relative flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                <Tag className="w-3 h-3 mr-1" />
                {article.category}
              </span>
              {article.popular && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
                  Popular
                </span>
              )}
            </div>
            <h3 className="font-heading text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-text-light text-sm line-clamp-2 mb-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="group bg-white dark:bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
              <Tag className="w-3 h-3 mr-1" />
              {article.category}
            </span>
            {article.popular && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
                Popular
              </span>
            )}
          </div>
          <h3 className="font-heading text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-text-light text-sm line-clamp-3 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {article.readTime}
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
