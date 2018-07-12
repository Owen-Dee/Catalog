import * as React from 'react';
import GlobalSearch from '../globalsearch/globalsearch';
import FreeDesign from '../freedesign/freedesign';
import Tenant from '../tenant/tenant';
import MaterialLibrary from '../materiallibrary/materiallibrary';
import UserCenter from '../usercenter/usercenter';
import './catalogsidebar.scss';

export default class CatalogSidebar extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="catalog-sidebar">
                <GlobalSearch></GlobalSearch>
                <FreeDesign></FreeDesign>
                <Tenant></Tenant>
                <MaterialLibrary></MaterialLibrary>
                <UserCenter></UserCenter>
            </div>
        );
    }
}