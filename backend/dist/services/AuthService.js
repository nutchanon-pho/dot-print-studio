'use strict';

var _bcrypt = require('bcrypt');

var bcrypt = _interopRequireWildcard(_bcrypt);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _authusers = require('../models/authusers');

var _authusers2 = _interopRequireDefault(_authusers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var saltRounds = 10;

module.exports = {
    login: function login(kind, username, inputPassword) {
        return new _promise2.default(function (resolve, reject) {
            var query = {
                username: username
            };
            console.log(query);
            _authusers2.default.find(query, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    console.log(result.local);
                    var password = result.accounts.local.password;

                    bcrypt.compare(inputPassword, password).then(function (res) {
                        if (res === true) {
                            resolve(result);
                        }
                        reject(err);
                    });
                    resolve(result);
                }
            });
        });
    },

    register: function register(kind, username, password) {
        return new _promise2.default(function (resolve, reject) {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) {
                    reject(err);
                } else {
                    var user = {
                        username: username,
                        role: 'user',
                        accounts: {
                            local: {
                                password: hash
                            }
                        }
                    };
                    _authusers2.default.create(user, function (authError, result) {
                        if (authError) {
                            reject(authError);
                        } else if (result) {
                            resolve(hash);
                        }
                    });
                }
            });
        });
    }
};