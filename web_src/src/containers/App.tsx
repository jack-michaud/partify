import React from 'react';
import SearchPageContainer from './SearchPageContainer';
import PlaylistDetailContainer from "./PlaylistDetailContainer";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import 'babel-polyfill';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/playlist/:playlistId">
          <PlaylistDetailContainer />
        </Route>
        <Route path="/">
          <SearchPageContainer />
        </Route>
      </Switch>
    </Router>
  )
};

// Safe to use in production
// https://github.com/gaearon/react-hot-loader#what-about-production
import { hot } from 'react-hot-loader/root'

export default hot(App);
