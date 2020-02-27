import React from 'react';

import 'babel-polyfill';

const App = () => {

  return (
    <div className="text-purple-500">
      Hi :D
    </div>
  )
};

// Safe to use in production
// https://github.com/gaearon/react-hot-loader#what-about-production
import { hot } from 'react-hot-loader/root'

export default hot(App);
