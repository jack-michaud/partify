import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  profileSelector,
  isLoggedInSelector
} from '../store/profile/selectors';

import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {

  // Fetched from navbar
  const profile = useSelector(profileSelector);
  if (profile == null) {
    return null;
  }

  return (
    <>
      <ProfileComponent profile={profile} />
    </>
  );
}
export default Profile;
