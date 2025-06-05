"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FreeEbookForm() {
  return (
    <section className="w-full bg-white dark:bg-background py-16 px-2 sm:px-10 md:px-20 border-t">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Free E-Book:{" "}
          <span className="text-primary">#1 Social Skill Superpower</span>
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          Get Your 7-page PDF on Empathic Listening Skills
        </p>

        <form
          className="mt-8 md:mt-12 mb-2 space-y-4 w-[90%] md:w-[50%] mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Email Field */}
          <div className="text-left">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="mt-1 "
            />
          </div>

          {/* Honeypot anti-spam field (hidden from users) */}
          <div style={{ display: "none" }}>
            <Label htmlFor="spam-check">Leave this empty</Label>
            <input type="text" id="spam-check" name="spam-check" />
          </div>

          <Button
            type="submit"
            className="w-full sm:w-auto sm:px-8 pt-2 text-base text-white cursor-pointer"
          >
            Get the E-Book!
          </Button>

          <p className="text-sm text-muted-foreground">
            We won't send you spam. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
