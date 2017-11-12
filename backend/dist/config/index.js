'use strict';

var _config = require('./config.json');

var configValues = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
    getDbConnectionString: function getDbConnectionString() {
        return 'mongodb://' + configValues.host + ':' + configValues.port;
    }
};