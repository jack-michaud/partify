const mongoose = require('mongoose');
modules.exports = mongoose.Schema({
	 _id: Number,
	 name: String,
	 joined: Number,
	 spotifyId: String,
	 refreshToken: String,
	 accessToken: String,
	 friends: [{
     type: Number,
     ref: 'UserModel'
   }],
	 /*
	 playlists: [{
     type: Number,
     ref: 'PlaylistModel'
   }],
   favoriteTracks: [{
     type: Number,
     ref: 'TrackModel'
   }],
	 favoriteArtists: [{
     type: Number,
     ref: 'ArtistModel'
   }],
	 favoriteAlbums: [{
     type: Number,
     ref: 'AlbumModel'
   }],
	 favoriteGenres: [{
     type: Number,
     ref: 'GenreModel'
   }],
	 */
}, {collection: 'users'});
