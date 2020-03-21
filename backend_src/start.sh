#!/bin/bash
mongod --dbpath ./mongo/data/partify_db &
P1=$!
node ./http_api/app.js &
P2=$!
wait $P1 $P2
