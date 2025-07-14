import React, { Suspense } from "react";
import ProjectModule from "./_components/Module";
import { LoaderCircle } from "lucide-react";


const ProjectsPage = () => {
  return (

    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <ProjectModule />
    </Suspense>
    
  );
};

export default ProjectsPage;
