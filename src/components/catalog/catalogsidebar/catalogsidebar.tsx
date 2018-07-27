import * as React from 'react';
import GlobalSearch from './globalsearch/globalsearch';
import FreeDesign from './freedesign/freedesign';
import Tenant from './tenant/tenant';
import MaterialLibrary from './materiallibrary/materiallibrary';
import UserCenter from './usercenter/usercenter';
import { ICatalogSidebarStates, CatalogSidebarType } from '../../../entity/catalogentity';
import './catalogsidebar.scss';

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