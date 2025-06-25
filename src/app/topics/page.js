import LoaderGradient from "@/components/shared/LoaderGradient";
import TopicsList from "@/components/topics/topics-list";
import { client } from "../../../sanity/client";
import {
  ALL_BLOGS_QUERY,
  ALL_TOPICS_QUERY,
} from "../../../sanity/utils/queries";
import { Suspense } from "react";

export const metadata = {
  title: "Topics | Bruce Lambert - Communication & Persuasion",
  description:
    "Explore articles on persuasion, listening, empathy, leadership, and communication by Bruce Lambert, Ph.D.",
};

const options = { next: { revalidate: 60 } };
export default async function TopicsPage() {
  const blogs = await client.fetch(ALL_BLOGS_QUERY, options);

  // fetch topics
  const topics = await client.fetch(ALL_TOPICS_QUERY, options);
  return (
    <main className="root-layout ">
      <section>
        <Suspense fallback={<LoaderGradient />}>
          <TopicsList blogs={blogs} topics={topics} />
        </Suspense>
      </section>
    </main>
  );
}
