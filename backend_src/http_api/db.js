const { MongoClient } = require('mongodb');

const state = {
  db: null,
  client: null
};

exports.connect = (url, done) => {
  if (state.db) return done();

  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if(err) return done(err);
    const dbName = process.env.MONGODB_URI.split('mongodb://').pop().split('/')[1];
    state.db = client.db(dbName);
    state.client = client;
    done();
  });
};

exports.get = () => {
  return state.db;
};
exports.getClient = () => {
  return state.client;
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
