
export interface State {
  playlistsSearchResults: SpotifyApi.PlaylistObjectSimplified[];
  playlistsSearchQuery: string;
  playlistsSearchLoading: boolean;

  playlistDetailId?: string;
  playlistDetailPlaylist?: SpotifyApi.PlaylistObjectFull;
  playlistDetailLoading: boolean;
}
export interface ActionType {
  type: string;
  payload: any;
}

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
export type ThunkActionType = ThunkAction<void, State, unknown, Action<string>>;
