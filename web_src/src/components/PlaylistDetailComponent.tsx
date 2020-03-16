import React from 'react';
import {
  Link
} from 'react-router-dom';

import TrackListItem from './TrackListItem';
import 'babel-polyfill';
import SpotifyIcon from './SpotifyIcon';

interface IProps {
    playlist: SpotifyApi.PlaylistObjectFull;
}

const PlaylistDetailComponent = (props: IProps) => {

  return (
    <div>
      <div className="bg-purple-800">
        <div className="sm:flex sm:flex-row mx-auto max-w-3xl p-3 text-white items-center">
          <div className="flex-1">
            <img className="mx-auto sm:w-full shadow-xs rounded" src={props.playlist.images[0].url} alt="" />
          </div>
          <div className="flex-1 px-3 pb-4 bg-purple-700 sm:-ml-8 rounded flex flex-col shadow-xl z-1">
            <div className="uppercase mx-auto -mt-10 text-2xl font-semibold bg-purple-600 p-2 rounded">
              <Link to={`/playlist/${props.playlist.id}`}>Playlist</Link>
            </div>
            <h1 className="text-2xl">{props.playlist.name}</h1>
            <h3>Owner: {props.playlist.owner.display_name}</h3>
            <a className="transition" 
              target="_blank"
              href={props.playlist.external_urls.spotify}>
              Link on Spotify <SpotifyIcon/>
            </a>
          </div>
        </div>
      </div>

      { props.playlist.tracks.items ?
      <div className="w-full flex flex-col">
        <div className="text-3xl uppercase italic mx-auto inline-block self-center mt-5">
          Tracks
        </div>
        <div className="px-3">
          {
            props.playlist.tracks.items.map((track, idx) => (
              <TrackListItem key={idx} playlistIdx={idx} track={track}/>
            ))
          }
        </div>
      </div> : null }
    </div>
  )
}

export default PlaylistDetailComponent;
