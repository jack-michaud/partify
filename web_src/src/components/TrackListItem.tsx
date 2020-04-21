import React, { useState } from 'react';
import SpotifyIcon from './SpotifyIcon';
import MakeRecommendation from '../containers/MakeRecommendation';
import MakeFeatured from '../containers/MakeFeatured';

interface IProps {
  playlistIdx: number;
  track: SpotifyApi.PlaylistTrackObject;
  isPromoter: boolean;
  isLoggedIn: boolean;
}

const TrackListItem = (props: IProps) => {
  const {
    playlistIdx, track, isPromoter, isLoggedIn
  } = props;

  const [recommendDialog, setRecommendDialog] = useState<boolean>(false);
  const [featureDialog, setFeaturedDialog] = useState<boolean>(false);

  return (
    <div>
      <div className="sm:flex bg-black justify-start my-3 p-3"
        style={{backgroundColor: '#130f15'}}>
        <div className="">
          <img className="w-24 h-24" src={ track.track.album.images[0]?.url }/>
        </div>
        <div className="p-2 h-full">
          <span className="text-purple-700 pr-2">
            { track.track.artists.map(a => a.name).join(',') }
          </span>
          <div className="text-lg">
            { track.track.name }
            <a href={track.track.uri}
              target="_blank"
              className="ml-2"><SpotifyIcon/></a>
          </div>
          <div className="sm:flex mt-2">
            <button className={isLoggedIn ? 'mr-2' : 'hidden'} onClick={() => setRecommendDialog(!recommendDialog)}>
              Recommend to a friend
            </button>
            <button className={isPromoter ? 'mr-2' : 'hidden'} onClick={() => setFeaturedDialog(!featureDialog)}>
              Feature
            </button>
            <button className={isLoggedIn ? 'mr-2' : 'hidden'}>
              Add to your own playlist
            </button>
          </div>
        </div>
      </div>
      { recommendDialog &&
      <MakeRecommendation
        track={props.track.track}
        resolve={() => setRecommendDialog(false)} /> }
      { featureDialog &&
      <MakeFeatured
        track={props.track.track}
        resolve={() => setFeaturedDialog(false)} /> }
    </div>
  )
}
export default TrackListItem;
