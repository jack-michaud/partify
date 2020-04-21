import React from 'react';
import { Link } from 'react-router-dom';
import PartifyLogo from './PartifyLogo';

const HomeButton = (props) =>  (
  <div className="flex items-center justify-center rounded-lg bg-purple-900 text-3xl text-white shadow-lg hover:bg-purple-800 transition-colors p-3 duration-200 m-3">
    { props.children }
  </div>
)

interface IProps {
  isLoggedIn: boolean;
}
const HomeComponent = (props: IProps) => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-around">
        <div className="w-full flex justify-center absolute -mt-10" style={{zIndex: '-1'}}>
          <PartifyLogo animated={true} size="2xl" />
        </div>
        <div className="md:w-9/12 sm:w-full h-24 mt-64 mx-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/featured">
            <HomeButton>
              Featured
            </HomeButton>
          </Link>
          { props.isLoggedIn && 
            <Link to="/recommendations">
              <HomeButton>
                Recommendations
              </HomeButton>
            </Link> }
          <Link to="/search">
            <HomeButton>
              Search
            </HomeButton>
          </Link>
        </div>
      </div>
      <div className="h-10 bg-purple-900">
      </div>
    </div>
  )
}
export default HomeComponent;
