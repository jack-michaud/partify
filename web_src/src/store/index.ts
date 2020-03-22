import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';
import { 
  State,
  ActionType,
  ThunkActionType
} from '../types';

const initialState: State = {
  playlistsSearchResults: [],
  playlistsSearchQuery: '',
  playlistsSearchLoading: false,

  playlistDetailId: null,
  playlistDetailPlaylist: null,
  playlistDetailLoading: false
}

const SEARCH_PLAYLISTS_QUERY = 'SEARCH_PLAYLISTS_QUERY';
const SEARCH_PLAYLISTS_REQUEST = 'SEARCH_PLAYLISTS_REQUEST';
const SEARCH_PLAYLISTS_SUCCESS = 'SEARCH_PLAYLISTS_SUCCESS';

const PLAYLIST_DETAIL_REQUEST = 'PLAYLIST_DETAIL_REQUEST';
const PLAYLIST_DETAIL_SUCCESS = 'PLAYLIST_DETAIL_SUCCESS';

const reducers = (state: State = initialState, action: ActionType) => {
  if (action.type == SEARCH_PLAYLISTS_QUERY) {
    return {
      ...state,
      playlistsSearchQuery: action.payload
    }
  }
  if (action.type == SEARCH_PLAYLISTS_SUCCESS) {
    return {
      ...state,
      playlistsSearchResults: action.payload,
      playlistsSearchLoading: false
    }
  }
  if (action.type == SEARCH_PLAYLISTS_REQUEST) {
    return {
      ...state,
      playlistsSearchLoading: true
    }
  }

  if (action.type == PLAYLIST_DETAIL_REQUEST) {
    return {
      ...state,
      playlistDetailId: action.payload,
      playlistDetailLoading: true,
      playlistDetailPlaylist: null,
    }
  }
  if (action.type == PLAYLIST_DETAIL_SUCCESS) {
    return {
      ...state,
      playlistDetailLoading: false,
      playlistDetailPlaylist: action.payload,
    }
  }
  return state;
}

import { searchPlaylist } from '../services/PlaylistService';

export const searchPlaylistAction = (query: string): ThunkActionType => async (dispatch) => {
  dispatch({
    type: SEARCH_PLAYLISTS_REQUEST
  });
  const playlists = await searchPlaylist(query);
  dispatch({
    type: SEARCH_PLAYLISTS_SUCCESS,
    payload: playlists
  });
};
export const setPlaylistSearchTextAction = (query: string): ThunkActionType => async (dispatch) => {
  dispatch({
    type: SEARCH_PLAYLISTS_QUERY,
    payload: query
  });
};

export const playlistsSearchResultsSelector = (state: State) => state.playlistsSearchResults;
export const playlistsSearchQuerySelector = (state: State) => state.playlistsSearchQuery;;


import { getPlaylist } from '../services/PlaylistService';

export const requestPlaylistDetailAction = (id: string): ThunkActionType => async (dispatch) => {
  dispatch({
    type: PLAYLIST_DETAIL_REQUEST,
    payload: id
  });
  const playlist = await searchPlaylist(id);
  dispatch({
    type: PLAYLIST_DETAIL_SUCCESS,
    payload: playlist
  });
};
export const playlistDetailLoadingSelector = (state: State) => state.playlistDetailLoading;
export const playlistDetailSelector = (state: State) => state.playlistDetailPlaylist;
const playlistDetailIdSelector = (state: State) => state.playlistDetailId;
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

export default createStore(reducers, applyMiddleware(thunk));


