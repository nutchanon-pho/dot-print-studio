'use strict';

var _bcrypt = require('bcrypt');

var bcrypt = _interopRequireWildcard(_bcrypt);

var _Users = require('../models/Users');

var _Users2 = _interopRequireDefault(_Users);

var _MongoService = require('../services/MongoService');

var _MongoService2 = _interopRequireDefault(_MongoService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var saltRounds = 10;
var mongoService = (0, _MongoService2.default)();

module.exports = function () {
    return {
        login: async function login(kind, username, inputPassword) {
            var query = {
                username: username
            };
            try {
                var queryResult = await mongoService.findOneMongo(_Users2.default, query);
                var role = queryResult.role;
                var password = queryResult.accounts.local.password;

                var comparedPassword = await bcrypt.compare(inputPassword, password);
                var result = {
                    username: username,
                    role: role
                };
                if (comparedPassword === true) {
                    return result;
                }
                return {};
            } catch (error) {
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
                return mongoService.createRecord(_Users2.default, user);
            } catch (error) {
                throw new Error(error);
            }
        }
    };
};