'use client'
import ProjectCard from '@/app/_components/ProjectCard';
import { TProject } from '@/app/_types'
import React from 'react'

const ProjectListing = ({ projects }: { projects: TProject[] }) => {
  console.log("Projects:", projects);
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
           My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore my works and give your feedback.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: TProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}

export default ProjectListing
