import React from 'react';

import 'babel-polyfill';
import SpotifyIcon from './SpotifyIcon';

interface IProps {
  playlistPreview: SpotifyApi.PlaylistObjectSimplified;
  playlist: SpotifyApi.PlaylistObjectFull;
  loading: boolean;
}

const PlaylistDetailComponent = (props: IProps) => {
  const playlist = props.playlistPreview;
  const tracks = props.playlist?.tracks;
  const loading = props.loading;

  return (
    <div>
      <div className="flex sm:flex-row flex-col p-3 bg-purple-800 text-white items-center">
        <div className="flex-1">
          <img className="w-full shadow-xs rounded" src={playlist.images[0].url} alt="" />
        </div>
        <div className="flex-1 px-3 bg-purple-700 md:-ml-8 rounded flex flex-col">
          <div className="uppercase mx-auto -mt-10 text-2xl bg-purple-600 p-2 rounded">
            Playlist
          </div>
          <h1 className="text-2xl">{playlist.name}</h1>
          <h3>Owner: {playlist.owner.display_name}</h3>
          <a className="transition" 
             target="_blank"
             href={playlist.external_urls.spotify}>
            Link on Spotify <SpotifyIcon/>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="text-3xl uppercase mx-auto inline-block border-b-2 border-purple-600 self-center">
          Tracks
        </div>
        <div className="px-3">
          {
            loading && <div className="italics">loading...</div>
          }
          {
            tracks.items.map((track, idx) => (
              <div key={idx}>
                <span className="text-purple-600 pr-1">{ idx + 1}</span>
                <span className="text-purple-700 pr-2">{ track.track.artists.map(a => a.name).join(',') }</span>
                { track.track.name }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PlaylistDetailComponent;
