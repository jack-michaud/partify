
import {
  searchPlaylist,
  getPlaylist
} from '../../services/PlaylistService';
import {
  ThunkActionType,
  PlaylistState
} from '../../types';

export const SEARCH_PLAYLISTS_QUERY = 'SEARCH_PLAYLISTS_QUERY';
export const SEARCH_PLAYLISTS_REQUEST = 'SEARCH_PLAYLISTS_REQUEST';
export const SEARCH_PLAYLISTS_SUCCESS = 'SEARCH_PLAYLISTS_SUCCESS';

export const PLAYLIST_DETAIL_REQUEST = 'PLAYLIST_DETAIL_REQUEST';
export const PLAYLIST_DETAIL_SUCCESS = 'PLAYLIST_DETAIL_SUCCESS';


export const searchPlaylistAction = (query: string): ThunkActionType<PlaylistState> => async (dispatch) => {
  dispatch({
    type: SEARCH_PLAYLISTS_REQUEST
  });
  const playlists = await searchPlaylist(query);
  dispatch({
    type: SEARCH_PLAYLISTS_SUCCESS,
    payload: playlists
  });
};
export const setPlaylistSearchTextAction = (query: string): ThunkActionType<PlaylistState> => async (dispatch) => {
  dispatch({
    type: SEARCH_PLAYLISTS_QUERY,
    payload: query
  });
};


export const requestPlaylistDetailAction = (id: string): ThunkActionType<PlaylistState> => async (dispatch) => {
  dispatch({
    type: PLAYLIST_DETAIL_REQUEST,
    payload: id
  });
  const playlist = await getPlaylist(id);
  dispatch({
    type: PLAYLIST_DETAIL_SUCCESS,
    payload: playlist
  });
};
