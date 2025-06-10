import ReadingList from "@/components/recommended-readings/ReadingList";
import { BOOKS_BY_CATEGORY_QUERY } from "@/sanity/utils/queries";
import { client } from "@/sanity/client";

const options = { next: { revalidate: 60 } };

export const metadata = {
  title: "Recommended Reading | Bruce Lambert",
  description:
    "Book recommendations to improve your communication skills from Bruce Lambert, Ph.D.",
};

export default async function RecommendedReadingPage() {
  const books = await client.fetch(BOOKS_BY_CATEGORY_QUERY, options);

  console.log(books);

  return (
    <main className="root-layout min-h-screen">
      <ReadingList books={books} />
    </main>
  );
}
