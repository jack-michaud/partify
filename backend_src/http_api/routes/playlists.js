const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const db = require('../db');

const spotify = require('../spotify');

const router = new express.Router;

router.get('/', async (req, res) => {
  // TODO: Parse req.query as JSON and validate it
  const query = req.originalUrl.split('\/', 3)[2];

  try {
    const data = await spotify.searchPlaylist(query);
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.send(err);
  }
});

router.get('/:playlistId', async (req, res) => {
  const { playlistId } = req.params;

  try {
    const data = await spotify.getPlaylistById(playlistId);
    const user = await db.get().collection('users').findOne({ _id: data.owner.id });
    if (user) {
      data.owner = {
        name: user.name,
        id: user._id
      };
    } else {
      delete data.owner;
    }
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.send(err)
  }
});

module.exports = router;
