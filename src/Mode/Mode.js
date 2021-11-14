import React from 'react';
import './Mode.css';

const Mode = ({ changeToDarkMode }) => {

  return (
    <div className='mode-container'>
      <p>☀️</p>
      <label class='switch'>
        <input
          type='checkbox'
          name='mode'
          onClick={(event) => changeToDarkMode(event)}
        />
        <span class='slider round'></span>
      </label>
      <p>🌙</p>
    </div>
  )
};

export default Mode;
