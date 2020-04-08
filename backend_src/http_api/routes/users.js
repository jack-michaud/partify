const db = require('../db.js');
const express = require('express');
const cors = require('cors');
const auth = require('../auth');
const axios = require('axios');

const router = new express.Router;

router.get('/me', async (req, res) => {
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }

  const user = await db.get().collection('users').findOne({ _id: spotifyId });

  if (!user) {
    return res.status(404).json(`User with id ${spotifyId} not found...`);
  }
  const playlists = await getPlaylists({ user, private: true });
  user.playlists = playlists;
  // Dont surface access token and refresh token
  delete user.accessToken;
  delete user.refreshToken;

  return res.json(user);
});



const getPlaylists = async ({ user, private }) => {
  if (private == null) {
    private = false;
  }
  
  if (private) {
    const { access_token, refresh_token } = await auth.refreshAccessToken(user.refreshToken);
    await db.get().collection('users').updateOne({ _id: user._id }, { $set: { accessToken: access_token, refreshToken: refresh_token } });
    try {
      const { data } = await axios({
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
          'Authorization': 'Bearer ' + access_token,
        }
      })
      return data.items.map(playlist => ({
        id: playlist.id,
        imageUrl: playlist.images[0].url,
        name: playlist.name,
      }));
    } catch (err) {
      throw err;
    }
  } else {
    token = await auth.getToken();
    try {
      const { data } = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/users/${userId}/playlists`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
      })
      return data.items.map(playlist => ({
        id: playlist.id,
        imageUrl: playlist.images[0].url,
        name: playlist.name,
      }));
    } catch (err) {
      throw err
    }
  }
}
router.get('/:userId/playlists', async (req, res) => {
  const { userId } = req.params;
  const user = await db.get().collection('users').findOne({ _id: userId });

  const private = req.session.spotifyId === userId;

  return getPlaylists({ user, userId });
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await db.get().collection('users').findOne({ _id: userId });

  if (!user) {
    return res.status(404).json(`User with id ${userId} not found...`).send();
  }
  const playlists = await getPlaylists({ user, private: false });
  user.playlists = playlists;
  return res.json(user);
});

router.get('/', async (req, res) => {
  const users = await db.get().collection('users').find().toArray();

  return res.json(users);
});

module.exports = router;
