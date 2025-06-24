import React from "react";
import { footerLinks, socials } from "@/constants/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 ">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-primary-darker hover:text-gray-900 "
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex justify-center space-x-6">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary-darker hover:primary-darker "
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
        <p className="mt-6 text-center text-sm text-primary-darker ">
          &copy; {new Date().getFullYear()} ObaidDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
