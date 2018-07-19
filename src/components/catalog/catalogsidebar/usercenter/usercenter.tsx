import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import { ICatalogSidebarProps, CatalogSidebarType } from '../../../../entity/catalogentity';
import './usercenter.scss';

export default class UserCenter extends React.Component<ICatalogSidebarProps, any> {
    constructor(props) {
        super(props);
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
                    <div className="item">
                        <div className="first-menu-name menu-name">我的收藏</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">我的使用</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">我的上传</div>
                    </div>
                </div>
            </div>
        );
    }
}