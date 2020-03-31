const mongoose = require('mongoose');

const BasicInfo	= mongoose.Schema({
  id: ObjectId,
  name: String,
  date: Date,
});

modules.exports = mongoose.Schema({
	 _id: ObjectId,
	 name: String,
	 joined: String,
	 spotifyId: String,
	 refreshToken: String,
	 accessToken: String,
	 friends: [{
     type: ObjectId,
     ref: 'UserModel'
   }],
	 playlists: [BasicInfo],
   favoriteTracks: [BasicInfo],
	 favoriteArtists: [BasicInfo],
	 favoriteAlbums: [BasicInfo],
	 favoriteGenres: [BasicInfo],
}, {collection: 'users'});
