"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
let PerfectScrollbar = require('react-perfect-scrollbar');
require("react-perfect-scrollbar/dist/css/styles.css");
require("./HeaderSearch.scss");
class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement("div", { className: "header-search" },
            React.createElement("div", { className: "search-control" },
                React.createElement("input", { className: "search-input", placeholder: "\u540D\u79F0" }),
                React.createElement("img", { src: require('./img/search.svg'), alt: "" })),
            React.createElement("div", { className: "select-conditions" },
                React.createElement("div", { className: "condition-item" },
                    React.createElement("div", { className: "name-control" },
                        React.createElement("div", { className: "name" }, "4.0\u5957\u9910"),
                        React.createElement("span", { className: "dot-bottom" }),
                        React.createElement("span", { className: "dot-top" })),
                    React.createElement("div", { className: "items" },
                        React.createElement(PerfectScrollbar, null,
                            React.createElement("div", { className: "item" }, "5.0\u5957\u9910"),
                            React.createElement("div", { className: "item" }, "4.0\u5957\u9910"),
                            React.createElement("div", { className: "item" }, "3.1\u5957\u9910"),
                            React.createElement("div", { className: "item" }, "3.0\u5957\u9910")))),
                React.createElement("div", { className: "condition-item" },
                    React.createElement("div", { className: "name-control" },
                        React.createElement("div", { className: "name" }, "\u74F7\u7816"),
                        React.createElement("span", { className: "dot-bottom" }),
                        React.createElement("span", { className: "dot-top" })),
                    React.createElement("div", { className: "items" },
                        React.createElement(PerfectScrollbar, null,
                            React.createElement("div", { className: "item" }, "\u74F7\u7816"),
                            React.createElement("div", { className: "item" }, "\u5165\u6237\u95E8\u5957"),
                            React.createElement("div", { className: "item" }, "\u7B52\u706F"),
                            React.createElement("div", { className: "item" }, "\u5730\u677F")))),
                React.createElement("div", { className: "condition-item" },
                    React.createElement("div", { className: "name-control" },
                        React.createElement("div", { className: "name" }, "\u6CE2\u6253\u7EBF"),
                        React.createElement("span", { className: "dot-bottom" }),
                        React.createElement("span", { className: "dot-top" })),
                    React.createElement("div", { className: "items" },
                        React.createElement(PerfectScrollbar, null,
                            React.createElement("div", { className: "item" }, "\u6CE2\u6253\u7EBF"),
                            React.createElement("div", { className: "item" }, "\u8FC7\u95E8\u77F3"),
                            React.createElement("div", { className: "item" }, "\u70DF\u9053"),
                            React.createElement("div", { className: "item" }, "\u77F3\u574E")))),
                React.createElement("div", { className: "expand-conditions" },
                    React.createElement("img", { src: require('./img/expand.svg'), className: "normal", alt: "" }),
                    React.createElement("img", { src: require('./img/expand-light.svg'), className: "light", alt: "" })))));
    }
}
exports.default = HeaderSearch;
//# sourceMappingURL=headersearch.js.map