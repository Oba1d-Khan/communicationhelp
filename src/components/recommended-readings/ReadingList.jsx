"use client";

import { useState } from "react";
import { Bookmark, BookOpen, ChevronRight, Search, Tag } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { urlForImage } from "@/sanity/utils/urlFor";

//                   src={urlForImage(book.coverImage).url()}

const ReadingList = ({ books }) => {
  // @states
  const [toggleCategory, setToggleCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Recommended Reading
          </h2>
          <p className="text-text-light text-lg">
            These carefully selected books will help you master the art of
            communication and influence. Each one has shaped my approach to
            teaching and coaching.
          </p>
        </div>
        {/* Search and filter */}
        <div className="flex flex-col  gap-4 mb-10 items-center   justify-between">
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

          <div className="flex flex-wrap gap-2 justify-center ">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="default"
              className="rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
              onClick={() => {
                setActiveCategory("all");
                setToggleCategory(false);
              }}
            >
              All
            </Button>
            {books.map((category) => (
              <Button
                key={category._id}
                variant={
                  activeCategory === category.category ? "default" : "outline"
                }
                size="default"
                className="rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => {
                  setActiveCategory(category.category);
                  setToggleCategory(true);
                }}
              >
                {category.category}
              </Button>
            ))}
          </div>
        </div>
        {/* Featured books */}
        {featuredBooks.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-heading text-foreground flex items-center">
                <Bookmark className="mr-2 h-6 w-6 text-primary" />
                Featured Recommendations
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-white dark:bg-primary/5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10 cursor-pointer hover:-translate-y-1"
                >
                  <div className="aspect-[2/3] relative overflow-hidden">
                    <Image
                      src={"/images/book.jpg"}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <p className="text-sm font-medium line-clamp-3">
                          {book.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:pb-16 relative">
                    <h4 className="font-heading text-foreground text-lg mb-1 line-clamp-1">
                      {book.title}
                    </h4>
                    <p className="text-text-light text-sm mb-3">
                      {book.author}
                    </p>

                    <div className="flex flex-wrap gap-2 pr-20">
                      {book.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {book.tags.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary/10 text-secondary">
                          +{book.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className=" absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-primary/10 hover:text-primary"
                    >
                      Learn More
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* List Books */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading text-foreground flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-primary" />
              {activeCategory === "all"
                ? "All Books"
                : books.find((c) => c.category === activeCategory)?.category ||
                  "Books"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Categorized Books */}
            {(toggleCategory ? categorizedBooks.books : flatBooks).map(
              (book) => (
                <div
                  key={book._id}
                  className="group bg-white dark:bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-primary/10 cursor-pointer hover:-translate-y-1"
                >
                  <div className="aspect-[2/3] relative overflow-hidden">
                    <Image
                      src={urlForImage(book.coverImage).url()}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <h4 className="font-heading text-foreground text-base mb-1 line-clamp-1">
                      {book.title}
                    </h4>
                    <p className="text-text-light text-xs">{book.author}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Empty state */}
        {books.map(
          (bookCategory) =>
            bookCategory.books.length === 0 && (
              <div className="text-center py-12" key={bookCategory._id}>
                <BookOpen className="mx-auto h-12 w-12 text-foreground/70 mb-4" />
                <h3 className="text-lg font-heading text-foreground/70 mb-2">
                  No books found
                </h3>
                <p className="text-text-light">
                  Try adjusting your search or filter criteria to find more
                  books.
                </p>
              </div>
            )
        )}
        {/* {books.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-foreground/70 mb-4" />
            <h3 className="text-lg font-heading text-foreground/70 mb-2">
              No books found
            </h3>
            <p className="text-text-light">
              Try adjusting your search or filter criteria to find more books.
            </p>
          </div>
        )} */}
        {/* Note about ad blockers */}
        {filteredBooks.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-text-light italic">
              Note: Book covers might only be visible with ad blockers turned
              off.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadingList;
