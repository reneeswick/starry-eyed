import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { cleanBlogsData } from '../utilities';
import './BlogCardContainer.css';

const BlogCardContainer = ({ toggleFavorites }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    setBlogs(cleanBlogsData())
  });

  return (
    <div className='blog-card-container'>
      <BlogCard
        blogs={blogs}
        toggleFavorites={toggleFavorites}
      />
    </div>
  )
}

export default BlogCardContainer;
