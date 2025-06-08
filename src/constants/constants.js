import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Heart, Ear, MessageCircle } from "lucide-react";

export const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Learn", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/ansub",
      icon: FaTwitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/ansub",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ansub",
      icon: FaLinkedin,
    },
  ],
};

// workshop benefits

export const benefits = [
  "Attract people with your ability to make them feel seen, heard, and understood",
  "Know exactly how to respond when someone shares something personal",
  "Build the trust that makes you a leader people actually want to follow",
  "Eliminate awkward silences",
];

// topics dropdown menu
export const topics = [
  {
    id: 1,
    topic: "Empathy",
    icon: <Heart className="h-8 w-8 text-white" />,
    description:
      "Learn to understand and connect with others on a deeper emotional level through genuine empathy.",
    href: "/topics/empathy",
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    id: 2,
    topic: "Listening",
    icon: <Ear className="h-8 w-8 text-white" />,
    description:
      "Master the art of active listening to build stronger relationships and become a trusted confidant.",
    href: "/topics/listening",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    topic: "Persuasion",
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    description:
      "Develop ethical persuasion skills to influence others positively and achieve meaningful outcomes.",
    href: "/topics/persuasion",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
];
