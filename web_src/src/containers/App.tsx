import React from 'react';
import Home from './Home';
import SearchPageContainer from './SearchPageContainer';
import PlaylistDetailContainer from "./PlaylistDetailContainer";
import Login from './Login';
import Profile from './Profile';
import Recommendations from './Recommendations';

import Navbar from '../containers/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import 'babel-polyfill';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/profile/:profileId">
          <Profile />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/playlist/:playlistId">
          <PlaylistDetailContainer />
        </Route>
        <Route path="/search">
          <SearchPageContainer />
        </Route>
        <Route path="/recommendations">
          <Recommendations />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

// Safe to use in production
// https://github.com/gaearon/react-hot-loader#what-about-production
import { hot } from 'react-hot-loader/root'

export default hot(App);
