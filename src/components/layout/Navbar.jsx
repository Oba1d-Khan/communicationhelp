"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Topics",
    href: "/topics",
  },
  {
    title: "Contents",
    href: "/contents",
  },

  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent  backdrop-filter backdrop-blur-lg  backdrop-brightness-25 sticky top-0 z-50 px-4">
      <div className="container mx-auto px-4 py-4 pt-5 flex items-center justify-between">
        <div className="flex aic gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="h-6 w-auto" />
            {/* <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm text-white">
              How Communication Works
            </span>
            <span className="text-xs text-neutral-400">
              Master the social world
            </span>
          </div> */}
          </Link>

          {/* Search bar */}

          <div className="hidden lg:flex items-center md:space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring cursor-pointer"
                >
                  <Search size={20} strokeWidth="2.2" />
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 px-3 py-2 pl-10 text-sm rounded-full sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) =>
            link.title === "Topics" ? (
              <DropdownMenu
                key={link.title}
                className="focus:outline-none focus:ring-0"
              >
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-widest uppercase text-white hover:text-gray-300 transition-colors ">
                  {link.title}
                  <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="animate-slideDown bg-neutral-900 mt-2 ">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/topics/communication"
                      className="text-white hover:bg-neutral-700 text-sm font-medium tracking-widest uppercase"
                    >
                      Persuation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/topics/psychology"
                      className="text-white hover:bg-neutral-700 text-sm font-medium tracking-widest uppercase"
                    >
                      Listening
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/topics/social-skills"
                      className="text-white hover:bg-neutral-700 text-sm font-medium tracking-widest uppercase"
                    >
                      Empathy
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-white hover:text-gray-300 transition-colors"
              >
                {link.title}
              </Link>
            )
          )}

          <span className="hidden md:block w-px h-6 bg-gray-400 "></span>

          <Button
            variant="outline"
            className="cursor-pointer rounded-full border-white text-black hover:bg-white hover:text-black transition"
          >
            Recommended Readings
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X size={26} color="#ffffff" />
          ) : (
            <Menu size={26} color="#ffffff" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="fixed  left-0 w-full h-screen z-40 bg-neutral-900 lg:hidden"
          >
            {/* Search bar */}
            <div className="w-full flex justify-center py-10 px-4">
              <div className="relative w-[80vw] max-w-md mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    title="Search"
                    className="p-2 focus:outline-none focus:ring cursor-pointer"
                  >
                    <Search size={20} strokeWidth="2.2" />
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-full px-3 py-2 pl-13 text-base rounded-full focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
                />
              </div>
            </div>

            {/* Nav links */}
            <div className="px-12 text-center space-y-8">
              {navLinks.map((link) =>
                link.title === "Topics" ? (
                  <Accordion
                    type="single"
                    collapsible
                    key={link.title}
                    className="text-white w-full "
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-base font-medium tracking-widest uppercase text-white hover:text-blue-400 transition-colors px-2 py-2 rounded-md ">
                        Topics
                      </AccordionTrigger>

                      {/* Group all links in one content block for tighter spacing & uniform bg */}
                      <AccordionContent className="animate-slideDown bg-neutral-800 rounded-lg text-base space-y-1 py-2 ">
                        <Link
                          href="#"
                          className="block px-4 py-2 text-white hover:bg-neutral-600 text-base font-medium tracking-widest uppercase rounded transition"
                          onClick={() => setIsOpen(false)}
                        >
                          Persuasion
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-white hover:bg-neutral-600 text-base font-medium tracking-widest uppercase rounded transition"
                          onClick={() => setIsOpen(false)}
                        >
                          Listening
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-white hover:bg-neutral-600 text-base font-medium tracking-widest uppercase rounded transition"
                          onClick={() => setIsOpen(false)}
                        >
                          Empathy
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block text-base font-medium tracking-widest uppercase text-white hover:text-blue-400 transition-colors px-2 py-2 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                )
              )}

              <Button
                variant="outline"
                className="w-[80vw]  max-w-md  mt-5 rounded-full border-white text-base text-black hover:bg-white hover:text-black transition"
              >
                Recommended Readings
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
