import type { MetadataRoute } from "next";

import { ecosystemMeta, getItemsByKind } from "@/data/ecosystem";
import { getAllBlogs } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const ecosystemPages = Object.values(ecosystemMeta).map((meta) => ({
    url: `${siteConfig.url}${meta.href}`,
    lastModified: new Date()
  }));

  const ecosystemDetailPages = Object.keys(ecosystemMeta).flatMap((kind) =>
    getItemsByKind(kind as keyof typeof ecosystemMeta).map((item) => ({
      url: `${siteConfig.url}/${kind}/${item.slug}`,
      lastModified: new Date()
    }))
  );

  const staticPages = ["", "/blog", "/news", "/tech-updates", "/contributors", "/contribute"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const blogPages = getAllBlogs().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticPages, ...ecosystemPages, ...ecosystemDetailPages, ...blogPages];
}
