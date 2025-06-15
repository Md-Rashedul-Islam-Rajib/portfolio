"use client";

import { TBlog } from "@/app/_types";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DetailsPage = ({ blog }: { blog: TBlog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto py-10 px-4"
    >
      {/* Back Button */}
      <Link href="/blog">
        <button className="flex items-center gap-2text-zinc-300 hover:text-primary transition mb-6">
          <ArrowLeft size={18} />
          Back to Blogs
        </button>
      </Link>

      {/* Blog Cover */}
      <div className="rounded-xl overflow-hidden mb-6">
        <picture>
          <img
            src={blog?.coverImage[0]}
            alt={blog?.title}
            className="w-full h-64 object-cover"
          />
        </picture>
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl font-bold text-zinc-100 mb-4">{blog?.title}</h1>

      {/* Date */}
      <p className="text-sm text-zinc-500 mb-8">
        Published on{" "}
        {new Date(blog?.createdAt).toLocaleDateString("bn-BD", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Blog Content */}
      <div
        className="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />
    </motion.div>
  );
};

export default DetailsPage;
