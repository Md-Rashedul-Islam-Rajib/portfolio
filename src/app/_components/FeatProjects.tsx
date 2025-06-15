
import { TProject } from "../_types";
import ProjectCard from "./ProjectCard";




export default function FeatProjects({projects}: {projects: TProject[]}) {
    return (
      <div className="w-full max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Featured Projects
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add a grid layout for the project cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    );
}
