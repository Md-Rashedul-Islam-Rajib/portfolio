import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TBlog } from "../_types";
import Link from "next/link";

interface Props {
  blog: TBlog;
}

const BlogCard: FC<Props> = ({ blog }) => {
  const contentPreview = blog.content.slice(0, 180); // basic slicing fallback

  return (
    <div
      //   initial={{ opacity: 0, y: 30 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.5 }}
      //   viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-md border border-zinc-200 dark:border-zinc-800"
    >
      {/* Cover Image */}
      <div className="h-48 overflow-hidden">
        <picture>
          <img
            src={blog.coverImage[0]}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 line-clamp-2">
          {blog.title}
        </h2>

        <div
          className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: contentPreview }}
        />
      </div>

      {/* Hover Details Button */}
      <div
        // initial={{ opacity: 0, y: 20 }}
        // whileHover={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      >
        <Link href={`/blog/${blog.id}`}>
          <Button
            variant="secondary"
            className="w-full flex items-center justify-center gap-2"
          >
            View Details <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
