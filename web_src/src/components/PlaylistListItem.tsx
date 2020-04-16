
import React from 'react';
import {
  Link
} from 'react-router-dom';

import SpotifyIcon from './SpotifyIcon';

interface IProps {
    playlist: SpotifyApi.PlaylistObjectSimplified;
}

const PlaylistListItem = (props: IProps) => {

  return (
    <div>
      <div className="sm:flex flex-row mx-auto max-w-3xl p-3 text-white items-center h-64 mb-5">
        <div className="w-64">
          <img className="w-auto shadow-xs rounded" src={props.playlist.images[0].url} alt="" />
        </div>
        <div className="flex-1 px-3 bg-purple-700 sm:-ml-8 rounded flex flex-col w-64 text-center">
          <div className="uppercase mx-auto -mt-10 text-2xl font-semibold bg-purple-600 p-2 rounded">
            <Link to={`/playlist/${props.playlist.id}`}>Playlist</Link>
          </div>
          <h1 className="text-2xl truncate">{props.playlist.name}</h1>
          <h3>Owner: {props.playlist.owner.display_name}</h3>
          <a className="transition" 
            target="_blank"
            href={props.playlist.external_urls.spotify}>
            Link on Spotify <SpotifyIcon/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PlaylistListItem;
