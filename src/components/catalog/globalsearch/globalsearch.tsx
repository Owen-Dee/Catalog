import * as React from 'react';
import './globalsearch.scss';

interface GlobalSearchStates {
    display: boolean
}

export default class GlobalSearch extends React.Component<{}, GlobalSearchStates> {
    constructor(props) {
        super(props);
        this.state = {
            display: false
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
        alert('Hi, you enter global search...');
    }

    render() {
        return(
            <div className="sidebar-item"
                onMouseEnter={this.mouseEnter.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
                onClick={this.handleClick.bind(this)}>
                <img src={require('./img/search.svg')}
                    style={!this.state.display ? { display: 'block' } : { display: 'none' }} />
                <img src={require('./img/search_light.svg')}
                    style={this.state.display ? { display: 'block' } : { display: 'none' }} />
                <div className="mark-info"
                    style={this.state.display ? { display: 'flex' } : { display: 'none' }}>
                    全局渲染
                </div>
            </div>
        );
    }
}