import SearchResults from "@/components/search/search-results";
import { client } from "../../../sanity/client";
import { BLOG_SEARCH_QUERY } from "../../../sanity/utils/queries";

export const metadata = {
  title: "Search Results | Bruce Lambert",
  description:
    "Search results for articles on communication, persuasion, and leadership.",
};

const options = { next: { revalidate: 60 } };

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || "";

  let blogs = [];
  if (query.trim()) {
    try {
      //   console.log("Server-side search for:", query);
      blogs = await client.fetch(BLOG_SEARCH_QUERY, { query }, options);
      //   console.log("Server-side results:", blogs?.length || 0);
    } catch (error) {
      console.error("Server-side search error:", error);
      blogs = [];
    }
  }

  return (
    <main className="root-layout">
      <SearchResults initialBlogs={blogs} initialQuery={query} />
    </main>
  );
}
