'use strict';

var _AuthService = require('../services/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authService = (0, _AuthService2.default)();

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
                    res.status(500).send('server error occured ' + err);
                });
            } catch (exception) {
                res.status(500).send(exception);
            }
        });

        app.post('/auth/register', function (req, res) {
            try {
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
            } catch (exception) {
                res.status(500).send(exception);
            }
        });
    }
};