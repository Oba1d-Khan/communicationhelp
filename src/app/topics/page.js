import TopicCard from "@/components/topics/topic-card";
import TopicsList from "@/components/topics/topics-list";
import Topics from "@/components/topics/topics-list";
import { topics } from "@/constants/constants";

export const metadata = {
  title: "Topics | Bruce Lambert - Communication & Persuasion",
  description:
    "Explore articles on persuasion, listening, empathy, leadership, and communication by Bruce Lambert, Ph.D.",
};

export default function TopicsPage() {
  return (
    <main className="root-layout ">
      {/* Hero Section */}
      {/* <section className="relative pt-10 md:pt-6 md:pb-2 overflow-hidden">
        <div className=" relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className=" text-5xl font-heading text-foreground mb-4">
              Explore Topics
            </h1>
            <p className="text-lg text-text-light leading-relaxed mx-4">
              Dive deep into the essential skills of human connection. Choose a
              topic below to discover insights, techniques, and real-world
              applications that will transform your communication.
            </p>
          </div>
        </div>
      </section> */}

      {/* Topics Grid */}
      {/* <section className="pb-20 md:pb-32">
        <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic.topic}
                icon={topic.icon}
                description={topic.description}
                href={topic.href}
                gradient={topic.gradient}
              />
            ))}
          </div>
        </div>
      </section> */}

      <section>
        <TopicsList />
      </section>
    </main>
  );
}
