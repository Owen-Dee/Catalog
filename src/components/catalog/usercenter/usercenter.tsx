import * as React from 'react';
import './usercenter.scss';

interface UserCenterStates {
    display: boolean,
    showCategory: boolean
}

export default class UserCenter extends React.Component<{}, UserCenterStates> {
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
            <div className="user-center">
                <div className="sidebar-item"
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onClick={this.handleClick.bind(this)}>
                    <img src={require('./img/user.svg')}
                        style={!this.state.display ? { display: 'block' } : { display: 'none' }} />
                    <img src={require('./img/user_light.svg')}
                        style={this.state.display ? { display: 'block' } : { display: 'none' }} />
                    <div className="mark-info"
                        style={this.state.display ? { display: 'flex' } : { display: 'none' }}>
                        用户中心
	                </div>
                </div>
                <div className="category-items"
                    style={this.state.showCategory ? { display: 'block' } : { display: 'none' }}>
                    <div className="item">我的收藏</div>
                    <div className="item">我的使用</div>
                    <div className="item">我的上传</div>
                </div>
            </div>
        );
    }
}