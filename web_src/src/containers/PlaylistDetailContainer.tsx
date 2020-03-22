import React, { useState, useEffect } from 'react';
import { 
  useDispatch,
  useSelector
} from 'react-redux';
import {
  requestPlaylistDetailAction,
} from '../store/playlists/actions';
import {
  playlistPreviewSelector,
  playlistDetailSelector,
  playlistDetailLoadingSelector
} from '../store/playlists/selectors';

import { useParams } from 'react-router-dom';

import PlaylistDetailComponent from '../components/PlaylistDetailComponent';
import { getPlaylist } from '../services/PlaylistService';


const PlaylistDetailContainer = () => {
  const dispatch = useDispatch();

  const { playlistId } = useParams()

  const playlist = useSelector(playlistDetailSelector);
  const loading = useSelector(playlistDetailLoadingSelector);
  const playlistPreview = useSelector(playlistPreviewSelector);

  useEffect(() => {
    dispatch(requestPlaylistDetailAction(playlistId));
  // only runs when playlistId changes
  }, [playlistId]);

  if (playlistPreview || playlist) {
    return (
      <div className="h-full flex items-center justify-center text-5xl uppercase">
        Loading...
      </div>
    )
  }
  return (
    <PlaylistDetailComponent 
      playlistPreview={playlistPreview}
      loading={loading}
      playlist={playlist} />
  )
}
export default PlaylistDetailContainer;
