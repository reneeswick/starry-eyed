import React, {useState} from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import '../index.css';
import './App.css';
import BlogCardContainer from '../BlogCardContainer/BlogCardContainer';
import SavedForLaterContainer from '../SavedForLaterContainer/SavedForLaterContainer';
import ISSReportContainer from '../ISSReportContainer/ISSReportContainer';
import Home from '../Home/Home';
import Error from '../Error/Error';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (newBlog) => {
    setFavorites([...favorites, newBlog])
  };

  const removeFromFavorites = (blogID) => {
    let filteredFavorites = favorites.filter((item) => {
      return item.id !== blogID
    })
    setFavorites(filteredFavorites)
  };


  const toggleFavorites = (blog) => {
    let favoriteIDs = favorites.map((favorite) => {
      return favorite.id
    })
    if(favoriteIDs.includes(blog.id)) {
      removeFromFavorites(blog.id)
    } else {
      addToFavorites(blog)
    }
  };

  return (
    <main>
      <header>
        <img className='logo' src='https://www.nicepng.com/png/detail/194-1944887_circular-logo-circular-logo-mops-theme-starry-eyed.png' />
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blogs'>Blogs</NavLink>
          <NavLink to='/saved'>Saved for Later</NavLink>
          <NavLink to='/report'>ISS Report</NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/blogs' render={() => <BlogCardContainer favorites={favorites} toggleFavorites={toggleFavorites} />} />
        <Route path='/saved' render={() => <SavedForLaterContainer favorites={favorites} toggleFavorites={toggleFavorites} />} />
        <Route path='/report' render={() => <ISSReportContainer />} />
        <Route path='/error' render={() => <Error />} />
      </Switch>
    </main>
  )
}

export default App;
