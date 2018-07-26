"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sidebaritem_1 = require("../../common/sidebaritem/sidebaritem");
const catalogentity_1 = require("../../../../entity/catalogentity");
require("./usercenter.scss");
class UserCenter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let showCategories = this.props.sidebarType === catalogentity_1.CatalogSidebarType.UserCenter;
        return (React.createElement("div", { className: "user-center" },
            React.createElement(sidebaritem_1.default, { sidebarMenuName: "\u7528\u6237\u4E2D\u5FC3", normalImg: "./user.svg", activeImg: "./user_light.svg", showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.UserCenter, isNotGlobalSearch: true, onSidebarTypeChange: this.props.onSidebarTypeChange }),
            React.createElement("div", { className: "category-items", style: showCategories ? { display: 'block' } : { display: 'none' } },
                React.createElement("div", { className: "item" },
                    React.createElement("div", { className: "first-menu-name menu-name" }, "\u6211\u7684\u6536\u85CF")),
                React.createElement("div", { className: "item" },
                    React.createElement("div", { className: "first-menu-name menu-name" }, "\u6211\u7684\u4F7F\u7528")),
                React.createElement("div", { className: "item" },
                    React.createElement("div", { className: "first-menu-name menu-name" }, "\u6211\u7684\u4E0A\u4F20")))));
    }
}
exports.default = UserCenter;
//# sourceMappingURL=usercenter.js.map