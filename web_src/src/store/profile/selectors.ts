import {
  RootState
} from '../index';

export const profileSelector = (state: RootState) =>
  state.profile.profile;

export const isLoggedInSelector = (state: RootState) =>
  state.profile.loggedIn;

export const isPromoterSelector = (state: RootState) => {
  const { profile } = state.profile;
  return profile ? profile.isPromoter : false;
}

export const logInErrorSelector = (state: RootState) =>
  state.profile.logInError;

export const selectedProfileSelector = (state: RootState) =>
  state.profile.selectedProfile;

