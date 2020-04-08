import React from 'react';

import { Profile } from '../types';

interface IProps {
  profile: Profile;
}

const ProfileComponent = (props: IProps) => {
  var joinedDate = new Date(props.profile.joined);
  return (
    <div className="items-center flex flex-col text-purple-500">
      <div className="flex-col items-center">
        <span className="font-semibold text-5xl">
          {props.profile.name}
        </span>
      </div>
      {/* User profile information */}
      <div className="flex flex-col w-1/3 bg-purple-900 rounded p-3 m-3">
        <div className="flex-col items-center">
          <span className="font-semibold text-3xl">
            About Me
          </span>
        </div>
        {/* Joined date */}
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Member since: </span>
          </div>
          <div className="w-3/4">
            <span>{joinedDate.toDateString()}</span>
          </div>
        </div>
        {/* Spotify ID */}
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Spotify ID: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.spotifyId}</span>
          </div>
        </div>
        {/* Friends */}
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Friends: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.friends}</span>
          </div>
        </div>
      </div>
      {/* Playlists */}
      <div className="flex flex-col w-1/3 bg-purple-900 rounded p-3 m-3">
        <div className="flex-col items-center">
          <span className="font-semibold text-3xl">
            My Playlists
          </span>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Playlists: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.playlists}</span>
          </div>
        </div>
      </div>
      {/* Favorites */}
      <div className="flex flex-col w-1/3 bg-purple-900 rounded p-3 m-3">
        <div className="flex-col items-center">
          <span className="font-semibold text-3xl">
            My Favorites
          </span>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Genres: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.favoriteGenres}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Albums: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.favoriteAlbums}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Artists: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.favoriteArtists}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <span className="font-semibold">Tracks: </span>
          </div>
          <div className="w-3/4">
            <span>{props.profile.favoriteTracks}</span>
          </div>
        </div>

      </div >
    </div >
  )
}

export default ProfileComponent;
