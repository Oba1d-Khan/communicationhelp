import { Heart, Ear, MessageCircle } from "lucide-react";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const navLinks = {
  left: [
    { title: "Topics", href: "/topics", hasDropdown: true },
    { title: "Blog", href: "/blog", hasDropdown: false },
  ],
  right: [
    { title: "About", href: "/about", hasDropdown: false },
    { title: "Join Now", href: "/join", hasDropdown: false },
  ],
};

export const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Topics",
    href: "/topics",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const socials = [
  {
    name: "Twitter",
    href: "http://x.com/",
    icon: FaXTwitter,
  },
  {
    name: "Youtube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: FaTiktok,
  },
];

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

// Mock data for other blogs

export const recentBlogs = [
  {
    title: "How to Be More Emotionally Available in a Relationship",
    excerpt:
      "Relationships thrive on genuine connection—on feeling heard, understood, and supported at a deep level. Yet all too often, we hold back, afraid of vulnerability, or simply unsure how to open up. This pattern of emotional distance is sometimes called 'emotional unavailability.' While it can protect us from hurt, it also holds us back from the warmth and intimacy we crave.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "March 25, 2024",
    readTime: "6 min read",
    topic: "Empathy",
    slug: "emotionally-available-relationship",
  },
  {
    title: "The Theory of Reasoned Action Explained: A Simple Guide",
    excerpt:
      "Why do we intend to do things but often don't follow through? Learn how the Theory of Reasoned Action explains this puzzle—and how attitudes, social norms, and personal characteristics shape your intentions and actions.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "March 24, 2024",
    readTime: "8 min read",
    topic: "Persuasion",
    slug: "theory-reasoned-action-explained",
  },
  {
    title: "Creating Safe Spaces for Vulnerable Conversations",
    excerpt:
      "Learn how to establish psychological safety and trust that encourages others to share their deepest thoughts and feelings without fear of judgment.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "March 20, 2024",
    readTime: "9 min read",
    topic: "Empathy",
    slug: "creating-safe-spaces-vulnerable-conversations",
  },
  {
    title: "The Power of Questions: Inquiry as a Leadership Tool",
    excerpt:
      "Discover how asking the right questions can transform your leadership style and deepen your relationships with team members and colleagues.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "March 15, 2024",
    readTime: "5 min read",
    topic: "Listening",
    slug: "power-of-questions-inquiry-leadership",
  },
  {
    title: "Understanding Cognitive Biases in Communication",
    excerpt:
      "Explore how our mental shortcuts and biases affect the way we communicate and learn strategies to overcome these limitations for clearer understanding.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "March 10, 2024",
    readTime: "11 min read",
    topic: "Persuasion",
    slug: "cognitive-biases-communication",
  },
  {
    title: "The Science of First Impressions",
    excerpt:
      "What happens in the first few seconds of meeting someone? Learn about the psychology behind first impressions and how to make meaningful connections from the start.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "March 5, 2024",
    readTime: "7 min read",
    topic: "Empathy",
    slug: "science-first-impressions",
  },
];

export const blogPost = {
  title: "The Art of Deep Listening: How to Make Others Feel Truly Heard",
  author: "Bruce Lambert",
  date: "March 15, 2024",
  readTime: "8 min read",
  topic: "Listening",
  coverImage: "/placeholder.svg?height=400&width=800",
  content: `
    <p>In our fast-paced world, the ability to truly listen has become a rare and precious skill. Deep listening goes beyond simply hearing words—it's about creating a space where others feel genuinely understood and valued.</p>
    
    <h2>What is Deep Listening?</h2>
    <p>Deep listening is the practice of giving someone your complete, undivided attention. It means setting aside your own agenda, judgments, and the urge to formulate responses while the other person is speaking.</p>
    
    <h2>The Three Levels of Listening</h2>
    <p>Understanding these levels can help you become more aware of how you listen and where you can improve:</p>
    
    <h3>Level 1: Internal Listening</h3>
    <p>This is when you're primarily focused on your own thoughts, feelings, and reactions. While the other person is speaking, you're thinking about what you'll say next or how their words relate to your own experiences.</p>
    
    <h3>Level 2: Focused Listening</h3>
    <p>At this level, your attention is completely on the other person. You're listening to their words, tone, and observing their body language without getting distracted by your own internal dialogue.</p>
    
    <h3>Level 3: Global Listening</h3>
    <p>This is the deepest level, where you're not only listening to the person but also sensing the energy and emotions in the space between you. You're picking up on what's not being said as much as what is.</p>
    
    <h2>Practical Techniques for Deep Listening</h2>
    <p>Here are some concrete strategies you can implement immediately:</p>
    
    <ul>
      <li><strong>Put away distractions:</strong> Close your laptop, put your phone face down, and give the person your full attention.</li>
      <li><strong>Use reflective listening:</strong> Paraphrase what you've heard to ensure understanding.</li>
      <li><strong>Ask open-ended questions:</strong> Encourage deeper sharing with questions that can't be answered with yes or no.</li>
      <li><strong>Practice patience:</strong> Allow for silence and don't rush to fill every pause.</li>
    </ul>
    
    <h2>The Impact of Deep Listening</h2>
    <p>When you practice deep listening, you'll notice profound changes in your relationships. People will feel more comfortable sharing with you, trust will deepen, and conflicts will resolve more easily.</p>
    
    <p>Remember, deep listening is a skill that requires practice. Start small—perhaps with one conversation each day where you commit to listening at Level 2 or 3. Over time, this practice will transform not only how others experience you but how you experience the world around you.</p>
  `,
};

