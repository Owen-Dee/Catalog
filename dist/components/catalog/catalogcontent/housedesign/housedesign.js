"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const catalogconfig_1 = require("../../utils/catalogconfig");
let PerfectScrollbar = require('react-perfect-scrollbar');
require("react-perfect-scrollbar/dist/css/styles.css");
require("./housedesign.scss");
class HouseDesign extends React.Component {
    constructor(props) {
        super(props);
    }
    getToolsList(designHouseTools) {
        const toolList = designHouseTools.map((toolObj) => {
            const itemList = this.getItemList(toolObj.children);
            return React.createElement("div", { className: "list-items", key: toolObj.id },
                React.createElement("div", { className: "title" }, toolObj.title),
                React.createElement("div", { className: "tools" }, itemList));
        });
        return (toolList);
    }
    getItemList(tools) {
        const itemList = tools.map((tool) => {
            return React.createElement("div", { className: "tool", key: tool.id },
                React.createElement("div", { className: "img-icon" },
                    React.createElement("img", { src: tool.img, alt: "" })),
                React.createElement("div", { className: "name" }, tool.title));
        });
        return (itemList);
    }
    render() {
        let designHouseTools = catalogconfig_1.default.getDesignHouseTools();
        let toolList = this.getToolsList(designHouseTools);
        return (React.createElement("div", { className: "house-design" },
            React.createElement(PerfectScrollbar, null,
                React.createElement("div", { className: "upload-house" },
                    React.createElement("img", { src: require('./img/upload.svg'), className: "normal-img" }),
                    React.createElement("img", { src: require('./img/upload_light.svg'), className: "active-img" }),
                    React.createElement("div", { className: "name" }, "\u4E0A\u4F20\u6237\u578B\u63CF\u6479\u56FE")),
                toolList)));
    }
}
exports.default = HouseDesign;
//# sourceMappingURL=housedesign.js.map