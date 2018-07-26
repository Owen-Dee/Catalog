"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sidebaritem_1 = require("../../common/sidebaritem/sidebaritem");
const catalogcategory_1 = require("../../common/catalogcategory/catalogcategory");
const catalogentity_1 = require("../../../../entity/catalogentity");
const catalogservice_1 = require("../../utils/catalogservice");
require("./tenant.scss");
class Tenant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }
    componentWillMount() {
        let params = 'name=金螳螂.家4.0&depth=-1&tenant=jtljia&type=Common';
        let catalogService = catalogservice_1.default.getInstance();
        catalogService.getCategories(params).then(result => {
            if (!result.data || !result.data.items || result.data.items.length === 0) {
                return;
            }
            this.setState({
                categories: result.data.items[0].categories
            });
        });
    }
    render() {
        let tenant = 'jtljia';
        let normalImg, activeImg;
        if (tenant === 'jtljia') {
            normalImg = './' + tenant + '.svg';
            activeImg = './' + tenant + '_light.svg';
        }
        let showCategories = this.props.sidebarType === catalogentity_1.CatalogSidebarType.Tenant;
        return (React.createElement("div", { className: "tenant" },
            React.createElement(sidebaritem_1.default, { sidebarMenuName: "\u4F01\u4E1A\u5B9A\u5236", normalImg: normalImg, activeImg: activeImg, showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.Tenant, isNotGlobalSearch: true, onSidebarTypeChange: this.props.onSidebarTypeChange }),
            React.createElement(catalogcategory_1.default, { categories: this.state.categories, showCategories: showCategories, sidebarType: catalogentity_1.CatalogSidebarType.Tenant })));
    }
}
exports.default = Tenant;
//# sourceMappingURL=tenant.js.map