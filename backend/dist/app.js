'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _passport = require('./middlewares/passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _HealthCheckRoutes = require('./routes/HealthCheckRoutes');

var _HealthCheckRoutes2 = _interopRequireDefault(_HealthCheckRoutes);

var _AuthRoutes = require('./routes/AuthRoutes');

var _AuthRoutes2 = _interopRequireDefault(_AuthRoutes);

var _UserRoutes = require('./routes/UserRoutes');

var _UserRoutes2 = _interopRequireDefault(_UserRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = _config2.default.get('port');

app.use((0, _helmet2.default)());
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_passport2.default.initialize());

// routes
app.use('/healthCheck', _HealthCheckRoutes2.default);
app.use('/auth', _AuthRoutes2.default);
app.use('/user', _UserRoutes2.default);

app.listen(port);