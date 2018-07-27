import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import { ICatalogSidebarProps, CatalogSidebarType, CatalogContentType } from '../../../../entity/catalogentity'
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import './freedesign.scss';

export default class FreeDesign extends React.Component<ICatalogSidebarProps, any> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
    }

    changeCatalogType(type: string) {
        store.dispatch(Actions.changeCatalogType(type));
    }

    handleSidebarTypeChange() {
        debugger
        this.props.onSidebarTypeChange(CatalogSidebarType.FreeDesign);
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.FreeDesign;

        return (
        	<div className="free-design">
                <SidebarItem sidebarMenuName="绘制户型"
                    normalImg="./design.svg"
                    activeImg="./design_light.svg"
                    showCategories={showCategories}
                    isNotGlobalSearch={true}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)}
                >
                </SidebarItem>
                <div className="category-items"
                    style={showCategories ? { display: 'block' } : { display: 'none' }}>
                    <div className="item" onClick={this.changeCatalogType.bind(this, CatalogContentType.HouseDesign)}>
                        <div className="first-menu-name menu-name">户型</div>
                    </div>
                    <div className="item" onClick={this.changeCatalogType.bind(this, CatalogContentType.Hydropower)}>
                        <div className="first-menu-name menu-name">水电</div>
                    </div>
	            </div>
        	</div>
        );
    }
}