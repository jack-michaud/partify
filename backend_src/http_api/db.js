const { MongoClient } = require('mongodb');

let db = null;

exports.connect = (url, done) => {
  if (db) return done();

  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if(err) return done(err);
    // The name of the database is the username in the mongodb URI
    const dbName = process.env.MONGODB_URI.split('mongodb://').pop().split(':')[0];
    db = client.db(dbName);
    done();
  });
};

exports.get = () => {
  return db;
};
