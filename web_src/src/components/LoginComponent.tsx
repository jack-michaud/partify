import React from 'react';
import SpotifyIcon from './SpotifyIcon';

const LoginComponent = () => {
  return (
    <div className="items-center flex flex-col text-purple-500">
      <span className="italic font-semibold text-4xl p-5">
        Log In
      </span>
      <div>
        <button className="p-5">
          <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-collaborative playlist-modify-public playlist-read-private&response_type=code&redirect_uri=${document.location.origin}/`}>
            Log In Using Spotify <SpotifyIcon />
          </a>
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
