import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import { ICatalogSidebarProps, CatalogSidebarType } from '../../../entity/componententity';
import './globalsearch.scss';

export default class GlobalSearch extends React.Component<ICatalogSidebarProps, any> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.GlobalSearch;

        return(
            <SidebarItem sidebarMenuName="全局搜索"
                normalImg="./search.svg"
                activeImg="./search_light.svg"
                showCategories={showCategories}
                sidebarType={CatalogSidebarType.GlobalSearch}
                isNotGlobalSearch={false}
                onSidebarTypeChange={this.props.onSidebarTypeChange}
            >
            </SidebarItem>
        );
    }
}