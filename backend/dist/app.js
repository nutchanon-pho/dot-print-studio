'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _AuthControllers = require('./controllers/AuthControllers');

var authController = _interopRequireWildcard(_AuthControllers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

// need to seperate middleware here
app.use((0, _helmet2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _compression2.default)());

// need to seperate routes here
authController.init(app);

app.get('/ping', function (req, res) {
    res.send('pong');
});

app.listen(port);