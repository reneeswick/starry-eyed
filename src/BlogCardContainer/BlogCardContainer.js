import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { cleanBlogsData, blogsData } from '../utilities';
import './BlogCardContainer.css';

const BlogCardContainer = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    cleanBlogsData()
    setBlogs(blogsData)
  }, []);

  return (
    <div className='blog-card-container'>
      <BlogCard blogs={blogs} />
    </div>
  )
}

export default BlogCardContainer;
