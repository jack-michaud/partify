import React from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';

import { 
  isLoggedInSelector
} from '../store/profile/selectors';

const Home = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <HomeComponent isLoggedIn={isLoggedIn} />
  )
}
export default Home;
