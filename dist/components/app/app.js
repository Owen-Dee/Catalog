"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const navbar_1 = require("../navbar/navbar");
const catalog_1 = require("../catalog/catalog");
require("./app.scss");
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "app-container" },
            React.createElement(navbar_1.default, null),
            React.createElement(catalog_1.default, null)));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map