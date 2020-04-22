
import {
  ProfileState,
  ActionType
} from '../../types';

const initialState: ProfileState = {
  selectedProfile: null,
  profile: null,
  loggedIn: null,
  logInError: null
}

import {
  PROFILE_LOG_IN_REQUEST,
  PROFILE_LOG_IN_SUCCESS,
  PROFILE_LOG_IN_FAILURE,
  PROFILE_LOG_OUT,

  PROFILE_REQUEST,
  PROFILE_SUCCESS
} from './actions';

const reducers = (state: ProfileState = initialState, action: ActionType): ProfileState => {
  if (action.type == PROFILE_LOG_IN_FAILURE) {
    return {
      ...state,
      loggedIn: false,
      logInError: action.payload
    }
  }
  if (action.type == PROFILE_LOG_IN_REQUEST) { return state; }
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
  if (action.type == PROFILE_REQUEST) {
    return {
      ...state,
      selectedProfile: null
    }
  }
  if (action.type == PROFILE_SUCCESS) {
    return {
      ...state,
      selectedProfile: action.payload
    }
  }
  return state;
}

export default reducers;
