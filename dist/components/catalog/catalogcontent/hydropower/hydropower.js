"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const catalogconfig_1 = require("../../utils/catalogconfig");
let PerfectScrollbar = require('react-perfect-scrollbar');
require("react-perfect-scrollbar/dist/css/styles.css");
require("./hydropower.scss");
class Hydropower extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
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
        let hydropowerTools = catalogconfig_1.default.getHydropowerTools();
        let toolList = this.getToolsList(hydropowerTools);
        return (React.createElement("div", { className: "hydropower" },
            React.createElement(PerfectScrollbar, null, toolList)));
    }
}
exports.default = Hydropower;
//# sourceMappingURL=hydropower.js.map