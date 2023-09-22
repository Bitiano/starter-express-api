"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _authroutes = require('./modules/auth/auth.routes'); var _authroutes2 = _interopRequireDefault(_authroutes);
var _userroutes = require('./modules/users/user.routes'); var _userroutes2 = _interopRequireDefault(_userroutes);
var _eventsroutes = require('./modules/events/events.routes'); var _eventsroutes2 = _interopRequireDefault(_eventsroutes);
var _middlewares = require('./middlewares');

const routes = _express.Router.call(void 0, );

routes.use('/auth', _authroutes2.default)
routes.use('/users', _userroutes2.default)
routes.use('/events', _middlewares.isAuthenticated, _eventsroutes2.default)

exports. default = routes;