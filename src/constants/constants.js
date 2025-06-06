import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

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
