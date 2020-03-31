import {
  ProfileState,
  Profile,
  ThunkActionType
} from '../../types';

import { sendCode, fetchMe } from '../../services/LoginService';

export const PROFILE_LOG_IN_REQUEST = 'PROFILE_LOG_IN_REQUEST';
export const PROFILE_LOG_IN_SUCCESS = 'PROFILE_LOG_IN_SUCCESS';
export const PROFILE_LOG_IN_FAILURE = 'PROFILE_LOG_IN_FAILURE';
export const PROFILE_LOG_OUT = 'PROFILE_LOG_OUT';

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
