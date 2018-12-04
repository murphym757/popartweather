"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _main = _interopRequireDefault(require("./app/components/main.js"));

var _bootstrapMin = _interopRequireDefault(require("../node_modules/bootstrap/dist/css/bootstrap.min.css"));

var _bootstrapGridMin = _interopRequireDefault(require("../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"));

var _bootstrapMin2 = _interopRequireDefault(require("../node_modules/bootstrap/dist/js/bootstrap.min.js"));

require("./app/assets/styles/styles.scss");

var _fonts = _interopRequireDefault(require("./app/assets/styles/fonts.scss"));

var _customBootstrap = _interopRequireDefault(require("./app/assets/styles/customBootstrap.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react.default.createElement(_main.default, null), document.getElementById("app"));