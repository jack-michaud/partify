import {
  PlaylistState,
} from '../../types';
import { createSelector } from 'reselect';

export const playlistsSearchResultsSelector = (state: PlaylistState) => state.playlistsSearchResults;
export const playlistsSearchQuerySelector = (state: PlaylistState) => state.playlistsSearchQuery;

export const playlistDetailLoadingSelector = (state: PlaylistState) => state.playlistDetailLoading;
export const playlistDetailSelector = (state: PlaylistState) => state.playlistDetailPlaylist;

const playlistDetailIdSelector = (state: PlaylistState) => state.playlistDetailId;
export const playlistPreviewSelector = createSelector(
  [
    playlistsSearchResultsSelector,
    playlistDetailIdSelector
  ],
  (playlists, playlistId) => {
    if (!playlistId)
      return null;
    return playlists.find(p => p.id == playlistId);
  }
)
