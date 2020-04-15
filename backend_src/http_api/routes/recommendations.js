const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const db = require('../db');
const spotify = require('../spotify');

const router = new express.Router;

// My recommendations
router.get('/', async (req, res) => {
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }
  const recommendations = await db.get().collection('recommendations').find({ forUserId: spotifyId });

  return res.json(await recommendations.toArray());
});

// Create new recommendation
router.post('/', async (req, res) => {
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }
  const user = await db.get().collection('users').findOne({ _id: spotifyId });

  const {
    forUserId,
    trackId
  } = req.body;

  try {
    const track = await spotify.getTrackInfo(trackId);
    const recommendation = await db.get().collection('recommendations').insertOne({
      profile: {
        id: user._id,
        name: user.name
      },
      forUserId,
      track,
      createdTime: new Date().toISOString()
    });
    return res.json(recommendations);
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});

module.exports = router;
