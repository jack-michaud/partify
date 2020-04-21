import React from 'react';
import SpotifyIcon from './SpotifyIcon';
import { Recommendation } from '../types';

interface IProps {
  featured: Recommendation;
  clearFeatured: (fId: string) => Promise<void>;
}

const FeaturedListItem = (props: IProps) => {
  const {
    featured
  } = props;
  const {
    track
  } = featured;

  return (
    <div className="sm:flex bg-black justify-start my-3 p-3 relative"
         style={{backgroundColor: '#130f15'}}>
      <div className="absolute right-0 top-0 p-3" role="button" onClick={() => props.clearFeatured(props.featured._id)}>
        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current text-purple-700" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"/>
        </svg>
      </div>

      <div className="">
        <img className="w-24 h-24" src={ track.album.images[0].url}/>
      </div>
      <div className="p-2 h-full">
        <span className="text-purple-700 pr-2">
          { track.artists.map(a => a.name).join(',') }
        </span>
        <div className="text-lg">
          { track.name }
          <a href={track.uri}
             target="_blank"
             className="ml-2"><SpotifyIcon/></a>
        </div>
        <div className="sm:flex mt-2">
          <button className="mr-2">
            Add to your own playlist
          </button>
        </div>
      </div>
    </div>
  )
}
export default FeaturedListItem;
