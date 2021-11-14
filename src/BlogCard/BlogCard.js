import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blogs, toggleFavorites, favorites, mode }) => {
  let favoriteIDs = favorites.map((favorite) => {
    return favorite.id
  });

  const handleFavoritesBtn = (blog) => {
    if(!favoriteIDs.includes(blog.id)) {
      return <button id={`${blog.id}`} onClick={() => {toggleFavorites(blog)}}>♡</button>
    } else {
      return <button className='favorite-btn-active' onClick={() => {toggleFavorites(blog)}}>❤️</button>
    }
  };

  let singleBlogCard = blogs.map((blog) => {
    let time = blog.publishedAt.slice(0, 7)
    return (
    <div className= {`blog-card ${mode}`} id= {blog.id} key= {blog.id}>
      <div className={`blog-card-header ${mode}`}>
        <p className='blog-title'>{blog.title}</p>
        <p className='blog-pub-time'>{time}</p>
        {handleFavoritesBtn(blog)}
      </div>
      <img className='blog-img' src={blog.image} alt={blog.title}/>
      <p className='blog-summ'>{blog.summary}</p>
      <a className='read-more' href={blog.url}> Read More</a>
      </div>
    )
  });

  return (
    <div className='blog-card-grid'>
      {singleBlogCard}
    </div>
  )
};

export default BlogCard;
