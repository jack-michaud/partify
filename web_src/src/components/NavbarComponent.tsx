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
    <nav className="flex items-center justify-between flex-wrap w-full p-4 bg-purple-900">
      <div className="flex mr-6">
        <Link to="/"><span className="font-semibold text-xl tracking-tight">Partify</span></Link>
      </div>
      {props.isLoggedIn != null &&
        <div>
          {
            props.isLoggedIn ?
              <Link to={"/profile"}>Profile</Link> :
              <Link to={"/login"}>Log In</Link>
          }
        </div>
      }
    </nav>
  );
}

export default NavbarComponent;
