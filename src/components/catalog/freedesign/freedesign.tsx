import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import { ICatalogSidebarProps, CatalogSidebarType } from '../../../entity/componententity'
import './freedesign.scss';

export default class FreeDesign extends React.Component<ICatalogSidebarProps, any> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.FreeDesign;

        return (
        	<div className="free-design">
                <SidebarItem sidebarMenuName="绘制户型"
                    normalImg="./design.svg"
                    activeImg="./design_light.svg"
                    showCategories={showCategories}
                    sidebarType={CatalogSidebarType.FreeDesign}
                    isNotGlobalSearch={true}
                    onSidebarTypeChange={this.props.onSidebarTypeChange}
                >
                </SidebarItem>
                <div className="category-items"
                    style={showCategories ? { display: 'block' } : { display: 'none' }}>
	            	<div className="item">
                        <div className="first-menu-name menu-name">户型</div>
                    </div>
	            	<div className="item">
                        <div className="first-menu-name menu-name">水电</div>
                    </div>
	            </div>
        	</div>
        );
    }
}