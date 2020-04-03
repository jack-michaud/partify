import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { logInAction, fetchProfile } from '../store/profile/actions';
import { isLoggedInSelector, profileSelector } from '../store/profile/selectors';
import NavbarComponent from '../components/NavbarComponent';

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  // Log In if there is a code
  useEffect(() => {
    console.log(location)
    const params = new URLSearchParams(location.search);
    const code = params.get('code')
    const error = params.get('error')

    if (code) {
      dispatch(logInAction(code));
      // Clears out the code from the URL params.
      history.push({});
    } else if (error) {
      console.error('Unable to authenticate. Error: ' + error); 
    }
  }, [location]);

  // Just get profile information on mount.
  // Maybe you're already logged in.
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);


  const profile = useSelector(profileSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <>
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        profile={profile} />
    </>
  );
}

export default Navbar;
