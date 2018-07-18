import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import CatalogCategory from '../catalogcategory/catalogcategory';
import { ICatalogSidebarProps, ICatalogModelStates, CatalogSidebarType } from '../../../entity/componententity';
import CatalogService from '../../../api/catalogservice';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './materiallibrary.scss';

export default class MaterialLibrary extends React.Component<ICatalogSidebarProps, ICatalogModelStates> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        let categories = [];
        let params = 'name=__all__&depth=-1&tenant=qu&type=Common';
        let catalogService = CatalogService.getInstance();
        catalogService.getCategories(params).then(result=> {
            if (!result.data || !result.data.items || result.data.items.length === 0) {
                return;
            }

            this.setState({
                categories: result.data.items
            });
        });
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.MaterialLibrary;

        return (
            <div className="material-library">
                <SidebarItem sidebarMenuName="素材库"
                    normalImg="./material.svg"
                    activeImg="./material_light.svg"
                    showCategories={showCategories}
                    sidebarType={CatalogSidebarType.MaterialLibrary}
                    isNotGlobalSearch={true}
                    onSidebarTypeChange={this.props.onSidebarTypeChange}
                >
                </SidebarItem>
                <CatalogCategory categories={this.state.categories}
                    showCategories={showCategories}>
                </CatalogCategory>
            </div>
        );
    }
}