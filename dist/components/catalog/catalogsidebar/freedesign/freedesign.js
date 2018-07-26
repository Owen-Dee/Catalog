"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sidebaritem_1 = require("../../common/sidebaritem/sidebaritem");
const catalogentity_1 = require("../../../../entity/catalogentity");
const index_1 = require("../../../../store/index");
const Actions = require("../../../../actions/catalog");
require("./freedesign.scss");
class FreeDesign extends React.Component {
    constructor(props) {
        super(props);
    }
    changeCatalogType(type) {
        index_1.default.dispatch(Actions.changeCatalogType(type));
    }
    render() {
        let showCategories = this.props.sidebarType === catalogentity_1.CatalogSidebarType.FreeDesign;
        return (React.createElement("div", { className: "free-design" },
            React.createElement(sidebaritem_1.default, { sidebarMenuName: "\u7ED8\u5236\u6237\u578B", normalImg: "./design.svg", activeImg: "./design_light.svg", showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.FreeDesign, isNotGlobalSearch: true, onSidebarTypeChange: this.props.onSidebarTypeChange }),
            React.createElement("div", { className: "category-items", style: showCategories ? { display: 'block' } : { display: 'none' } },
                React.createElement("div", { className: "item", onClick: this.changeCatalogType.bind(this, catalogentity_1.CatalogContentType.HouseDesign) },
                    React.createElement("div", { className: "first-menu-name menu-name" }, "\u6237\u578B")),
                React.createElement("div", { className: "item", onClick: this.changeCatalogType.bind(this, catalogentity_1.CatalogContentType.Hydropower) },
                    React.createElement("div", { className: "first-menu-name menu-name" }, "\u6C34\u7535")))));
    }
}
exports.default = FreeDesign;
//# sourceMappingURL=freedesign.js.map