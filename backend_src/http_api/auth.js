const axios = require('axios');
const express = require('express');
const db = require('./db');


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const getToken = async () => {
  const { data: { access_token } } = await axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
    },
    params: {
      grant_type: 'client_credentials'
    },
  });
  return access_token;
};

const refreshAccessToken = async (refresh_token) => {
  try {
    const { data: { access_token } } = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        grant_type: 'refresh_token',
        refresh_token
      },
    });
    return { access_token };
  } catch (e) {
    console.log(e);
    throw e.response.data.error;
  }
};

const getUserAccessKeys = async (code) => {
  const { data: { access_token, refresh_token } } = await axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI + '/'
    },
  });
  return { access_token, refresh_token };
};

const getSpotifyMe = async (access_token) => {
  const { data } = await axios({
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Authorization': 'Bearer ' + access_token,
    }
  });
  if (data == null) {
    throw 'Could not get spotify user data';
  }
  return data;
};

const spotifyAuthEndpoint = new express.Router;

spotifyAuthEndpoint.post('/', async (req, res, next) => {
  const {
    code
  } = req.body;

  try {
    const {
      access_token,
      refresh_token
    } = await getUserAccessKeys(code);

    if (access_token == null) {
      throw 'access_token is null, code is invalid';
    }

    const {
      display_name,
      id
    } = await getSpotifyMe(access_token);
    console.log(display_name + ' logged in');

    if (!(await db.get().collection('users').findOne({ _id: id }))) {
      // Create new user if one does not exist
      console.log('Creating user entry');
      const user = await db.get().collection('users').insertOne({
        _id: id,
        name: display_name,
        joined: new Date().toISOString(),
        refreshToken: refresh_token,
        accessToken: access_token,
        friends: [],
        playlists: [],
        favoriteTracks: [],
        favoriteArtists: [],
        favoriteAlbums: [],
        favoriteGenres: []
      });
    }

    req.session.spotifyId = id;
    return res.json({ name: display_name });
  } catch (exception) {
    console.log(exception);
    return res.status(400).json({error: `Could not auth: ${exception}`});
  }
});

module.exports = {
  getToken,
  getUserAccessKeys,
  spotifyAuthEndpoint,
  refreshAccessToken
};
