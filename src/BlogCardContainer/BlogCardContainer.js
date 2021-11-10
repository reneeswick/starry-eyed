import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { cleanBlogsData, blogsData } from '../utilities';

const BlogCardContainer = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    cleanBlogsData()
    setBlogs(blogsData)
  }, []);

  return (
    <div>
      <BlogCard blogs={blogs} />
    </div>
  )
}

export default BlogCardContainer;
