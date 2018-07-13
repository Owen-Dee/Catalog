import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import { CatalogSidebarProps, CatalogSidebarStates, CatalogSidebarType } from '../../../entity/componententity'
import './freedesign.scss';

export default class FreeDesign extends React.Component<CatalogSidebarProps, CatalogSidebarStates> {
    constructor(props: CatalogSidebarProps) {
        super(props);
        this.state = {
            display: false,
        };
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
	            	<div className="item">户型</div>
	            	<div className="item">水电</div>
	            </div>
        	</div>
        );
    }
}