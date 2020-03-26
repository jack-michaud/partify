const express = require('express');
const cors = require('cors');
const playlistRouter = require('./routes/playlists');

const app = express();
app.use(cors);

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('<p>Available routes are <b>/playlists/:playlistId</b> and <b>/playlists/?q=QUERY</b></p>' +
    'Examples:<p>localhost:8080/playlists/1cvH9T0KtFcPwOYFPiPags</p>' +
    '<p>localhost:8080/playlists/?q=%22smooth%20jazz%22&type=playlist&market=US&limit=10&offset=5</p>');
});

app.use('/playlists', playlistRouter);

app.listen(process.env.PORT || 8080);
