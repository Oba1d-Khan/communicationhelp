"use client";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

const TopicCard = ({ topic, icon, description, href, gradient }) => {
  return (
    <Link href={href}>
      <div
        className={`group relative overflow-hidden rounded-2xl px-8 py-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${gradient}`}
      >
        <div className="relative z-10">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            {icon}
          </div>

          <h3 className="mb-3 text-2xl font-heading text-white">{topic}</h3>
          <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

          <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
            <span className="text-sm font-bold">Explore {topic}</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 -translate-y-16 translate-x-16 transition-transform group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/5 translate-y-12 -translate-x-12 transition-transform group-hover:scale-110" />
      </div>
    </Link>
  );
};

export default TopicCard;
