import * as React from 'react';
import './tenant.scss';

interface TenantStates {
    display: boolean,
    showCategory: boolean
}

export default class Tenant extends React.Component<{}, TenantStates> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            showCategory: false
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

    handleClick() {
        this.setState({
            showCategory: !this.state.showCategory
        });
    }

    render() {
        let tenant = 'jtljia';
        let normalImg , activeImg;
        if (tenant === 'jtljia') {
            normalImg = require('./img/' + tenant + '.svg');
            activeImg = require('./img/' + tenant + '_light.svg');
        }

        return (
            <div className="tenant">
                <div className="sidebar-item"
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onClick={this.handleClick.bind(this)}>
                    <img src={normalImg}
                        style={!this.state.display ? { display: 'block' } : { display: 'none' }} />
                    <img src={activeImg}
                        style={this.state.display ? { display: 'block' } : { display: 'none' }} />
                    <div className="mark-info"
                        style={this.state.display ? { display: 'flex' } : { display: 'none' }}>
                        企业定制
	                </div>
                </div>
                <div className="category-items"
                    style={this.state.showCategory ? { display: 'block' } : { display: 'none' }}>
                    <div className="item">软装包</div>
                    <div className="item">客餐厅</div>
                    <div className="item">卧室</div>
                    <div className="item">厨卫</div>
                    <div className="item">阳台</div>
                    <div className="item">其他</div>
                </div>
            </div>
        );
    }
}