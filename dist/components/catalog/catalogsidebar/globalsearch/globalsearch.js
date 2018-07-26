"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sidebaritem_1 = require("../../common/sidebaritem/sidebaritem");
const catalogentity_1 = require("../../../../entity/catalogentity");
require("./globalsearch.scss");
class GlobalSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let showCategories = this.props.sidebarType === catalogentity_1.CatalogSidebarType.GlobalSearch;
        return (React.createElement(sidebaritem_1.default, { sidebarMenuName: "\u5168\u5C40\u641C\u7D22", normalImg: "./search.svg", activeImg: "./search_light.svg", showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.GlobalSearch, isNotGlobalSearch: false, onSidebarTypeChange: this.props.onSidebarTypeChange }));
    }
}
exports.default = GlobalSearch;
//# sourceMappingURL=globalsearch.js.map