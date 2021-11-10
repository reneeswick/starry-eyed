import React from 'react';

const SavedCard = ({ favorites, toggleFavorites }) => {

  let favoriteCard = favorites.map((favorite) => {
    return (
      <div className= 'blog-card' id= {favorite.id} key= {favorite.id}>
        <button onClick={() => {toggleFavorites(favorite)}}>♡</button>
        <p>{favorite.title}</p>
        <p>{favorite.publishedAt}</p>
        <img className='blog-img' src={favorite.image} alt={favorite.title}/>
        <p>{favorite.summary}</p>
        <a href={favorite.url}> Read More</a>
        </div>
    )
  })

  return (
    <div className='blog-card-grid'>
      {favoriteCard}
    </div>
  )
}

export default SavedCard;
