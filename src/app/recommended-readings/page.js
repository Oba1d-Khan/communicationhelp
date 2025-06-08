import ReadingList from "@/components/recommended-readings/ReadingList";

export const metadata = {
  title: "Recommended Reading | Bruce Lambert",
  description:
    "Book recommendations to improve your communication skills from Bruce Lambert, Ph.D.",
};

export default function RecommendedReadingPage() {
  return (
    <main className="root-layout min-h-screen">
      <ReadingList />
    </main>
  );
}
