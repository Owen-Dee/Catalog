"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const app_1 = require("./components/app/app");
const store_1 = require("./store");
require("./style/reset.scss");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(app_1.default, null)), document.querySelector('#app'));
//# sourceMappingURL=index.js.map