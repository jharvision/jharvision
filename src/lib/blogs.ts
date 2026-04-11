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

