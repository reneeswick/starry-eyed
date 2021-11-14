import React from 'react';
import './Mode.css';

const Mode = ({ changeToDarkMode }) => {

  return (
    <div className='mode-container'>
      <p>☀️</p>
      <label className='switch'>
        <input
          type='checkbox'
          name='mode'
          onClick={(event) => changeToDarkMode(event)}
        />
        <div className='slider round'></div>
      </label>
      <p>🌙</p>
    </div>
  )
};

export default Mode;
