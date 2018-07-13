import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import { CatalogSidebarProps, CatalogSidebarStates, CatalogSidebarType } from '../../../entity/componententity';
import './usercenter.scss';

export default class UserCenter extends React.Component<CatalogSidebarProps, CatalogSidebarStates> {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.UserCenter;

        return (
            <div className="user-center">
                <SidebarItem sidebarMenuName="用户中心"
                    normalImg="./user.svg"
                    activeImg="./user_light.svg"
                    showCategories={showCategories}
                    sidebarType={CatalogSidebarType.UserCenter}
                    isNotGlobalSearch={true}
                    onSidebarTypeChange={this.props.onSidebarTypeChange}
                >
                </SidebarItem>
                <div className="category-items"
                    style={showCategories ? { display: 'block' } : { display: 'none' }}>
                    <div className="item">我的收藏</div>
                    <div className="item">我的使用</div>
                    <div className="item">我的上传</div>
                </div>
            </div>
        );
    }
}