export const relatedBlogs = [
  {
    title: "Building Empathy in Difficult Conversations",
    excerpt:
      "Learn how to maintain empathy even when discussions become challenging or emotionally charged.",
    coverImage: "/placeholder.svg?height=200&width=300",
    author: "Bruce Lambert",
    date: "March 10, 2024",
    readTime: "6 min read",
    topic: "Empathy",
    slug: "building-empathy-difficult-conversations",
  },
  {
    title: "The Psychology of Persuasion: Ethical Influence",
    excerpt:
      "Discover how to persuade others ethically while building trust and maintaining authentic relationships.",
    coverImage: "/placeholder.svg?height=200&width=300",
    author: "Bruce Lambert",
    date: "March 5, 2024",
    readTime: "10 min read",
    topic: "Persuasion",
    slug: "psychology-persuasion-ethical-influence",
  },
];

// Mock data for featured blogs (5 slides)
export const featuredBlogs = [
  {
    title: "How to Persuade People Effectively Using the Science of Influence",
    excerpt:
      "Discover the psychological principles behind effective persuasion and learn how to apply them ethically in your personal and professional relationships.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "Bruce Lambert",
    date: "May 24, 2024",
    readTime: "12 min read",
    topic: "Persuasion",
    slug: "how-to-persuade-people-effectively",
  },
  {
    title: "The Art of Deep Listening: How to Make Others Feel Truly Heard",
    excerpt:
      "Master the transformative skill of deep listening and create meaningful connections that last a lifetime.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "Bruce Lambert",
    date: "May 20, 2024",
    readTime: "8 min read",
    topic: "Listening",
    slug: "art-of-deep-listening",
  },
  {
    title: "Building Empathy in Difficult Conversations",
    excerpt:
      "Learn how to maintain empathy and understanding even when discussions become challenging or emotionally charged.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "Bruce Lambert",
    date: "May 15, 2024",
    readTime: "10 min read",
    topic: "Empathy",
    slug: "building-empathy-difficult-conversations",
  },
  {
    title: "The Psychology Behind Trust: How to Build Lasting Relationships",
    excerpt:
      "Understand the fundamental elements of trust and learn practical strategies to build stronger, more authentic relationships.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "Bruce Lambert",
    date: "May 10, 2024",
    readTime: "9 min read",
    topic: "Empathy",
    slug: "psychology-behind-trust",
  },
  {
    title: "Nonverbal Communication: Reading Between the Lines",
    excerpt:
      "Decode the hidden messages in body language, tone, and other nonverbal cues to become a more effective communicator.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "Bruce Lambert",
    date: "May 5, 2024",
    readTime: "7 min read",
    topic: "Listening",
    slug: "nonverbal-communication-reading-between-lines",
  },
];

export const allBlogs = [
  ...featuredBlogs,
  {
    title: "Nonverbal Communication: Reading Between the Lines",
    excerpt:
      "Understanding body language, tone, and other nonverbal cues to improve your communication effectiveness.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "February 28, 2024",
    readTime: "7 min read",
    topic: "Listening",
    slug: "nonverbal-communication-reading-between-lines",
  },
  {
    title: "Creating Safe Spaces for Vulnerable Conversations",
    excerpt:
      "How to establish trust and psychological safety that encourages others to share their deepest thoughts.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "February 20, 2024",
    readTime: "9 min read",
    topic: "Empathy",
    slug: "creating-safe-spaces-vulnerable-conversations",
  },
  {
    title: "The Power of Questions: Inquiry as a Leadership Tool",
    excerpt:
      "Learn how asking the right questions can transform your leadership and deepen your relationships.",
    coverImage: "/placeholder.svg?height=300&width=400",
    author: "Bruce Lambert",
    date: "February 15, 2024",
    readTime: "5 min read",
    topic: "Listening",
    slug: "power-of-questions-inquiry-leadership",
  },
];
