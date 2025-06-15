import React from 'react'
import { getSingleBlog } from '../_actions';
import DetailsPage from './_components/DetailsPage';

const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const { data: blog } = await getSingleBlog(id);
    return <div>
      <DetailsPage blog={blog} />
  </div>;
};

export default BlogDetailsPage
