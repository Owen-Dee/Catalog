"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sidebarmenumap_1 = require("./sidebarmenumap");
require("./sidebarItem.scss");
class SidebarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
    }
    mouseEnter() {
        this.setState({
            display: true
        });
    }
    mouseLeave() {
        this.setState({
            display: false
        });
    }
    handleClick(sidebarType) {
        this.props.onSidebarTypeChange(sidebarType);
    }
    render() {
        let normalImg = sidebarmenumap_1.default[this.props.normalImg];
        let activeImg = sidebarmenumap_1.default[this.props.activeImg];
        let normalImgStyle = (!this.state.display && !this.props.showCategories)
            ? { display: 'block' }
            : { display: 'none' };
        let activeImgStyle = (this.state.display || this.props.showCategories)
            ? { display: 'block' }
            : { display: 'none' };
        let markInfoStyle = this.state.display
            ? { display: 'flex' }
            : { display: 'none' };
        let triangleStyle = this.props.showCategories && this.props.isNotGlobalSearch
            ? { display: 'block' }
            : { display: 'none' };
        return (React.createElement("div", { className: "sidebar-item", onMouseEnter: this.mouseEnter.bind(this), onMouseLeave: this.mouseLeave.bind(this), onClick: this.handleClick.bind(this, this.props.sidebarType) },
            React.createElement("img", { src: normalImg, style: normalImgStyle }),
            React.createElement("img", { src: activeImg, style: activeImgStyle }),
            React.createElement("div", { className: "mark-info", style: markInfoStyle }, this.props.sidebarMenuName),
            React.createElement("div", { className: "triangle-border-up", style: triangleStyle },
                React.createElement("span", null))));
    }
}
exports.default = SidebarItem;
//# sourceMappingURL=sidebaritem.js.map