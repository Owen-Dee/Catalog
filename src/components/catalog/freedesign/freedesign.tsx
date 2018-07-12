import * as React from 'react';
import './freedesign.scss';

interface FreeDesignStates {
    display: boolean,
    showCategory: boolean
}

export default class FreeDesign extends React.Component<{}, FreeDesignStates> {
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
        	<div className="free-design">
	            <div className="sidebar-item"
	                onMouseEnter={this.mouseEnter.bind(this)}
	                onMouseLeave={this.mouseLeave.bind(this)}
	                onClick={this.handleClick.bind(this)}>
	                <img src={require('./img/design.svg')}
	                    style={!this.state.display ? { display: 'block' } : { display: 'none' }} />
	                <img src={require('./img/design_light.svg')}
	                    style={this.state.display ? { display: 'block' } : { display: 'none' }} />
	                <div className="mark-info"
	                    style={this.state.display ? { display: 'flex' } : { display: 'none' }}>
	                    绘制户型
	                </div>
	            </div>
                <div className="category-items"
                    style={this.state.showCategory ? { display: 'block' } : { display: 'none' }}>
	            	<div className="item">户型</div>
	            	<div className="item">水电</div>
	            </div>
        	</div>
        );
    }
}