const db = require('../db.js');
const express = require('express');
const cors = require('cors');

const router = new express.Router;
router.use(cors());

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
