'use strict';

var _AuthService = require('../services/AuthService');

var authService = _interopRequireWildcard(_AuthService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    init: function init(app) {
        app.post('/auth/login', function (req, res) {
            try {
                var _req$body = req.body,
                    kind = _req$body.kind,
                    username = _req$body.username,
                    password = _req$body.password;

                var loginInfo = authService.login(kind, username, password);
                loginInfo.then(function (result) {
                    res.json(result);
                }).catch(function (err) {
                    res.status(500).send(err);
                });
            } catch (exception) {
                res.status(500).send();
            }
        });

        app.post('/auth/register', function (req, res) {
            var _req$body2 = req.body,
                kind = _req$body2.kind,
                username = _req$body2.username,
                password = _req$body2.password;

            var passwordHash = authService.register(kind, username, password);
            passwordHash.then(function (result) {
                res.send(result);
            }).catch(function (err) {
                res.status(500).send('unable to hash key ' + err);
            });
        });
    }
};