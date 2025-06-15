import BlogCard from "@/app/_components/BlogCard";
import { TBlog } from "@/app/_types";
import React from "react";

const BlogListing = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          📚 My Blogs
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore insights, tutorials, and thoughts from my developer journey.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </div>
  );
};

export default BlogListing;
