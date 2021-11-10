import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blogs, toggleFavorites }) => {

  let singleBlogCard = blogs.map((blog) => {
    return (
    <div className= 'blog-card' id= {blog.id} key= {blog.id}>
      <button onClick={() => {toggleFavorites(blog)}}>♡</button>
      <p>{blog.title}</p>
      <p>{blog.publishedAt}</p>
      <img className='blog-img' src={blog.image} alt={blog.title}/>
      <p>{blog.summary}</p>
      <a href={blog.url}> Read More</a>
      </div>
    )
  })

  return (
    <div className='blog-card-grid'>
      {singleBlogCard}
    </div>
  )
}

export default BlogCard;
