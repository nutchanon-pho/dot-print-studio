'use strict';

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = require('../middlewares/passport');

var _passport2 = _interopRequireDefault(_passport);

var _AuthService = require('../services/AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authService = (0, _AuthService2.default)();

module.exports = {
    login: _passport2.default.authenticate('local', { session: false }),
    generateToken: function generateToken(req, res, next) {
        req.token = _jsonwebtoken2.default.sign({
            username: req.user.username
        }, 'server secret', {
            expiresIn: '1h'
        });
        next();
    },
    respond: function respond(req, res) {
        res.status(200).json({
            user: req.user,
            token: req.token
        });
    },
    register: async function register(req, res) {
        try {
            var _req$body = req.body,
                username = _req$body.username,
                password = _req$body.password;

            var result = await authService.register(username, password);
            res.json(result);
        } catch (exception) {
            res.status(500).send('unable to register ' + exception);
        }
    }
};