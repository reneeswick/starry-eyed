import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blogs }) => {

  let singleBlogCard = blogs.map((blog) => {
    return (
    <div className= 'blog-card' id= {blog.id} key= {blog.id}>
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
