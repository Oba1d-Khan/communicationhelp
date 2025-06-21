"use client";
import { useState, useEffect } from "react";
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

// Topics dropdown items
const topicsDropdown = [
  { title: "Persuasion", href: "/topics/persuasion" },
  // { title: "Leadership", href: "/topics/leadership" },
  // { title: "Communication", href: "/topics/communication" },
  // { title: "Psychology", href: "/topics/psychology" },
  { title: "Empathy", href: "/topics/empathy" },
  { title: "Listening", href: "/topics/listening" },
];

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [topicsHovered, setTopicsHovered] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  const handleSearchExpand = () => {
    setSearchExpanded(true);
  };

  const handleSearchCollapse = () => {
    if (!searchValue) {
      setSearchExpanded(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#edf3d4]/95 backdrop-blur-md border-b border-[#c5d49a]/40 shadow-lg"
            : "bg-[#edf3d4] border-b border-[#d4d4aa]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left Section - Search + Left Nav */}
            <div className="flex items-center space-x-6">
              {/* Search - Desktop */}
              <div className="hidden lg:block relative">
                <div
                  className="relative"
                  onMouseEnter={handleSearchExpand}
                  onMouseLeave={handleSearchCollapse}
                >
                  {/* Search Button - Always visible */}
                  <button
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[#2d3319] hover:text-[#1a1f0f] hover:bg-gradient-to-r hover:from-[#d4d4aa]/30 hover:to-[#c5d49a]/40 transition-all duration-300 border border-transparent hover:border-[#c5d49a]/30 whitespace-nowrap"
                    onClick={handleSearchExpand}
                  >
                    <Search size={16} />
                    <span>Search</span>
                  </button>

                  {/* Expanded Search Input - Absolutely positioned */}
                  <AnimatePresence>
                    {searchExpanded && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-0 left-0 z-50 w-80"
                      >
                        <div className="relative">
                          <Search
                            size={16}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6b7c3a] z-10"
                          />
                          <input
                            type="search"
                            placeholder="Search articles, topics..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full pl-12 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-[#c5d49a]/50 rounded-xl text-sm text-[#2d3319] placeholder-[#6b7c3a]/70 focus:outline-none focus:ring-2 focus:ring-[#8a9b4a]/50 focus:border-[#8a9b4a] focus:bg-white transition-all duration-300 shadow-lg focus:shadow-xl"
                            autoFocus
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f9e8]/20 to-[#edf3d4]/20 rounded-xl pointer-events-none" />
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
                      className="group flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-[#2d3319] hover:text-[#1a1f0f] hover:bg-gradient-to-r hover:from-[#d4d4aa]/30 hover:to-[#c5d49a]/40 transition-all duration-300 border border-transparent hover:border-[#c5d49a]/30"
                    >
                      {item.title}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`ml-1 opacity-60 group-hover:opacity-100 transition-all duration-300 ${
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
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-[#c5d49a]/40 rounded-xl shadow-xl z-50"
                          >
                            <div className="p-2">
                              {topicsDropdown.map((topic, index) => (
                                <motion.div
                                  key={topic.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={topic.href}
                                    className="block px-4 py-3 text-sm font-medium text-[#2d3319] hover:text-[#1a1f0f] hover:bg-gradient-to-r hover:from-[#d4d4aa]/30 hover:to-[#c5d49a]/40 rounded-lg transition-all duration-200"
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

            {/* Center Logo - Absolutely centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center group">
                <div className="text-2xl font-bold text-[#2d3319] group-hover:text-[#1a1f0f] transition-all duration-300 group-hover:scale-105">
                  Bruce Lambert.
                </div>
              </Link>
            </div>

            {/* Right Section - Right Nav + CTA */}
            <div className="flex items-center space-x-1">
              {/* Right Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.right.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-[#2d3319] hover:text-[#1a1f0f] hover:bg-gradient-to-r hover:from-[#d4d4aa]/30 hover:to-[#c5d49a]/40 transition-all duration-300 border border-transparent hover:border-[#c5d49a]/30"
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
                    className={`ml-4 rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      isScrolled
                        ? "bg-[#6b7c3a] text-white hover:bg-[#5a6b31] shadow-lg hover:shadow-xl"
                        : "border-2 border-[#6b7c3a] text-[#6b7c3a] bg-transparent hover:bg-[#6b7c3a] hover:text-white shadow-sm hover:shadow-md"
                    }`}
                  >
                    Recommended Readings
                  </Button>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#2d3319] hover:bg-gradient-to-r hover:from-[#d4d4aa]/30 hover:to-[#c5d49a]/40 transition-all duration-300 border border-transparent hover:border-[#c5d49a]/30"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#edf3d4]/98 backdrop-blur-md shadow-2xl border-l border-[#c5d49a]/40"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-[#c5d49a]/30">
                <div className="text-xl font-bold text-[#2d3319]">Menu</div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-xl text-[#2d3319] hover:bg-[#d4d4aa]/40 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-6 border-b border-[#c5d49a]/30">
                <div className="relative w-full">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6b7c3a]"
                  />
                  <input
                    type="search"
                    placeholder="Search articles, topics..."
                    className="w-full pl-12 pr-4 py-3.5 bg-white/90 backdrop-blur-sm border-2 border-[#c5d49a]/50 rounded-xl text-base text-[#2d3319] placeholder-[#6b7c3a]/70 focus:outline-none focus:ring-2 focus:ring-[#8a9b4a]/50 focus:border-[#8a9b4a] focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Popular Searches */}
                <div className="mt-4">
                  <p className="text-xs font-medium text-[#6b7c3a] mb-3">
                    Popular searches:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        className="px-3 py-1.5 bg-[#d4d4aa]/60 text-[#2d3319] text-xs rounded-full hover:bg-[#c5d49a]/70 transition-all duration-200 border border-[#c5d49a]/30"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {[...navLinks.left, ...navLinks.right].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.title === "Topics" && item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-4 rounded-xl text-base font-medium text-[#2d3319] hover:bg-gradient-to-r hover:from-[#d4d4aa]/40 hover:to-[#c5d49a]/50 transition-all duration-200 border border-transparent hover:border-[#c5d49a]/30">
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
                                className={`opacity-60 transition-transform duration-200 ${mobileTopicsOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                          </div>
                          <AnimatePresence>
                            {mobileTopicsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden pl-4"
                              >
                                {topicsDropdown.map((topic) => (
                                  <Link
                                    key={topic.title}
                                    href={topic.href}
                                    onClick={closeMobileMenu}
                                    className="block p-3 text-sm text-[#2d3319]/80 hover:text-[#2d3319] hover:bg-[#d4d4aa]/30 rounded-lg transition-all duration-200"
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
                          className="group flex items-center justify-between p-4 rounded-xl text-base font-medium text-[#2d3319] hover:bg-gradient-to-r hover:from-[#d4d4aa]/40 hover:to-[#c5d49a]/50 transition-all duration-200 active:scale-95 border border-transparent hover:border-[#c5d49a]/30"
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

              {/* CTA Button */}
              <div className="p-6 border-t border-[#c5d49a]/30">
                <Link href="/recommended-readings" onClick={closeMobileMenu}>
                  <Button className="w-full py-4 bg-[#6b7c3a] text-white hover:bg-[#5a6b31] rounded-xl text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
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
