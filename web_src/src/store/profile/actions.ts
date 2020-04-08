import {
  ProfileState,
  Profile,
  ThunkActionType
} from '../../types';

import { sendCode, fetchMe, fetchProfile as fetchProfileRequest } from '../../services/LoginService';
import { getPlaylistsForProfile } from '../../services/PlaylistService';
import { ThunkAction } from 'redux-thunk';

export const PROFILE_LOG_IN_REQUEST = 'PROFILE_LOG_IN_REQUEST';
export const PROFILE_LOG_IN_SUCCESS = 'PROFILE_LOG_IN_SUCCESS';
export const PROFILE_LOG_IN_FAILURE = 'PROFILE_LOG_IN_FAILURE';
export const PROFILE_LOG_OUT = 'PROFILE_LOG_OUT';

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';

export const logInAction = (code: string): ThunkActionType<ProfileState> => async (dispatch) => {
  dispatch({
    type: PROFILE_LOG_IN_REQUEST
  })
  try {
    await sendCode(code);
    const profile: Profile = await fetchMe();
    dispatch({
      type: PROFILE_LOG_IN_SUCCESS,
      payload: profile
    })
  } catch (e) {
    dispatch({
      type: PROFILE_LOG_IN_FAILURE,
      payload: e
    })
  }
}

export const fetchProfile = (): ThunkActionType<ProfileState> => async (dispatch) => {
  try {
    const profile: Profile = await fetchMe();
    dispatch({
      type: PROFILE_LOG_IN_SUCCESS,
      payload: profile
    })
  } catch (e) {
    dispatch({
      type: PROFILE_LOG_IN_FAILURE,
      payload: e
    })
  }
}

export const logOutAction = (): ThunkActionType<ProfileState> => async (dispatch) => {
  // TODO Clear cookies, actually log out
  dispatch({
    type: PROFILE_LOG_OUT
  })
}

export const selectProfile = (profileId: string = null): ThunkActionType<ProfileState> => async (dispatch, getState) => {
  if (profileId == null) {
    const { profile } = await getState();
    dispatch({
      type: PROFILE_SUCCESS,
      payload: profile.profile
    });
  } else {
    const resp = await fetchProfileRequest(profileId);
    const data = await resp.json();
    dispatch({
      type: PROFILE_SUCCESS,
      payload: data
    });
  }
}
