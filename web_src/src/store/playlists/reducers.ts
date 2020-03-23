
import {
  PlaylistState,
  ActionType,
} from '../../types';

const initialState: PlaylistState = {
  playlistsSearchResults: [],
  playlistsSearchQuery: '',
  playlistsSearchLoading: false,

  playlistDetailId: null,
  playlistDetailPlaylist: null,
  playlistDetailLoading: false
}

import {
  SEARCH_PLAYLISTS_QUERY,
  SEARCH_PLAYLISTS_REQUEST,
  SEARCH_PLAYLISTS_SUCCESS,
  
  PLAYLIST_DETAIL_REQUEST,
  PLAYLIST_DETAIL_SUCCESS
} from './actions';

const reducers = (state: PlaylistState = initialState, action: ActionType) => {
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
      playlistDetailPlaylist: null
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

export default reducers;
