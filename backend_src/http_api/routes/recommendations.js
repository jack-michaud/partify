const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const db = require('../db');
const { ObjectId } = require('mongodb');
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
    const data = {
      profile: {
        id: user._id,
        name: user.name
      },
      forUserId,
      track,
      createdTime: new Date().toISOString()
    };
    await db.get().collection('recommendations').insertOne(data);
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});


router.delete('/:recommendationId', async (req, res) => {
  const {
    recommendationId
  } = req.params;
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }

  try {
    const resp = await db.get().collection('recommendations').deleteOne({ _id: ObjectId(recommendationId), forUserId: spotifyId });
    console.log(resp);
    return res.status(200).send('');
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});

module.exports = router;
