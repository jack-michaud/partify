
const axios = require('axios');
const auth = require('../auth');

const searchPlaylist = (query: string) => {
  const token = await auth.getToken();
  try {
    const { data } = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/search${query}`,
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
  } catch (err) {
    throw err;
  }

  return data;
}

const getPlaylistById = (playlistId: string) => {
  const token = await auth.getToken();
  try {
    const { data } = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/playlists/${playlistId}`,
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
  } catch (err) {
    throw err;
  }
  return data;
}


const getPlaylists = async ({ user, private }) => {
  if (private == null) {
    private = false;
  }
  
  if (private) {
    const { access_token } = await auth.refreshAccessToken(user.refreshToken);
    await db.get().collection('users').updateOne({ _id: user._id }, { $set: { accessToken: access_token } });
    try {
      const { data } = await axios({
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
          'Authorization': 'Bearer ' + access_token,
        }
      })
      return data.items.map(playlist => ({
        id: playlist.id,
        imageUrl: playlist.images[0].url,
        name: playlist.name,
      }));
    } catch (err) {
      throw err;
    }
  } else {
    token = await auth.getToken();
    try {
      const { data } = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/users/${user._id}/playlists`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
      })
      return data.items.map(playlist => ({
        id: playlist.id,
        imageUrl: playlist.images[0].url,
        name: playlist.name,
      }));
    } catch (err) {
      throw err
    }
  }
}

module.exports = {
  getPlaylistById,
  searchPlaylist,
  getPlaylists
}
