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
  // Dont surface access token and refresh token
  delete user.accessToken;
  delete user.refreshToken;

  return res.json(user);
});

router.get('/:userId/playlists', async (req, res) => {
  const { userId } = req.params;
  const user = await db.get().collection('users').findOne({ _id: userId });

  if (req.session.spotifyId !== userId) {
    token = await auth.getToken();
    const { data } = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/users/${userId}/playlists`,
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
      .catch((err) => res.send(err));
    // if (user) {
    // We don't support shared playlists yet
    if (false) {
      const sharedPlaylists = await db.get().collection('userPlaylists').find(
        { $and: [{ owner: userId }, { $in: { collaborators: req.session.id } } ]}).toArray();
      if (sharedPlaylists.length) {
        data.playlists = data.playlists.items.concat(sharedPlaylists);
      }
    }
    return res.json(data);
  } else {
    const { access_token, refresh_token } = await auth.refreshAccessToken(user.refreshToken);
    await db.get().collection('users').updateOne({ _id: userId }, { $set: { accessToken: access_token, refreshToken: refresh_token } });
    const { data } = await axios({
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }
    })
      .catch((err) => res.send(err));
    return res.json(data);
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await db.get().collection('users').findOne({ _id: userId });

  if (!user) {
    return res.status(404).json(`User with id ${userId} not found...`).send();
  }
  return res.json(user);
});

router.get('/', async (req, res) => {
  const users = await db.get().collection('users').find().toArray();

  return res.json(users);
});

module.exports = router;
