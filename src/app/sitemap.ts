import type { MetadataRoute } from "next";

import { getAllBlogs } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/contribute"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const blogPages = getAllBlogs().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticPages, ...blogPages];
}

