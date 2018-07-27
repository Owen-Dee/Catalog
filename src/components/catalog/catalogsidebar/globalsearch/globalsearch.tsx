import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import { ICatalogSidebarProps, CatalogSidebarType, CatalogContentType } from '../../../../entity/catalogentity';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import './globalsearch.scss';

export default class GlobalSearch extends React.Component<ICatalogSidebarProps, any> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
    }

    handleSidebarTypeChange() {
        this.props.onSidebarTypeChange(CatalogSidebarType.GlobalSearch);
        store.dispatch(Actions.changeCatalogType(CatalogContentType.GlobalSearchMaterial));
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.GlobalSearch;

        return(
            <SidebarItem sidebarMenuName="全局搜索"
                normalImg="./search.svg"
                activeImg="./search_light.svg"
                showCategories={showCategories}
                isNotGlobalSearch={false}
                onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)}
            >
            </SidebarItem>
        );
    }
}