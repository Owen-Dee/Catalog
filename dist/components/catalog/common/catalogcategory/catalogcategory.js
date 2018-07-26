"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const catalogsubmenu_1 = require("../catalogsubmenu/catalogsubmenu");
const catalogentity_1 = require("../../../../entity/catalogentity");
const index_1 = require("../../../../store/index");
const Actions = require("../../../../actions/catalog");
const catalog_1 = require("../../../../actions/catalog");
let PerfectScrollbar = require('react-perfect-scrollbar');
require("react-perfect-scrollbar/dist/css/styles.css");
require("./catalogcategory.scss");
class CatalogCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuId: '',
            activeIndex: -1,
            menuIndex: -1,
            categories: [],
            submenuOffsetTop: '0px'
        };
    }
    getMenuList() {
        const menuList = this.props.categories.map((category, index) => {
            return React.createElement("div", { className: "item", key: category.id, onMouseEnter: this.handleFirstMenuEnter.bind(this, category, index) },
                React.createElement("div", { className: ['first-menu-name',
                        'menu-name',
                        this.state.activeIndex === index
                            ? 'active'
                            : ''].join(' '), onClick: this.handleFirstMenuClicked.bind(this, category, index) }, category.name),
                React.createElement("div", { className: "triangle-border-left", style: (this.state.menuIndex === index)
                        ? { display: 'block' }
                        : { display: 'none' } },
                    React.createElement("span", null)));
        });
        return (menuList);
    }
    handleFirstMenuClicked(category, activeIndex) {
        if (this.props.sidebarType === catalogentity_1.CatalogSidebarType.MaterialLibrary ||
            this.props.sidebarType === catalogentity_1.CatalogSidebarType.Tenant) {
            index_1.default.dispatch(Actions.changeCatalogType(catalogentity_1.CatalogContentType.CatalogModel));
        }
        this.setState({
            activeMenuId: category.id,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        index_1.default.dispatch(catalog_1.getCatalogModels(category.id));
    }
    handleFirstMenuEnter(category, index) {
        let categories = [];
        let menuIndex = -1;
        if (category.categories && category.categories.length > 0) {
            categories = category.categories;
            menuIndex = index;
        }
        let submenuOffsetTop = (40 * index) + 'px';
        this.setState({
            menuIndex: menuIndex,
            categories: categories,
            submenuOffsetTop: submenuOffsetTop
        });
    }
    handleCategoriesLeave() {
        this.setState({
            submenuOffsetTop: '0px',
            menuIndex: -1
        });
    }
    handleClickSubmenu(categoryId, activeIndex) {
        if (this.props.sidebarType === catalogentity_1.CatalogSidebarType.MaterialLibrary ||
            this.props.sidebarType === catalogentity_1.CatalogSidebarType.Tenant) {
            index_1.default.dispatch(Actions.changeCatalogType(catalogentity_1.CatalogContentType.CatalogModel));
        }
        this.setState({
            activeMenuId: categoryId,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        index_1.default.dispatch(catalog_1.getCatalogModels(categoryId));
    }
    render() {
        let menuList = this.getMenuList();
        return (React.createElement("div", { className: "category-items", style: this.props.showCategories ? { display: 'block' } : { display: 'none' }, onMouseLeave: this.handleCategoriesLeave.bind(this) },
            React.createElement(PerfectScrollbar, null, menuList),
            React.createElement(catalogsubmenu_1.default, { categories: this.state.categories, activeMenuId: this.state.activeMenuId, menuIndex: this.state.menuIndex, submenuOffsetTop: this.state.submenuOffsetTop, onSubmenuClick: this.handleClickSubmenu.bind(this) })));
    }
}
exports.default = CatalogCategory;
//# sourceMappingURL=catalogcategory.js.map