'use strict';

var _AuthService = require('../services/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authService = (0, _AuthService2.default)();

module.exports = {
    login: async function login(req, res) {
        try {
            var _req$body = req.body,
                kind = _req$body.kind,
                username = _req$body.username,
                password = _req$body.password;

            var loginInfo = await authService.login(kind, username, password);
            res.json(loginInfo);
        } catch (exception) {
            res.status(500).send(exception);
        }
    },
    register: async function register(req, res) {
        try {
            var _req$body2 = req.body,
                kind = _req$body2.kind,
                username = _req$body2.username,
                password = _req$body2.password;

            var result = await authService.register(kind, username, password);
            res.json(result);
        } catch (exception) {
            res.status(500).send('unable to register ' + exception);
        }
    }
};