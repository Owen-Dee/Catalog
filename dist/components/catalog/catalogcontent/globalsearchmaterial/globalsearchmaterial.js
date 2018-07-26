"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./globalsearchmaterial.scss");
class Hydropower extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render() {
        return (React.createElement("div", { className: "global-search-material" },
            React.createElement("div", { className: "search-control" },
                React.createElement("input", { className: "search-input", placeholder: "\u5168\u5C40\u641C\u7D22" }),
                React.createElement("img", { src: require('./img/search.svg'), alt: "" })),
            React.createElement("div", { className: "recently-search" },
                React.createElement("div", { className: "title" }, "\u6700\u8FD1\u641C\u7D22"),
                React.createElement("div", { className: "items" },
                    React.createElement("div", { className: "item" }, "\u7A97"),
                    React.createElement("div", { className: "item" }, "\u5E2D\u68A6\u601D"),
                    React.createElement("div", { className: "item" }, "\u6C99\u53D1"),
                    React.createElement("div", { className: "item" }, "\u7EC4\u5408\u5730\u677F"),
                    React.createElement("div", { className: "item" }, "\u91D1\u87B3\u8782\u4E13\u7528\u5730\u677F")))));
    }
}
exports.default = Hydropower;
//# sourceMappingURL=globalsearchmaterial.js.map