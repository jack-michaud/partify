import {
  ProfileState,
  Profile,
  ThunkActionType
} from '../../types';

export const PROFILE_LOG_IN_REQUEST = 'PROFILE_LOG_IN_REQUEST';
export const PROFILE_LOG_IN_SUCCESS = 'PROFILE_LOG_IN_SUCCESS';
export const PROFILE_LOG_IN_FAILURE = 'PROFILE_LOG_IN_FAILURE';
export const PROFILE_LOG_OUT = 'PROFILE_LOG_OUT';

export const logInAction = (username: string, password: string): ThunkActionType<ProfileState> => async (dispatch) => {
  dispatch({
    type: PROFILE_LOG_IN_REQUEST
  })
  try {
    // TODO Send log in to log in service
    const profile: Profile = null;
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
