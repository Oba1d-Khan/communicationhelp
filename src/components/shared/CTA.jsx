import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="bg-primary/5 p-8 rounded-2xl text-center mt-20 max-w-2xl mx-auto space-y-4">
      <h2 className="text-3xl font-semibold">
        100+ Ways to Politely Refuse an Invitation
      </h2>
      <p className="text-text-light">
        Get our free guide & weekly communication tips.
      </p>
      <form className="flex max-sm:flex-col gap-3 justify-center">
        <Input
          type="email"
          placeholder="Enter your email"
          className="max-w-sm"
        />
        <Button className="bg-primary text-white hover:bg-primary/90">
          Yes, I want this!
        </Button>
      </form>
    </div>
  );
};

export default CTA;
