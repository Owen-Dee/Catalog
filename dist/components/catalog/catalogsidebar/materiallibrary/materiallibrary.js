"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sidebaritem_1 = require("../../common/sidebaritem/sidebaritem");
const catalogcategory_1 = require("../../common/catalogcategory/catalogcategory");
const catalogentity_1 = require("../../../../entity/catalogentity");
const catalogservice_1 = require("../../utils/catalogservice");
require("./materiallibrary.scss");
class MaterialLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }
    componentWillMount() {
        let params = 'name=__all__&depth=-1&tenant=qu&type=Common';
        let catalogService = catalogservice_1.default.getInstance();
        catalogService.getCategories(params).then(result => {
            if (!result.data || !result.data.items || result.data.items.length === 0) {
                return;
            }
            this.setState({
                categories: result.data.items
            });
        });
    }
    render() {
        let showCategories = this.props.sidebarType === catalogentity_1.CatalogSidebarType.MaterialLibrary;
        return (React.createElement("div", { className: "material-library" },
            React.createElement(sidebaritem_1.default, { sidebarMenuName: "\u7D20\u6750\u5E93", normalImg: "./material.svg", activeImg: "./material_light.svg", showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.MaterialLibrary, isNotGlobalSearch: true, onSidebarTypeChange: this.props.onSidebarTypeChange }),
            React.createElement(catalogcategory_1.default, { categories: this.state.categories, showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.MaterialLibrary })));
    }
}
exports.default = MaterialLibrary;
//# sourceMappingURL=materiallibrary.js.map