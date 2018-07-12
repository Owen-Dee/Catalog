import * as React from 'react';
import './materiallibrary.scss';

interface MaterialLibraryStates {
    display: boolean,
    showCategory: boolean
}

export default class MaterialLibrary extends React.Component<{}, MaterialLibraryStates> {
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
        return (
            <div className="material-library">
                <div className="sidebar-item"
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onClick={this.handleClick.bind(this)}>
                    <img src={require('./img/quplus.svg')}
                        style={!this.state.display ? { display: 'block' } : { display: 'none' }} />
                    <img src={require('./img/quplus_light.svg')}
                        style={this.state.display ? { display: 'block' } : { display: 'none' }} />
                    <div className="mark-info"
                        style={this.state.display ? { display: 'flex' } : { display: 'none' }}>
                        素材库
	                </div>
                </div>
                <div className="category-items"
                    style={this.state.showCategory ? { display: 'block' } : { display: 'none' }}>
                    <div className="item">硬装</div>
                    <div className="item">家具</div>
                    <div className="item">家饰</div>
                    <div className="item">厨卫</div>
                    <div className="item">家电</div>
                    <div className="item">照明</div>
                    <div className="item">材料</div>
                </div>
            </div>
        );
    }
}