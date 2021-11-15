import React from 'react';
import SavedCard from '../SavedCard/SavedCard';

const SavedForLaterContainer = ({ favorites, toggleFavorites }) => {
  const handleEmptyFavorites = () => {
    return (
      <div>
        <h2>You have no blogs saved.</h2>
        <p>Click the ♡ on a blog post to save it for later</p>
      </div>
    )
  };

  return (
    <div className='blog-card-container'>
      {favorites.length === 0 ? handleEmptyFavorites() :
      <SavedCard
        favorites={favorites}
        toggleFavorites={toggleFavorites}
      />}
    </div>
  )
};

export default SavedForLaterContainer;
