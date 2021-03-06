import React, {useState} from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import '../index.css';
import './App.css';
import BlogCardContainer from '../BlogCardContainer/BlogCardContainer';
import SavedForLaterContainer from '../SavedForLaterContainer/SavedForLaterContainer';
import ISSReportContainer from '../ISSReportContainer/ISSReportContainer';
import Home from '../Home/Home';
import Error from '../Error/Error';
import Mode from '../Mode/Mode';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [mode, setMode] = useState('');

  const changeToDarkMode = (event) => {
    if(event.target.checked) {
      setMode('dark')
    } else {
      setMode('')
    }
  }

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
    <main className={`${mode}`}>
      <header>
        <img className='logo' src='https://www.nicepng.com/png/detail/194-1944887_circular-logo-circular-logo-mops-theme-starry-eyed.png' alt='Starry Eyed round logo' />
        <nav>
          <NavLink exact to='/' className={`navBtn ${mode}`} activeClassName='active'>Home</NavLink>
          <NavLink to='/blogs' className={`navBtn ${mode}`} activeClassName='active'>Blogs</NavLink>
          <NavLink to='/saved' className={`navBtn ${mode}`} activeClassName='active'>Saved for Later</NavLink>
          <NavLink to='/report' className={`navBtn ${mode}`} activeClassName='active'>ISS Report</NavLink>
        </nav>
        <Mode changeToDarkMode={changeToDarkMode} />
      </header>
      <Switch>
        <Route exact path='/' render={() => <Home changeToDarkMode={changeToDarkMode} />} />
        <Route exact path='/blogs' render={() => <BlogCardContainer favorites={favorites} toggleFavorites={toggleFavorites} mode={mode} />} />
        <Route exact path='/saved' render={() => <SavedForLaterContainer favorites={favorites} toggleFavorites={toggleFavorites} />} />
        <Route exact path='/report' render={() => <ISSReportContainer mode={mode}/>} />
        <Route render={() => <Error />} />
      </Switch>
    </main>
  )
}

export default App;
