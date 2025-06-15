
import { TBlog } from "../_types";
import BlogCard from "./BlogCard";


export default function BlogPreviewSection({blogs}: {blogs: TBlog[]}) {
    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
           Blog Preview
        </h2>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
            </section>
            </div>
  );
}
