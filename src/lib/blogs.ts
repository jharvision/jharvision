

import { blogs } from "@/data/blogs";

export function getAllBlogs() {
  return [...blogs].sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime()
  );
}

export function getFeaturedBlogs(limit = 3) {
  return getAllBlogs()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

/**
 * Naya Function: Category ke base par blogs filter karne ke liye
 * @param category - 'tech', 'startup', ya 'contributor'
 */
export function getBlogsByCategory(category: string) {
  return getAllBlogs().filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );
}