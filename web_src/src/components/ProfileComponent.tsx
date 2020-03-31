import React from 'react';

import { Profile } from '../types';

interface IProps {
  profile: Profile;
}

const ProfileComponent = (props: IProps) => {
  return (
    <div>
      { JSON.stringify(props.profile) }
    </div>
  )
}

export default ProfileComponent;
