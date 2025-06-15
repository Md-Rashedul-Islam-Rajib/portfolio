import React from 'react'
import { getAllProjects } from '../_actions';
import ProjectListing from './ProjectListing';

const ProjectModule = async () => {
    const {data:projects} =await getAllProjects();
  return (
    <div>
      <ProjectListing projects={projects} />
    </div>)

}

export default ProjectModule;