import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlaylistDetailComponent from '../components/PlaylistDetailComponent';
import { getPlaylist } from '../services/PlaylistService';


const PlaylistDetailContainer = () => {

  const { playlistId } = useParams()

  const [playlist, setPlaylist] = useState<SpotifyApi.PlaylistObjectFull>();

  useEffect(() => {
    getPlaylist(playlistId).then(setPlaylist);
  // only runs when playlistId changes
  }, [playlistId]);

  if (!playlist) {
    return (
      <div className="h-full flex items-center justify-center text-5xl uppercase">
        Loading...
      </div>
    )
  }
  return (
    <PlaylistDetailComponent playlist={playlist} />
  )
}
export default PlaylistDetailContainer;
