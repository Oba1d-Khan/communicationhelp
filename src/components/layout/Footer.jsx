import React from "react";
import { navLinks, socials } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 ">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-primary hover:text-gray-900 "
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-6 flex justify-center space-x-6">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary hover:primary "
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon && (
                <item.icon className="h-5 w-5" aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-secondary ">
          &copy; {new Date().getFullYear()} ObaidDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
