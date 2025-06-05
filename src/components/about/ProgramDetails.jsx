import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Attract people with your ability to make them feel seen, heard, and understood",
  "Know exactly how to respond when someone shares something personal",
  "Build the trust that makes you a leader people actually want to follow",
  "Eliminate awkward silences",
];

export default function ProgrammDetails() {
  return (
    <section className="w-full  py-16 px-6 sm:px-10 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Listening to Lead: Become the Person People Trust
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join the waitlist for{" "}
          <span className="font-semibold">The Listening Leap</span> and get your
          completely free guide with tools to change your next
          conversation—starting immediately.
        </p>

        <Button className="mt-6 text-white text-base px-8  pt-2 cursor-pointer">
          Join the Waitlist
        </Button>

        <ul className="mt-10 space-y-5 text-center flex flex-col jcc aic">
          {benefits.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-base text-muted-foreground"
            >
              <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
