"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
let PerfectScrollbar = require('react-perfect-scrollbar');
require("react-perfect-scrollbar/dist/css/styles.css");
require("./catalogsubmenu.scss");
class CatalogSubmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuId: ''
        };
    }
    getSubmenuList() {
        const submenuList = this.props.categories.map((category) => {
            let thirdMenuList = this.getThirdMenuList(category);
            let isMenuActive = this.props.activeMenuId === this.state.activeMenuId && this.state.activeMenuId === category.id;
            return React.createElement("div", { className: "second-menu", key: category.id },
                React.createElement("div", { className: ['second-menu-name',
                        'menu-name',
                        isMenuActive ? 'active' : ''].join(' '), onClick: this.handleSubmenuClicked.bind(this, category) }, category.name),
                React.createElement("div", { className: "third-menu" }, thirdMenuList));
        });
        return (submenuList);
    }
    getThirdMenuList(category) {
        const thirdMenuList = category.categories.map((item) => {
            let isMenuActive = this.props.activeMenuId === this.state.activeMenuId && this.state.activeMenuId === item.id;
            return React.createElement("div", { className: ['third-menu-name',
                    'menu-name',
                    isMenuActive ? 'active' : ''].join(' '), key: item.id, onClick: this.handleSubmenuClicked.bind(this, item) }, item.name);
        });
        return (thirdMenuList);
    }
    handleSubmenuClicked(category) {
        this.setState({
            activeMenuId: category.id
        });
        this.props.onSubmenuClick(category.id, this.props.menuIndex);
    }
    render() {
        let submenuList = this.getSubmenuList();
        let displayStyle = this.props.menuIndex > -1 ? 'block' : 'none';
        return (React.createElement("div", { className: "category-submenu", style: { top: this.props.submenuOffsetTop, display: displayStyle } },
            React.createElement(PerfectScrollbar, null, submenuList)));
    }
}
exports.default = CatalogSubmenu;
//# sourceMappingURL=catalogsubmenu.js.map