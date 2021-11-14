import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className='home-view'>
      <h2 className='slogan'>Feeling Starry Eyed?</h2>
      <p className='about-us'>Check out our space blog, save some articles for later, or track down the latest news from the International Space Station (ISS)</p>
      <p className='prompt'>Choose your mode</p>
      <div className='mode-container'>
        <p>☀️</p>
        <label class="switch">
          <input
            type="checkbox"
            onClick={(event) => console.log(event.target.checked)}
          />
          <span class="slider round"></span>
        </label>
          {/*<button className='mode-btn'>dawn</button>
          <button className='mode-btn'>dusk</button>*/}
        <p>🌙</p>
      </div>
    </div>
  )
}

export default Home;
