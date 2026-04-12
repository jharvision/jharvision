export const siteConfig = {
  name: "JharVision",
  title: "JharVision | Open Tech Platform for Jharkhand",
  description:
    "JharVision highlights tech stories, startup momentum, and open collaboration across Jharkhand.",
  url: "https://jharvision.com",
  ogImage: "/favicon.png",
  links: {
    home: "/",
    blog: "/blog",
    techUpdates: "/tech-updates",
    contributors: "/contributors",
    contribute: "/contribute",
    github: "https://github.com/jharvision/jharvision"
  }
};

export const navigationLinks = [
  { href: siteConfig.links.home, label: "Home" },
  { href: siteConfig.links.techUpdates, label: "Tech Updates" },
  { href: siteConfig.links.blog, label: "Blog" },
  { href: siteConfig.links.contributors, label: "Contributors" },
  { href: siteConfig.links.contribute, label: "Contribute" }
];
