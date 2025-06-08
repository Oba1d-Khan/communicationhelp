import TopicCard from "@/components/topics/topic-card";
import { topics } from "@/constants/constants";

export default function TopicsPage() {
  return (
    <div className="root-layout ">
      {/* Hero Section */}
      <section className="relative pt-10 md:pt-6 md:pb-5 overflow-hidden">
        <div className=" relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-6">
              Explore Topics
            </h1>
            <p className="text-lg text-text-light leading-relaxed mx-3">
              Dive deep into the essential skills of human connection. Choose a
              topic below to discover insights, techniques, and real-world
              applications that will transform your communication.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="pb-20 md:pb-32">
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
      </section>
    </div>
  );
}
