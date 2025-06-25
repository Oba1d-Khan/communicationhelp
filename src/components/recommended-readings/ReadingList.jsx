"use client";

import { useState } from "react";
import {
  Bookmark,
  BookOpen,
  ChevronRight,
  Search,
  Tag,
  Star,
  Filter,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { urlForImage } from "../../../sanity/utils/urlFor";
import { motion, AnimatePresence } from "framer-motion";

const ReadingList = ({ books }) => {
  // States
  const [toggleCategory, setToggleCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  console.log("books", books.length, books);
  console.log("activeCategory", activeCategory);

  const categorizedBooks = books.find(
    (book) => book.category === activeCategory
  );
  console.log("categorizedBooks", categorizedBooks);

  const allBooks = books.map((book) => book.books.map((item) => item));
  console.log("allBooks", allBooks);

  const flatBooks = allBooks.flat();
  console.log(
    "allBook.map",
    allBooks.flat().map((item) => item)
  );

  // Fixed filtering logic - preserve original logic
  const filteredBooks = books.filter(
    (book) =>
      (activeCategory === "all" || book.category === activeCategory) &&
      (searchQuery === "" ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  const featuredBooks = filteredBooks.filter((book) => book.featured);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const bookCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full blur-3xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-success/10 to-secondary2/10 rounded-full blur-2xl"
          animate={{ x: [-20, 20, -20] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced Header */}
          <motion.div
            variants={itemVariants}
            className="section-content text-center mt-8 mb-16 md:mb-14"
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Only spin this specific icon */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                Curated Collection
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Recommended{" "}
              <span className="text-primary relative inline-block">
                Readings
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-text-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              These carefully selected books will help you master the art of
              communication and influence. Each one has shaped my approach to
              teaching and coaching.
            </motion.p>
          </motion.div>

          {/* Enhanced Search and Filter */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mb-16  md:mb-12 items-center justify-center"
          >
            {/* Enhanced Filter Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={bookCardVariants}>
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  size="default"
                  className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                    activeCategory === "all"
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
                  }`}
                  onClick={() => {
                    setActiveCategory("all");
                    setToggleCategory(false);
                  }}
                >
                  {/* <Filter className="w-4 h-4 mr-2" /> */}
                  All Books
                </Button>
              </motion.div>

              {books.map((category, index) => (
                <motion.div
                  key={category._id}
                  variants={bookCardVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={
                      activeCategory === category.category
                        ? "default"
                        : "outline"
                    }
                    size="default"
                    className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                      activeCategory === category.category
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
                    }`}
                    onClick={() => {
                      setActiveCategory(category.category);
                      setToggleCategory(true);
                    }}
                  >
                    {category.category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Featured Books */}
          <AnimatePresence mode="wait">
            {featuredBooks.length > 0 && (
              <motion.div
                key="featured-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="mb-20 md:mb-24 border-2 border-black"
              >
                <motion.div
                  className="flex items-center justify-center mb-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/20 shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-heading text-foreground flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                      >
                        <Bookmark className="h-7 w-7 text-primary" />
                      </motion.div>
                      Featured Recommendations
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <Star className="h-6 w-6 text-accent fill-current" />
                      </motion.div>
                    </h3>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`featured-${activeCategory}-${searchQuery}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {featuredBooks.map((book, index) => (
                      <motion.div
                        key={`${book.id}-${activeCategory}`}
                        variants={bookCardVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="group relative bg-white/90 dark:bg-muted/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary/10 cursor-pointer"
                      >
                        {/* Featured Badge */}
                        <motion.div
                          className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent to-primary px-3 py-1 rounded-full shadow-lg"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <span className="text-xs font-bold text-white flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </span>
                        </motion.div>

                        <div className="aspect-[3/4] relative overflow-hidden rounded-t-3xl">
                          <Image
                            src="/images/book.jpg"
                            alt={book.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-sm font-medium line-clamp-3 leading-relaxed">
                                {book.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 relative">
                          <h4 className="font-heading text-foreground text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                            {book.title}
                          </h4>
                          <p className="text-text-light text-base mb-4 font-medium">
                            {book.author}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {book.tags.slice(0, 2).map((tag, tagIndex) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: index * 0.1 + tagIndex * 0.1,
                                }}
                                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-medium"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </motion.span>
                            ))}
                            {book.tags.length > 2 && (
                              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-secondary/10 text-secondary border border-secondary/20 font-medium">
                                +{book.tags.length - 2} more
                              </span>
                            )}
                          </div>

                          <motion.div
                            className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="bg-primary/10 hover:bg-primary hover:text-white rounded-full px-4 py-2 font-semibold transition-all duration-300"
                            >
                              Learn More
                              <ChevronRight className="ml-1 w-4 h-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced All Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-content"
          >
            <motion.div
              className="flex items-center justify-center mt-10 mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/20 shadow-lg">
                <h3 className="text-xl md:text-3xl font-heading gradient-theme text-shadow-sm flex items-center gap-3">
                  <BookOpen className="h-7 w-7 text-primary" />
                  {activeCategory === "all"
                    ? "All Books"
                    : books.find((c) => c.category === activeCategory)
                        ?.category || "Books"}
                </h3>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`books-${activeCategory}-${searchQuery}`}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {(toggleCategory
                  ? categorizedBooks?.books || []
                  : flatBooks
                ).map((book, index) => (
                  <motion.div
                    key={`${book._id}-${activeCategory}`}
                    variants={bookCardVariants}
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-white/90 dark:bg-muted/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden border border-primary/10 cursor-pointer"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden rounded-t-2xl">
                      <Image
                        src={
                          urlForImage(book.coverImage).url() ||
                          "/placeholder.svg"
                        }
                        alt={book.title}
                        fill
                        className="object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4">
                      <h4 className="font-heading text-foreground text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {book.title}
                      </h4>
                      <p className="text-text-light text-sm font-medium">
                        {book.author}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Empty State */}
          <AnimatePresence>
            {books.map(
              (bookCategory) =>
                bookCategory.books.length === 0 && (
                  <motion.div
                    key={bookCategory._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-20"
                  >
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="mb-6"
                    >
                      <BookOpen className="mx-auto h-16 w-16 text-primary/50" />
                    </motion.div>
                    <h3 className="text-2xl font-heading text-foreground/70 mb-4">
                      No books found
                    </h3>
                    <p className="text-text-light text-lg max-w-md mx-auto leading-relaxed">
                      Try adjusting your search or filter criteria to discover
                      more amazing books.
                    </p>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Enhanced Note */}
          <AnimatePresence>
            {filteredBooks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="section-content mt-16 text-center"
              >
                <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-primary/10 shadow-lg inline-block">
                  <p className="text-sm text-text-light italic flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Note: Book covers might only be visible with ad blockers
                    turned off.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadingList;
