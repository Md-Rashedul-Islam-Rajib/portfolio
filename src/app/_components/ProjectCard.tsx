import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TProject } from "../_types";
import Link from "next/link";
// import { motion } from "framer-motion";

interface Props {
  project: TProject;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <div className="h-56 overflow-hidden">
        <picture>
          <img
            src={project.imageUrl[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.slice(0, 5).map((tech: string) => (
            <span
              key={tech}
              className="bg-zinc-200 dark:bg-zinc-700 text-xs text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/60 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Link href={`/projects/${project.id}`}>
          <Button
            variant="secondary"
            className="flex items-end mb-5 justify-end gap-2"
          >
            View Details <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
