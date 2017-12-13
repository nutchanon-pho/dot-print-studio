'use strict';

var _bcrypt = require('bcrypt');

var bcrypt = _interopRequireWildcard(_bcrypt);

var _Users = require('../models/Users');

var _Users2 = _interopRequireDefault(_Users);

var _MongoService = require('../services/MongoService');

var _MongoService2 = _interopRequireDefault(_MongoService);

var _UserService = require('../services/UserService');

var _UserService2 = _interopRequireDefault(_UserService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var saltRounds = 10;
var mongoService = (0, _MongoService2.default)();
var userService = (0, _UserService2.default)();

function returnUserDataFiltered(userData) {
    var _id = userData._id,
        username = userData.username,
        role = userData.role,
        details = userData.details,
        orders = userData.orders;

    var result = {
        _id: _id,
        username: username,
        role: role,
        details: details,
        orders: orders
    };
    return result;
}

module.exports = function () {
    return {
        login: async function login(username, inputPassword) {
            try {
                var queryResult = await userService.getUserData(username);
                if (queryResult != null) {
                    var password = queryResult.accounts.local.password;

                    var comparedPassword = await bcrypt.compare(inputPassword, password);
                    if (comparedPassword === true) {
                        var result = returnUserDataFiltered(queryResult);
                        return result;
                    }
                }
                return null;
            } catch (error) {
                throw error;
            }
        },
        register: async function register(username, password) {
            try {
                var checkUserExists = await userService.getUserData(username);
                if (checkUserExists != null) {
                    throw new Error('user ' + username + ' exists');
                }
                var hashResult = await bcrypt.hash(password, saltRounds);
                var user = {
                    username: username,
                    isActive: true,
                    role: 'user',
                    accounts: {
                        local: {
                            password: hashResult
                        }
                    }
                };
                var recordData = await mongoService.createRecord(_Users2.default, user);
                var result = returnUserDataFiltered(recordData);
                return result;
            } catch (error) {
                throw error;
            }
        }
    };
};