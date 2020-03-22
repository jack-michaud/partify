import {
  ProfileState
} from '../../types';

export const profileSelector = (state: ProfileState) => 
  state.profile;

export const isLoggedInSelector = (state: ProfileState) => 
  state.loggedIn;

export const logInErrorSelector = (state: ProfileState) => 
  state.logInError;
