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
  playlistsSearchLoading: false
}

const SEARCH_PLAYLISTS_QUERY = 'SEARCH_PLAYLISTS_QUERY';
const SEARCH_PLAYLISTS_REQUEST = 'SEARCH_PLAYLISTS_REQUEST';
const SEARCH_PLAYLISTS_SUCCESS = 'SEARCH_PLAYLISTS_SUCCESS';

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

export default createStore(reducers, applyMiddleware(thunk));


