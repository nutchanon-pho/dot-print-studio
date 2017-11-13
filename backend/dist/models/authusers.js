'use strict';

var _mongodbservice = require('../services/mongodbservice');

var _mongodbservice2 = _interopRequireDefault(_mongodbservice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongodbservice2.default.Schema;


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

var AuthUsers = _mongodbservice2.default.model('AuthUsers', authSchema);

module.exports = AuthUsers;