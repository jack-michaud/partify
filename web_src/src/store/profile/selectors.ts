import {
  RootState
} from '../index';

export const profileSelector = (state: RootState) => 
  state.profile.profile;

export const isLoggedInSelector = (state: RootState) => 
  state.profile.loggedIn;

export const logInErrorSelector = (state: RootState) => 
  state.profile.logInError;

export const selectedProfileSelector = (state: RootState) => 
  state.profile.selectedProfile;

