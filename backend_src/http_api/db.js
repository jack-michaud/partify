const { MongoClient } = require('mongodb');

const state = {
  db: null,
};

exports.connect = (url, done) => {
  if (state.db) return done();

  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if(err) return done(err);
    // The name of the database is the username in the mongodb URI
    const dbName = process.env.MONGODB_URI.split('mongodb://').pop().split(':')[0];
    state.db = client.db(dbName);
    done();
  });
};

exports.get = () => {
  return state.db;
};

exports.close = (done) => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null;
      state.mode = null;
      done(err);
    });
  };
};
