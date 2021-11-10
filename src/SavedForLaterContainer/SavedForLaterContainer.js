import React from 'react';
import SavedCard from '../SavedCard/SavedCard';

const SavedForLaterContainer = ({ favorites, toggleFavorites }) => {

  return (
    <div className='blog-card-container'>
      <SavedCard
        favorites={favorites}
        toggleFavorites={toggleFavorites}
      />
    </div>
  )
}

export default SavedForLaterContainer;
