import React from 'react';
import {
  Link
} from 'react-router-dom';

import { Profile } from '../types';

interface IProps {
  profile: Profile;
}

const ProfileComponent = (props: IProps) => {
  var joinedDate = new Date(props.profile.joined);
  return (
    <div className="items-center flex flex-col text-purple-500 sm:w-full md:w-2/3 mx-auto">
      <div className="flex-col items-center">
        <span className="font-semibold text-5xl">
          {props.profile.name}
        </span>
      </div>
      {/* User profile information */}
      <div className="flex flex-col bg-purple-900 w-full rounded p-3 m-3">
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
      <div className="flex flex-col w-full bg-purple-900 rounded p-3 m-3">
        <div className="flex-col items-center">
          <span className="font-semibold text-3xl">
            My Playlists
          </span>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <span className="font-semibold">Playlists: </span>
          </div>
          <div className="w-full grid grid-cols-3">
            { props.profile?.playlists != null &&
              props.profile.playlists.map(playlist => {
                return (
                  <Link to={`/playlist/${playlist.id}`} className="list-none" key={playlist.id}>
                    <img src={playlist.imageUrl} className="w-32 h-32"/>
                    <span>{ playlist.name }</span>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* Favorites */}
      <div className="flex flex-col w-full bg-purple-900 rounded p-3 m-3">
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
