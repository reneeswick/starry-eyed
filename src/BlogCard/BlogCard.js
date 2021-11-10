import React from 'react';

const BlogCard = ({ blogs }) => {

  let singleBlogCard = blogs.map((blog) => {
    return (
    <div id= {blog.id} key= {blog.id}>
        <img src={blog.image} alt={blog.title}/>
        <p>{blog.title}</p>
        <p>{blog.summary}</p>
        <a href={blog.url}> Read Full Article here</a>
      </div>
    )
  })

  return (
    <div>
      {singleBlogCard}
    </div>
  )
}

export default BlogCard;
