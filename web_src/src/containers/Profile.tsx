import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  profileSelector,
  isLoggedInSelector
} from '../store/profile/selectors';

import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {

  const profile = useSelector(profileSelector);

  return (
    <>
      <ProfileComponent profile={profile} />
    </>
  );
}
export default Profile;
