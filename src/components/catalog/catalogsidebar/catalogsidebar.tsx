import * as React from 'react';
import GlobalSearch from './globalsearch/globalsearch';
import FreeDesign from './freedesign/freedesign';
import Tenant from './tenant/tenant';
import MaterialLibrary from './materiallibrary/materiallibrary';
import UserCenter from './usercenter/usercenter';
import { ICatalogSidebarStates, CatalogSidebarType, CatalogContentType } from '../../../entity/catalogentity';
import './catalogsidebar.scss';

import store from '../../../store/index';
import * as Actions from '../../../actions/catalog';

import { getCatalogModels } from '../../../actions/catalog';

export default class CatalogSidebar extends React.Component<any, ICatalogSidebarStates> {
    constructor(props) {
        super(props);
        this.state = {
            sidebarType: CatalogSidebarType.GlobalSearch
        };
    }

    handleSidebarTypeChange(sidebarType) {
        this.setState({
            sidebarType: sidebarType
        });
        if (sidebarType === CatalogSidebarType.GlobalSearch) {
            store.dispatch(Actions.changeCatalogType(CatalogContentType.GlobalSearchMaterial));
            store.dispatch(getCatalogModels('1111'));
        }
    }

    render() {
        return(
            <div className="catalog-sidebar">
                <GlobalSearch sidebarType={this.state.sidebarType}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)} />
                <FreeDesign sidebarType={this.state.sidebarType}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)} />
                <Tenant sidebarType={this.state.sidebarType}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)} />
                <MaterialLibrary sidebarType={this.state.sidebarType}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)} />
                <UserCenter sidebarType={this.state.sidebarType}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)} />
            </div>
        );
    }
}