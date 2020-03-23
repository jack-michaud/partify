import {
  RootState,
} from '../index';
import { createSelector } from 'reselect';

export const playlistsSearchResultsSelector = (state: RootState) => state.playlists.playlistsSearchResults;
export const playlistsSearchQuerySelector = (state: RootState) => state.playlists.playlistsSearchQuery;

export const playlistDetailLoadingSelector = (state: RootState) => state.playlists.playlistDetailLoading;
export const playlistDetailSelector = (state: RootState) => state.playlists.playlistDetailPlaylist;

const playlistDetailIdSelector = (state: RootState) => state.playlists.playlistDetailId;
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
