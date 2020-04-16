import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { 
  profileSelector,
  selectedProfileSelector,
  isLoggedInSelector
} from '../store/profile/selectors';
import { 
  selectProfile,
} from '../store/profile/actions';

import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    profileId
  } = params;

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    dispatch(selectProfile(profileId));
  }, []);

  // Fetched from navbar
  const otherProfile = useSelector(selectedProfileSelector);
  const myProfile = useSelector(profileSelector);
  useEffect(() => {
    if (profileId == null) {
      setProfile(myProfile);
    } else {
      setProfile(otherProfile);
    }
  // if this is a personal profile, watch my profile
  }, [profileId == null ? myProfile : otherProfile]);

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
