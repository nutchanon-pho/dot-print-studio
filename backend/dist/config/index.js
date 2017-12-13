'use strict';

var _nconf = require('nconf');

var _nconf2 = _interopRequireDefault(_nconf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'development') {
    _nconf2.default.file({ file: './config/config.json' });
}

module.exports = _nconf2.default;