import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import { CatalogSidebarProps, CatalogSidebarStates, CatalogSidebarType } from '../../../entity/componententity';
import './tenant.scss';

export default class Tenant extends React.Component<CatalogSidebarProps, CatalogSidebarStates> {
    constructor(props: CatalogSidebarProps) {
        super(props);
        this.state = {
            display: false
        };
    }

    render() {
        let tenant = 'jtljia';
        let normalImg , activeImg;
        if (tenant === 'jtljia') {
            normalImg = './' + tenant + '.svg';
            activeImg = './' + tenant + '_light.svg';
        }

        let showCategories = this.props.sidebarType === CatalogSidebarType.Tenant;

        return (
            <div className="tenant">
                <SidebarItem sidebarMenuName="企业定制"
                    normalImg={normalImg}
                    activeImg={activeImg}
                    showCategories={showCategories}
                    sidebarType={CatalogSidebarType.Tenant}
                    isNotGlobalSearch={true}
                    onSidebarTypeChange={this.props.onSidebarTypeChange}
                >
                </SidebarItem>
                <div className="category-items"
                    style={showCategories ? { display: 'block' } : { display: 'none' }}>
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