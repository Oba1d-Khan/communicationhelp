"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contents",
    href: "/contents",
  },
  {
    title: "Topics",
    href: "/topics",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm text-white">
              How Communication Works
            </span>
            <span className="text-xs text-neutral-400">
              Master the social world
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-white hover:text-gray-300 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Button
            variant="outline"
            className="rounded-full border-white text-black hover:bg-white hover:text-black transition"
          >
            Recommended Readings
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800 text-white px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block text-sm font-medium tracking-widest uppercase hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Button
            variant="outline"
            className="w-full rounded-full border-white text-black hover:bg-white hover:text-black transition"
          >
            Recommended Readings
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
