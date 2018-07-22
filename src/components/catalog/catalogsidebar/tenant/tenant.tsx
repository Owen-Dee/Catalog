import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import CatalogCategory from '../../common/catalogcategory/catalogcategory';
import { ICatalogSidebarProps, ICatalogModelStates, CatalogSidebarType } from '../../../../entity/catalogentity';
import CatalogService from '../../../../api/catalogservice';
import './tenant.scss';

export default class Tenant extends React.Component<ICatalogSidebarProps, ICatalogModelStates> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        let params = 'name=金螳螂.家4.0&depth=-1&tenant=jtljia&type=Common';
        let catalogService = CatalogService.getInstance();
        catalogService.getCategories(params).then(result => {
            if (!result.data || !result.data.items || result.data.items.length === 0) {
                return;
            }

            this.setState({
                categories: result.data.items[0].categories
            });
        });
    }

    render() {
        let tenant = 'jtljia';
        let normalImg, activeImg;
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
                <CatalogCategory categories={this.state.categories}
                    showCategories={showCategories}
                    sidebarType={CatalogSidebarType.Tenant}>
                </CatalogCategory>
            </div>
        );
    }
}