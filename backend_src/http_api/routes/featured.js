const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const db = require('../db');
const { ObjectId } = require('mongodb');
const spotify = require('../spotify');

const router = new express.Router;

// All featured songs
router.get('/', async (req, res) => {
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }
  let featured = await db.get().collection('featured').find({});

  featured = await featured.toArray();

  return res.json(featured);
});

// Create new featured song
router.post('/', async (req, res) => {
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }
  const user = await db.get().collection('users').findOne({ _id: spotifyId });

  console.log('User is promoter? ', user.isPromoter);
  if (!user.isPromoter) {
    return res.status(401).json({ error: 'Not a Promoter' });
  }

  const {
    trackId
  } = req.body;
  try {
    const track = await spotify.getTrackInfo(trackId);
    const data = {
      profile: {
        id: user._id,
        name: user.name
      },
      track,
      createdTime: new Date().toISOString()
    };
    await db.get().collection('featured').insertOne(data);
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});

router.delete('/:featuredId', async (req, res) => {
  const {
    featuredId
  } = req.params;
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }

  const user = await db.get().collection('users').findOne({ _id: spotifyId });
  if (!user.isPromoter) {
    return res.status(401).json({ error: 'Not a Promoter' });
  }

  try {
    const resp = await db.get().collection('featured').deleteOne({ _id: ObjectId(featuredId) });
    return res.status(200).send('');
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
