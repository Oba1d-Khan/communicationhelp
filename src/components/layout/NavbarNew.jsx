"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/constants";

const popularSearches = [
  "Persuasion",
  "Leadership",
  "Communication",
  "Psychology",
];

const topicsDropdown = [
  { title: "Persuasion", href: "persuasion" },
  { title: "Empathy", href: "empathy" },
  { title: "Listening", href: "listening" },
];

// Optimized animation variants
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.03,
    },
  },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const searchVariants = {
  hidden: { opacity: 0, scale: 0.95, x: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: -10,
    transition: { duration: 0.15 },
  },
};

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [topicsHovered, setTopicsHovered] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Memoized handlers for better performance
  const closeMobileMenu = useCallback(() => setIsOpen(false), []);
  const handleSearchExpand = useCallback(() => setSearchExpanded(true), []);
  const handleSearchCollapse = useCallback(() => {
    if (!searchValue) setSearchExpanded(false);
  }, [searchValue]);

  // Memoized navbar classes
  const navbarClasses = useMemo(
    () =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg"
          : "bg-primary/10 border-b border-primary/10"
      }`,
    [isScrolled]
  );

  // Memoized button classes
  const ctaButtonClasses = useMemo(
    () =>
      `ml-4 rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
        isScrolled
          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
          : "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md"
      }`,
    [isScrolled]
  );

  return (
    <>
      <header className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 lg:h-18">
            {/* Left Section - Search + Left Nav */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Desktop Search */}
              <div className="hidden lg:block relative">
                <div
                  className="relative"
                  onMouseEnter={handleSearchExpand}
                  onMouseLeave={handleSearchCollapse}
                >
                  <button
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-secondary/20 hover:to-primary/10 transition-all duration-200 border border-transparent hover:border-primary/20 whitespace-nowrap"
                    onClick={handleSearchExpand}
                  >
                    <Search size={16} />
                    <span>Search</span>
                  </button>

                  <AnimatePresence>
                    {searchExpanded && (
                      <motion.div
                        variants={searchVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-0 left-0 z-50 w-80"
                      >
                        <div className="relative">
                          <Search
                            size={16}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light z-10"
                          />
                          <input
                            type="search"
                            placeholder="Search articles, topics..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full pl-12 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-primary/30 rounded-xl text-sm text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-200 shadow-lg focus:shadow-xl"
                            autoFocus
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Left Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.left.map((item) => (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() =>
                      item.title === "Topics" && setTopicsHovered(true)
                    }
                    onMouseLeave={() =>
                      item.title === "Topics" && setTopicsHovered(false)
                    }
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-secondary/20 hover:to-primary/10 transition-all duration-200 border border-transparent hover:border-primary/20"
                    >
                      {item.title}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`ml-1 opacity-60 group-hover:opacity-100 transition-all duration-200 ${
                            topicsHovered && item.title === "Topics"
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Topics Dropdown */}
                    {item.title === "Topics" && item.hasDropdown && (
                      <AnimatePresence>
                        {topicsHovered && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute top-full left-0 mt-2 w-56 bg-slate-100/90 backdrop-blur-lg border border-primary/20 rounded-xl shadow-xl z-50"
                          >
                            <div className="p-2">
                              {topicsDropdown.map((topic, index) => (
                                <motion.div
                                  key={topic.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.03 }}
                                >
                                  <Link
                                    href={`/topics/?tags=${encodeURIComponent(topic.href.toLowerCase())}`}
                                    className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-secondary/20 hover:to-primary/10 rounded-lg transition-all duration-150"
                                  >
                                    {topic.title}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center group">
                <div className="text-lg lg:text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-200 group-hover:scale-105">
                  Blog.
                </div>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-1">
              {/* Right Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.right.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-secondary/20 hover:to-primary/10 transition-all duration-200 border border-transparent hover:border-primary/20"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </Link>
                ))}

                <Link href="/recommended-readings">
                  <Button
                    variant={isScrolled ? "default" : "outline"}
                    className={ctaButtonClasses}
                  >
                    Recommended Readings
                  </Button>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-gradient-to-r hover:from-secondary/20 hover:to-primary/10 transition-all duration-200 border border-transparent hover:border-primary/20"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-background/98 backdrop-blur-md shadow-2xl border-l border-primary/20"
            >
              <div className="flex items-center justify-between p-6 border-b border-primary/20 h-16"></div>

              {/* Mobile Search */}
              <div className="p-6 border-b border-primary/20">
                <div className="relative w-full">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light"
                  />
                  <input
                    type="search"
                    placeholder="Search articles, topics..."
                    className="w-full pl-12 pr-4 py-3.5 bg-white/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl text-base text-foreground placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-xs font-medium text-text-light mb-3">
                    Popular searches:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        className="px-3 py-1.5 bg-secondary/40 text-foreground text-xs rounded-full hover:bg-secondary/60 transition-all duration-150 border border-primary/20"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {[...navLinks.left, ...navLinks.right].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.title === "Topics" && item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-4 rounded-xl text-base font-medium text-foreground hover:bg-gradient-to-r hover:from-secondary/30 hover:to-primary/15 transition-all duration-150 border border-transparent hover:border-primary/20">
                            <Link
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="flex-1"
                            >
                              {item.title}
                            </Link>
                            <button
                              onClick={() =>
                                setMobileTopicsOpen(!mobileTopicsOpen)
                              }
                              className="p-1 ml-2"
                            >
                              <ChevronDown
                                size={16}
                                className={`opacity-60 transition-transform duration-150 ${
                                  mobileTopicsOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>
                          <AnimatePresence>
                            {mobileTopicsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4"
                              >
                                {topicsDropdown.map((topic) => (
                                  <Link
                                    key={topic.title}
                                    href={`/topics/?tags=${encodeURIComponent(topic.href.toLowerCase())}`}
                                    onClick={closeMobileMenu}
                                    className="block p-3 text-sm text-text-light hover:text-foreground hover:bg-secondary/20 rounded-lg transition-all duration-150"
                                  >
                                    {topic.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="group flex items-center justify-between p-4 rounded-xl text-base font-medium text-foreground hover:bg-gradient-to-r hover:from-secondary/30 hover:to-primary/15 transition-all duration-150 active:scale-95 border border-transparent hover:border-primary/20"
                        >
                          {item.title}
                          {item.hasDropdown && (
                            <ChevronDown
                              size={16}
                              className="opacity-60 group-hover:opacity-100"
                            />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-primary/20">
                <Link href="/recommended-readings" onClick={closeMobileMenu}>
                  <Button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-medium shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95">
                    Recommended Readings
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;
