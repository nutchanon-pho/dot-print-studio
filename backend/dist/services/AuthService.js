'use strict';

var _bcrypt = require('bcrypt');

var bcrypt = _interopRequireWildcard(_bcrypt);

var _authusers = require('../models/authusers');

var _authusers2 = _interopRequireDefault(_authusers);

var _mongodbservice = require('../services/mongodbservice');

var mongoDBService = _interopRequireWildcard(_mongodbservice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import Promise from 'promise';
var saltRounds = 10;

module.exports = {
    login: async function login(kind, username, inputPassword) {
        var query = {
            username: username
        };
        try {
            var queryResult = await mongoDBService.findMongo(_authusers2.default, query);
            var password = queryResult.accounts.local.password;

            var comparedPassword = await bcrypt.compare(inputPassword, password);
            if (comparedPassword === true) {
                return queryResult;
            }
            return {};
        } catch (error) {
            console.log('error loggin in');
            throw new Error(error);
        }
    },
    register: async function register(kind, username, password) {
        try {
            var hashResult = await bcrypt.hash(password, saltRounds);
            var user = {
                username: username,
                role: 'user',
                accounts: {
                    local: {
                        password: hashResult
                    }
                }
            };
            var createResult = mongoDBService.createRecord(_authusers2.default, user);
            return createResult;
        } catch (error) {
            throw new Error(error);
        }
    }
};