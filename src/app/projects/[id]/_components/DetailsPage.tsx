"use client";

import { TProject } from "@/app/_types";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const DetailsPage = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto py-10 px-4"
    >
      {/* Back Button */}
      <Link href="/projects">
        <button className="flex items-center gap-2 text-zinc-300 hover:text-primary transition mb-6">
          <ArrowLeft size={18} />
          Back to projects
        </button>
      </Link>

      {/* Project Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {project?.imageUrl.map((src, index) => (
          <picture key={index}>
            <img
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="rounded-xl object-cover w-full h-64"
            />
          </picture>
        ))}
      </div>

      {/* Project Title */}
      <h1 className="text-3xl font-bold text-zinc-100 mb-4">{project?.title}</h1>

      {/* Date */}
      <p className="text-sm text-zinc-500 mb-4">
        Created on{" "}
        {new Date(project?.createdAt).toLocaleDateString("bn-BD", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project?.techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-base text-zinc-300 leading-relaxed mb-6">
        {project?.description}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {project?.liveUrl && (
          <Link
            href={project?.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary/90 transition">
              Live Site <ExternalLink size={16} />
            </button>
          </Link>
        )}

        {project.frontendGithubRepoLink && (
          <Link
            href={project.frontendGithubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm bg-zinc-800 text-white rounded hover:bg-zinc-700 transition">
              Frontend Code <Github size={16} />
            </button>
          </Link>
        )}

        {project.backendGithubRepoLink && (
          <Link
            href={project.backendGithubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm bg-zinc-800 text-white rounded hover:bg-zinc-700 transition">
              Backend Code <Github size={16} />
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default DetailsPage;
