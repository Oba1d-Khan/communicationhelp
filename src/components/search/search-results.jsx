"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  Grid,
  List,
  Clock,
  TrendingUp,
  Filter,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import { client } from "../../../sanity/client";
import {
  BLOG_SEARCH_QUERY,
  BLOG_SUGGESTIONS_QUERY,
} from "../../../sanity/utils/queries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const popularSearches = [
  "Persuasion",
  "Leadership",
  "Communication",
  "Psychology",
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "relevance", label: "Most Relevant" },
];

const SearchResults = ({ initialBlogs, initialQuery }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [recentSearches, setRecentSearches] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  const searchTimeoutRef = useRef(null);
  const currentQuery = searchParams.get("q") || "";

  // Load recent searches on mount
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading recent searches:", e);
      }
    }
  }, []);

  // Initialize state with props and current query
  useEffect(() => {
    if (currentQuery) {
      setSearchValue(currentQuery);
      setBlogs(initialBlogs || []);
    } else {
      setSearchValue("");
      setBlogs([]);
    }
  }, []); // Only run on mount

  // Handle URL query changes - this is the main search handler
  useEffect(() => {
    const performSearch = async () => {
      if (!currentQuery.trim()) {
        setBlogs([]);
        setSearchValue("");
        return;
      }

      // Update search input to match URL
      setSearchValue(currentQuery);
      setIsLoading(true);

      try {
        console.log("Client-side searching for:", currentQuery);
        const results = await client.fetch(BLOG_SEARCH_QUERY, {
          query: currentQuery,
        });
        console.log("Client-side search results:", results?.length || 0);
        setBlogs(results || []);
      } catch (error) {
        console.error("Search error:", error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [currentQuery]); // Only depend on currentQuery

  // Debounced search suggestions
  const fetchSuggestions = useCallback(async (query) => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      setIsLoadingSuggestions(false);
      return;
    }

    setIsLoadingSuggestions(true);

    try {
      const results = await client.fetch(BLOG_SUGGESTIONS_QUERY, { query });
      setSuggestions(results || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoadingSuggestions(false);
    }
  }, []);

  // Debounced search effect for suggestions
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      if (showSuggestions) {
        fetchSuggestions(searchValue);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchValue, showSuggestions, fetchSuggestions]);

  // Sort blogs based on selected option
  const sortedBlogs = useMemo(() => {
    if (!blogs || blogs.length === 0) return [];

    const sorted = [...blogs];
    switch (sortBy) {
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
        );
      case "newest":
        return sorted.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
      case "relevance":
      default:
        return sorted;
    }
  }, [blogs, sortBy]);

  // Save to recent searches
  const saveToRecentSearches = useCallback((query) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    const saved = localStorage.getItem("recentSearches");
    let recent = [];
    if (saved) {
      try {
        recent = JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing recent searches:", e);
      }
    }

    const filtered = recent.filter(
      (item) => item.toLowerCase() !== trimmedQuery.toLowerCase()
    );
    const updated = [trimmedQuery, ...filtered].slice(0, 4);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
    setRecentSearches(updated);
  }, []);

  // Handle search - this updates the URL which triggers the search
  const handleSearch = useCallback(
    (query) => {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) return;

      console.log("Handling search for:", trimmedQuery);

      // Save to recent searches
      saveToRecentSearches(trimmedQuery);

      // Hide suggestions
      setShowSuggestions(false);

      // Update URL - this will trigger the useEffect above
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    },
    [router, saveToRecentSearches]
  );

  const handleRecentSearchClick = useCallback(
    (query) => {
      setSearchValue(query);
      handleSearch(query);
    },
    [handleSearch]
  );

  const handlePopularSearchClick = useCallback(
    (query) => {
      setSearchValue(query);
      handleSearch(query);
    },
    [handleSearch]
  );

  const handleSuggestionClick = useCallback(
    (suggestion) => {
      if (suggestion.slug?.current) {
        setShowSuggestions(false);
        router.push(`/blog/${suggestion.slug.current}`);
      }
    },
    [router]
  );

  // Handle form submission
  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (searchValue.trim()) {
        handleSearch(searchValue);
      }
    },
    [searchValue, handleSearch]
  );

  return (
    <div className="min-h-screen bg-background mt-20">
      <div className="container py-8 md:py-12 lg:py-16">
        {/* Professional Search Header */}
        <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
          {/* Title Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4 leading-tight">
              Explore Blog Insights
            </h1>
            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
              Discover insights on communication, persuasion, leadership, and
              personal development
            </p>
          </div>

          {/* Professional Search Bar */}
          <div className="relative mb-8 md:w-[65%] mx-auto">
            <form onSubmit={handleFormSubmit} className="relative">
              <div className="relative bg-white border border-primary/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-xl">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-14 h-14 text-text-light">
                    <Search size={20} />
                  </div>
                  <input
                    type="search"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 200)
                    }
                    className="flex-1 py-4 pr-4 text-base bg-transparent border-none outline-none placeholder:text-text-light text-foreground"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="mr-2 px-6 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Search</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </form>

            {/* Professional Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-primary/20 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto"
                >
                  <div className="p-4">
                    {/* Recent Searches */}
                    {!searchValue && recentSearches.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-text-light mb-3">
                          <Clock size={16} />
                          Recent Searches
                        </div>
                        <div className="space-y-1">
                          {recentSearches.map((query, index) => (
                            <button
                              key={index}
                              onClick={() => handleRecentSearchClick(query)}
                              className="w-full text-left px-3 py-2.5 text-foreground hover:bg-primary/5 rounded-lg transition-all duration-150 flex items-center gap-3"
                            >
                              <Clock size={16} className="text-text-light" />
                              <span>{query}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Searches */}
                    {!searchValue && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-text-light mb-3">
                          <TrendingUp size={16} />
                          Popular Topics
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {popularSearches.map((term) => (
                            <button
                              key={term}
                              onClick={() => handlePopularSearchClick(term)}
                              className="px-3 py-2 bg-primary/5 text-foreground rounded-lg hover:bg-primary/10 transition-all duration-150 text-center font-medium border border-primary/10"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Search Suggestions */}
                    {searchValue && (
                      <div>
                        <div className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-text-light mb-3">
                          <Search size={16} />
                          Article Suggestions
                        </div>
                        {isLoadingSuggestions ? (
                          <div className="px-3 py-4 text-center text-text-light">
                            <div className="inline-flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                              Searching...
                            </div>
                          </div>
                        ) : suggestions.length > 0 ? (
                          <div className="space-y-1">
                            {suggestions.map((suggestion) => (
                              <button
                                key={suggestion._id}
                                onClick={() =>
                                  handleSuggestionClick(suggestion)
                                }
                                className="w-full text-left px-3 py-3 text-foreground hover:bg-primary/5 rounded-lg transition-all duration-150 border border-transparent hover:border-primary/10"
                              >
                                <div className="font-medium text-sm leading-relaxed line-clamp-2">
                                  {suggestion.title}
                                </div>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <button
                            onClick={() => handleSearch(searchValue)}
                            className="w-full text-left px-3 py-3 text-foreground hover:bg-primary/5 rounded-lg transition-all duration-150 flex items-center gap-3"
                          >
                            <Search size={16} className="text-text-light" />
                            <span>Search for "{searchValue}"</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results Section */}
        {currentQuery && (
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-center justify-between mb-8 lg:mb-12">
              <div>
                <h2 className="text-xl lg:text-2xl font-heading text-foreground mb-2">
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      Searching...
                    </div>
                  ) : (
                    <>
                      {sortedBlogs.length} result
                      {sortedBlogs.length !== 1 ? "s" : ""} for "
                      <span className="text-primary font-semibold">
                        {currentQuery}
                      </span>
                      "
                    </>
                  )}
                </h2>
                {!isLoading && sortedBlogs.length > 0 && (
                  <p className="text-text-light">
                    Showing {sortedBlogs.length} article
                    {sortedBlogs.length !== 1 ? "s" : ""} matching your search
                  </p>
                )}
              </div>

              {!isLoading && sortedBlogs.length > 0 && (
                <div className="flex items-center  gap-3 mt-5 md:mt-0">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px] border-primary/20 rounded-lg bg-white hover:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-150">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-primary/20 bg-white shadow-lg">
                      {sortOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="rounded-md hover:bg-primary/5 focus:bg-primary/5 transition-colors duration-100"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex border border-primary/20 bg-white rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-none px-3 py-2"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-none px-3 py-2"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
                    >
                      <div className="aspect-[16/9] bg-gray-200" />
                      <div className="p-6 space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4" />
                        <div className="h-6 bg-gray-200 rounded" />
                        <div className="h-6 bg-gray-200 rounded w-4/5" />
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded" />
                          <div className="h-4 bg-gray-200 rounded" />
                          <div className="h-4 bg-gray-200 rounded w-3/4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : sortedBlogs.length > 0 ? (
                <motion.div
                  key={`results-${currentQuery}-${sortedBlogs.length}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-6"
                  }
                >
                  {sortedBlogs.map((blog, index) => (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <BlogCard blog={blog} variant={viewMode} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={`no-results-${currentQuery}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16 lg:py-20"
                >
                  <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 lg:p-12 border border-primary/10 shadow-sm">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/5 rounded-full flex items-center justify-center">
                      <Search className="w-8 h-8 text-primary/60" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-heading text-foreground mb-3">
                      No Results Found
                    </h3>
                    <p className="text-text-light mb-8 leading-relaxed">
                      We couldn't find any articles matching "{currentQuery}".
                      Try refining your search or explore these popular topics:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => handlePopularSearchClick(term)}
                          className="px-4 py-2.5 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-medium border border-primary/10"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
