import React from 'react';
import SpotifyIcon from './SpotifyIcon';

interface IProps {
  playlistIdx: number;
  track: SpotifyApi.PlaylistTrackObject
}

const TrackListItem = (props: IProps) => {
  const {
    playlistIdx, track
  } = props;

  return (
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
          <button className="mr-2">
            Recommend to a friend
          </button>
          <button className="mr-2">
            Add to your own playlist
          </button>
        </div>
      </div>
    </div>
  )
}
export default TrackListItem;
