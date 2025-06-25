import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage as urlFor } from "../../../sanity/utils/urlFor";

// Estimate blog image width
const MAX_IMAGE_WIDTH = 800;

const components = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(MAX_IMAGE_WIDTH).url();
      return (
        <div className="my-8 animate-slideDownSoft rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog Image"}
            width={MAX_IMAGE_WIDTH}
            height={500}
            className="rounded-xl object-cover w-full max-w-3xl mx-auto"
          />
        </div>
      );
    },
    videoEmbed: ({ value }) => {
      const id = new URL(value.url).searchParams.get("v");
      return (
        <div className="my-8 aspect-video rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    },
    // Optional: Code block support
    code: ({ value }) => (
      <pre className="bg-[#1e1e1e] text-white p-4 rounded-lg overflow-x-auto my-6 text-sm leading-relaxed">
        <code>{value.code}</code>
      </pre>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-foreground/90">{children}</em>
    ),
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-secondary transition-colors"
      >
        {children}
      </Link>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mt-10 mb-4 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-heading font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed text-text-light mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-text-light bg-primary/5 rounded-md my-6 py-3">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-text-light my-4 pl-4 space-y-2">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },

  unknown: (props) => {
    console.warn("Unknown block:", props);
    return null;
  },
};

export default function PortableRenderer({ content }) {
  return (
    <div className="animate-fadeIn">
      <PortableText value={content} components={components} />
    </div>
  );
}
