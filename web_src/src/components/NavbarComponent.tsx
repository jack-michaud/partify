import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'src/containers/Navbar';

import { Profile } from '../types';

interface IProps {
  isLoggedIn: boolean;
  profile?: Profile;
}

const NavbarComponent = (props: IProps) => {
  return (
    <div className="w-full h-10 bg-purple-900">
      { props.isLoggedIn != null && 
        <div>
          {
            props.isLoggedIn ? 
            <Link to={"/profile"}>Profile</Link> :
            <Link to={"/login"}>Log In</Link>
          }
        </div>
      }
    </div>
  );
}

export default NavbarComponent;
