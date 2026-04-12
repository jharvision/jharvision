import type { Metadata } from "next";

import { BlogCard } from "@/components/BlogCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore startup updates, community insights, and open-tech stories from Jharkhand."
};

const allBlogs = getAllBlogs();

export default function BlogPage() {
  return (
    <div className="container-width section-spacing">
      <section className="rounded-[2rem] border border-brand-line bg-white/85 px-6 py-14 shadow-sm sm:px-10">
        <SectionHeading
          eyebrow="JharVision Blog"
          title="Stories, startup signals, and community ideas from across Jharkhand."
          description="Version 1 ships with a static blog layer that is easy to understand and easy to extend. Each article is rendered through dynamic routing using a slug."
        />
      </section>

      <section className="section-spacing pt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {allBlogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
  
}

