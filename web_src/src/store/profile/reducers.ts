
import {
  ProfileState,
  Profile,
  ActionType
} from '../../types';

const initialState: ProfileState = {
  profile: null,
  loggedIn: false,
  logInError: null
}

import {
  PROFILE_LOG_IN_REQUEST,
  PROFILE_LOG_IN_SUCCESS,
  PROFILE_LOG_IN_FAILURE,
  PROFILE_LOG_OUT
} from './actions';

const reducers = (state: ProfileState = initialState, action: ActionType): ProfileState => {
  if (action.type == PROFILE_LOG_IN_FAILURE) {
    return {
      ...state,
      logInError: action.payload
    }
  }
  if (action.type == PROFILE_LOG_IN_REQUEST) {}
  if (action.type == PROFILE_LOG_IN_SUCCESS) {
    return {
      ...state,
      loggedIn: true,
      profile: action.payload
    }
  }
  if (action.type == PROFILE_LOG_OUT) {
    return {
      ...state,
      loggedIn: false
    }
  }
  return state;
}

export default reducers;
