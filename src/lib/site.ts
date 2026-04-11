export const siteConfig = {
  name: "JharVision",
  title: "JharVision | Open Tech Platform for Jharkhand",
  description:
    "JharVision highlights tech stories, startup momentum, and open collaboration across Jharkhand.",
  url: "https://jharvision.org",
  ogImage: "/icon.svg",
  links: {
    home: "/",
    blog: "/blog",
    contributors: "/contributors",
    contribute: "/contribute",
    github: "https://github.com/jharvision/jharvision"
  }
};

export const navigationLinks = [
  { href: siteConfig.links.home, label: "Home" },
  { href: siteConfig.links.blog, label: "Blog" },
  { href: siteConfig.links.contributors, label: "Contributors" },
  { href: siteConfig.links.contribute, label: "Contribute" }
];
