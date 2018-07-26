"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const catalogsidebar_1 = require("./catalogsidebar/catalogsidebar");
const catalogcontent_1 = require("./catalogcontent/catalogcontent");
require("./catalog.scss");
class Catalog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "catalog-container" },
            React.createElement(catalogsidebar_1.default, null),
            React.createElement(catalogcontent_1.default, null)));
    }
}
exports.default = Catalog;
//# sourceMappingURL=catalog.js.map