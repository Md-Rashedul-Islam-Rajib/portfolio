import React from 'react'
import { getAllBlogs } from '../_actions';
import BlogListing from './BlogListing';

const BlogModule = async () => {
    const {data:blogs} =await getAllBlogs();
  return (
    <div>
      <BlogListing blogs={blogs} />
    </div>
  )
}

export default BlogModule
