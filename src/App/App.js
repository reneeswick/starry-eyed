import React from 'react';
import { Switch } from 'react-router-dom';
import BlogCardContainer from '../BlogCardContainer/BlogCardContainer';
import SavedForLaterContainer from '../SavedForLaterContainer/SavedForLaterContainer';
import ISSReportContainer from '../ISSReportContainer/ISSReportContainer';
import Home from '../Home/Home';

const App = () => {

  return (
    <main>
      <h1>Starry Eyed</h1>
      <Switch>
        <Home />
        <BlogCardContainer />
        <SavedForLaterContainer />
        <ISSReportContainer />
      </Switch>
    </main>
  )
}

export default App;
