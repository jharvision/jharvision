export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  content: string[];
  highlights: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "ranchi-startup-ecosystem-2026",
    title: "Why Ranchi's Startup Ecosystem Feels Different in 2026",
    description:
      "A closer look at how local founders, communities, and practical problem-solving are shaping new momentum across Jharkhand.",
    author: "Aditi Kumari",
    date: "2026-03-18",
    category: "Startups",
    readTime: "5 min read",
    featured: true,
    content: [
      "Ranchi's startup story is becoming more grounded, more local, and more outcome-driven. Instead of chasing headlines, many early teams are building around logistics, skilling, agriculture, and citizen-facing services that matter in Jharkhand's day-to-day economy.",
      "That shift is important because it creates companies with a clearer understanding of the region they serve. Founders are thinking about regional language access, digital trust, and affordability much earlier in the product journey, which often leads to stronger adoption outside the major metro playbook.",
      "Community-led spaces, student builders, and independent contributors are also playing a larger role. The ecosystem still needs more funding and structured support, but the energy is increasingly collaborative rather than isolated."
    ],
    highlights: [
      "Local problem statements are driving more relevant product ideas.",
      "Student and community builders are becoming a visible force.",
      "Jharkhand-focused storytelling can help founders attract the right support."
    ]
  },
  {
    slug: "digital-skilling-jharkhand-builders",
    title: "Digital Skilling Could Be Jharkhand's Biggest Builder Opportunity",
    description:
      "Tech communities are moving beyond workshops and focusing on repeatable pathways that help learners become contributors.",
    author: "Rahul Soren",
    date: "2026-02-27",
    category: "Community",
    readTime: "4 min read",
    featured: true,
    content: [
      "Short-term awareness is no longer enough. The next wave of impact in Jharkhand will likely come from structured communities that help beginners move from learning concepts to shipping projects, writing documentation, and contributing to public work.",
      "This creates a stronger local talent loop. Learners build confidence, project owners get support, and the ecosystem benefits from visible proof that high-quality work can emerge from regional collaboration.",
      "For platforms like JharVision, the opportunity is to connect stories with participation. Content should not end at inspiration. It should lead readers toward open tasks, shared roadmaps, and visible contribution paths."
    ],
    highlights: [
      "Communities need systems, not just one-time events.",
      "Contribution-first learning helps beginners build a public track record.",
      "Regional tech platforms can bridge content and action."
    ]
  },
  {
    slug: "open-source-jharkhand-public-projects",
    title: "What Open Source Can Unlock for Public-Facing Projects in Jharkhand",
    description:
      "Open collaboration can reduce duplication, improve trust, and help civic or community products evolve faster.",
    author: "Neha Verma",
    date: "2026-01-30",
    category: "Open Source",
    readTime: "6 min read",
    featured: true,
    content: [
      "Open source works especially well when projects need transparency and continuity. In Jharkhand, that matters for education tools, public information products, and community directories where multiple people may need to maintain and improve the work over time.",
      "A public codebase makes it easier for contributors to understand the roadmap, propose fixes, and support documentation. Even when the contributor base starts small, a well-structured repository lowers the barrier for future participation.",
      "The challenge is not just publishing code. It is also creating clear onboarding, labeling beginner-friendly issues, and making contribution expectations easy to understand."
    ],
    highlights: [
      "Transparency helps public-interest projects earn trust.",
      "Good documentation is a force multiplier for contributors.",
      "Beginner-friendly issue flows make open source more inclusive."
    ]
  },
  {
    slug: "campus-builders-jharkhand-tech-future",
    title: "Campus Builders May Shape the Next Phase of Jharkhand Tech",
    description:
      "College communities have the scale and curiosity to become a major launchpad for local projects and startup talent.",
    author: "Sanjana Lakra",
    date: "2025-12-14",
    category: "Education",
    readTime: "4 min read",
    content: [
      "Across Jharkhand, student builders already have the ingredients needed to create meaningful momentum: curiosity, peer networks, and a willingness to experiment. What is often missing is a visible platform that turns scattered effort into an ecosystem signal.",
      "When student projects are documented, published, and connected to mentors or community maintainers, they can become more than portfolio pieces. They can evolve into useful tools, startup experiments, or long-term open-source efforts.",
      "The most valuable next step is consistency. Small, repeated collaboration often matters more than rare large events."
    ],
    highlights: [
      "Student communities can act as a regional innovation engine.",
      "Publishing work publicly improves discoverability and mentorship.",
      "Consistency matters more than one-off excitement."
    ]
  }
];
