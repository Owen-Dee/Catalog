import * as React from 'react';
import { ISidebarItemProps, ISidebarItemStates } from '../../../entity/componententity';
import SidebarMenuImgMap from './sidebarmenumap';
import './sidebarItem.scss';

export default class SidebarItem extends React.Component<ISidebarItemProps, ISidebarItemStates> {
    constructor(props: ISidebarItemProps) {
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
        let normalImg = SidebarMenuImgMap[this.props.normalImg];
        let activeImg = SidebarMenuImgMap[this.props.activeImg];
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

        return (
            <div className="sidebar-item"
                onMouseEnter={this.mouseEnter.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
                onClick={this.handleClick.bind(this, this.props.sidebarType)}>
                <img src={normalImg}
                    style={normalImgStyle} />
                <img src={activeImg}
                    style={activeImgStyle} />
                <div className="mark-info"
                    style={markInfoStyle}>
                    {this.props.sidebarMenuName}
	            </div>
                <div className="triangle-border-up"
                    style={triangleStyle}>
                    <span></span>
                </div>
            </div>
        );
    }
}