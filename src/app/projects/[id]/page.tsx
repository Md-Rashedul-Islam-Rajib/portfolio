import {  getSingleProject } from '../_actions';
import DetailsPage from './_components/DetailsPage';


const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const { data: project } = await getSingleProject(id);
    console.log("project data",project)
    return <div>
      <DetailsPage project={project} />
  </div>;
};

export default BlogDetailsPage