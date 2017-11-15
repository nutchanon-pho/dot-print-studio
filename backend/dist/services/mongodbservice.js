'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _config = require('../config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

_mongoose2.default.Promise = _promise2.default;
_mongoose2.default.connect(config.getDbConnectionString(), options).then(function () {
    console.log('success');
}, function (err) {
    console.log('some fucking ' + err);
}).catch(function (err) {
    return console.log('yo man ' + err);
});

module.exports = {
    mongoose: _mongoose2.default,
    findOneMongo: async function findOneMongo(schema, query) {
        var projection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        try {
            return await schema.findOne(query, projection);
        } catch (error) {
            throw new Error('select error of mongo: ' + error);
        }
    },
    createRecord: async function createRecord(schema, statement) {
        try {
            return await schema.create(statement);
        } catch (error) {
            throw new Error('create record error of mongo: ' + error);
        }
    }
};