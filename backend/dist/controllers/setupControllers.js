'use strict';

var _authusers = require('../models/authusers');

var _authusers2 = _interopRequireDefault(_authusers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for setup data purposes
module.exports = {
    setAdmin: function setAdmin(app) {
        app.get('/api/setupAuthUsers/admin', function (req, res) {
            // seed auth users data
            var adminUser = {
                firstname: 'admin',
                lastname: 'admin',
                username: 'paspro3@gmail.com',
                role: 'admin',
                accounts: {
                    local: {
                        kind: 'local',
                        username: 'admin',
                        password: 'dotprint123*'
                    }
                }
            };

            _authusers2.default.create(adminUser, function (err, result) {
                res.send(result);
            });
        });
    }
};