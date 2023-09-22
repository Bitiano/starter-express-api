"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _middlewares = require('./middlewares');

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, ));
app.use(_express.json.call(void 0, ));
app.use(_express.urlencoded.call(void 0, { extended: true }));

app.use('/api/v1', _routes2.default);

app.use(_middlewares.notFound)
app.use(_middlewares.errorHandler)

exports. default = app;
