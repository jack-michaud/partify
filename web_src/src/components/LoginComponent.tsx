import React from 'react';

const LoginComponent = () => {
  return (
    <div>
      <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-collaborative playlist-modify-public playlist-read-private&response_type=code&redirect_uri=${document.location.origin}/`}>
        Log In
      </a>
    </div>
  );
}

export default LoginComponent;
