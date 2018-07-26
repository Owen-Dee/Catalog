"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const globalsearch_1 = require("./globalsearch/globalsearch");
const freedesign_1 = require("./freedesign/freedesign");
const tenant_1 = require("./tenant/tenant");
const materiallibrary_1 = require("./materiallibrary/materiallibrary");
const usercenter_1 = require("./usercenter/usercenter");
const catalogentity_1 = require("../../../entity/catalogentity");
require("./catalogsidebar.scss");
const index_1 = require("../../../store/index");
const Actions = require("../../../actions/catalog");
class CatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarType: catalogentity_1.CatalogSidebarType.GlobalSearch
        };
    }
    handleSidebarTypeChange(sidebarType) {
        this.setState({
            sidebarType: sidebarType
        });
        if (sidebarType === catalogentity_1.CatalogSidebarType.GlobalSearch) {
            index_1.default.dispatch(Actions.changeCatalogType(catalogentity_1.CatalogContentType.GlobalSearchMaterial));
        }
    }
    render() {
        return (React.createElement("div", { className: "catalog-sidebar" },
            React.createElement(globalsearch_1.default, { sidebarType: this.state.sidebarType, onSidebarTypeChange: this.handleSidebarTypeChange.bind(this) }),
            React.createElement(freedesign_1.default, { sidebarType: this.state.sidebarType, onSidebarTypeChange: this.handleSidebarTypeChange.bind(this) }),
            React.createElement(tenant_1.default, { sidebarType: this.state.sidebarType, onSidebarTypeChange: this.handleSidebarTypeChange.bind(this) }),
            React.createElement(materiallibrary_1.default, { sidebarType: this.state.sidebarType, onSidebarTypeChange: this.handleSidebarTypeChange.bind(this) }),
            React.createElement(usercenter_1.default, { sidebarType: this.state.sidebarType, onSidebarTypeChange: this.handleSidebarTypeChange.bind(this) })));
    }
}
exports.default = CatalogSidebar;
//# sourceMappingURL=catalogsidebar.js.map