const mongoose = require('mongoose');

modules.exports = mongoose.Schema({
  _id: String,
  owner: String,
  collaborators: [String],
}, {collection: 'userPlaylists'});
