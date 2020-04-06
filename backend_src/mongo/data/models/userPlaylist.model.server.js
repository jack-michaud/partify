const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
modules.exports = mongoose.models('UserModel', userSchema);
