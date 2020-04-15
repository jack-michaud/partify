
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

module.exports = {
  getPlaylistById,
  searchPlaylist
}
