const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const db = require('../db');
const { ObjectId } = require('mongodb');
const spotify = require('../spotify');

const router = new express.Router;

// All featured songs
router.get('/', async (req, res) => {
  console.log('Getting featured');
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }
  let featured = await db.get().collection('featured').find({});

  featured = await featured.toArray();
  console.log(featured);

  return res.json(featured);
});

// Create new featured song
router.post('/', async (req, res) => {
  console.log('Posting featured');
  const {
    spotifyId
  } = req.session;
  if (!spotifyId) {
    res.status(401).json({ error: 'Unauthenticated' });
    return;
  }
  const user = await db.get().collection('users').findOne({ _id: spotifyId });

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
  console.log('Deleting featured');
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

  try {
    const resp = await db.get().collection('featured').deleteOne({ _id: ObjectId(featuredId), forUserId: spotifyId });
    console.log(resp);
    return res.status(200).send('');
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});

module.exports = router;
