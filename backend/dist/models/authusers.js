'use strict';

var _mongodbservice = require('../services/mongodbservice');

var Schema = _mongodbservice.mongoose.Schema;

// const localAuthSchema = new Schema({
//     password: String,
// });
// const fbAuthSchema = new Schema({
//     uid: String,
// });
// const accountsSchema = new Schema({
//     local: localAuthSchema,
//     facebook: fbAuthSchema,
// });

var authSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    role: String,
    accounts: {
        local: {
            password: String
        }
    }
});

var AuthUsers = _mongodbservice.mongoose.model('AuthUsers', authSchema);
module.exports = AuthUsers;