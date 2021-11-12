import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { cleanBlogsData } from '../utilities';
import { getBlogs } from '../apiCalls';
import './BlogCardContainer.css';

const BlogCardContainer = ({ toggleFavorites, favorites }) => {
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    let blogsData = []
    getBlogs()
      .then(data => {
        blogsData = cleanBlogsData(data)
        setBlogs(blogsData)
      }
    )
  }, [blogs]);

  return (
    <div className='blog-card-container'>
      <BlogCard
        blogs={blogs}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
      />
    </div>
  )
}

export default BlogCardContainer;
