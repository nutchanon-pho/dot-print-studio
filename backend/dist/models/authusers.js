'use strict';

var _mongodbservice = require('../services/mongodbservice');

var Schema = _mongodbservice.mongoose.Schema;


var localAuthSchema = new Schema({
    password: String
});
var fbAuthSchema = new Schema({
    uid: String
});
var accountsSchema = new Schema({
    local: localAuthSchema,
    facebook: fbAuthSchema
});
var authSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    role: String,
    accounts: accountsSchema
});

var AuthUsers = _mongodbservice.mongoose.model('AuthUsers', authSchema);
module.exports = AuthUsers;