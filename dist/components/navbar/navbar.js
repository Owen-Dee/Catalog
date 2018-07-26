"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./navbar.scss");
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "navbar-container" },
            React.createElement("span", { className: "title" }, "GoldMantis Navbar")));
    }
}
exports.default = Navbar;
//# sourceMappingURL=navbar.js.map