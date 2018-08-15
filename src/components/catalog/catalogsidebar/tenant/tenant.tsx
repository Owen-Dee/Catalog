import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import CatalogCategory from '../../common/catalogcategory/catalogcategory';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import { getCatalogModels } from '../../../../actions/catalog';
import { CatalogSidebarType, CatalogContentType } from '../../../../entity/catalogentity';
import CatalogService from '../../utils/catalogservice';
import './tenant.scss';
/**
 * @description: 组件Tenant对应的属性
 * @sidebarType: sidebar 类型
 * @onSidebarTypeChange: 监听sidebar 类型的改变
 */
interface ITenantProps {
    sidebarType: string,
    onSidebarTypeChange: (val) => void,
}
/**
 * @description: 组件Tenant对应的state
 * @sidebarType: sidebar 类型('字符串')
 */
interface ITenantStates {
    categories: Array<any>
}

export default class Tenant extends React.Component<ITenantProps, ITenantStates> {
    //保存子组件,用来调用子组件中的方法
    childComponet: any;
    constructor(props: ITenantProps) {
        super(props);
        this.state = {
            categories: []
        };
        this.childComponet = null;
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

    handleSidebarTypeChange() {
        //1.如果在[企业定制]下,点击[企业定制]按钮,不做任何改变
        if (this.props.sidebarType === CatalogSidebarType.Tenant) {
            return;
        }
        //2.如果不在[企业定制]下,点击[企业定制]按钮,[企业定制]按钮被激活
        this.props.onSidebarTypeChange(CatalogSidebarType.Tenant);
        //3.重置子组件[CatalogCategory]下拉按钮的激活状态
        let categoryId = '';
        if (this.state.categories.length > 0) {
            categoryId = this.state.categories[0].id;
            let activeMenuId = '',
                activeIndex = 0;
            this.childComponet.resetActiveMenu(activeMenuId, activeIndex);
        }
        //4.加载Catalog Content组件模板
        store.dispatch(Actions.changeCatalogType(CatalogContentType.CatalogModel));
        //5.通过随机数的变化,重置分页数据
        let random = Math.random();
        store.dispatch(Actions.resetCatalogPageIndex(random));
        //6.记录选中的分类id并获取Catalog的模型数据进行填充
        const tenant = 'jtljia', tenantOperator = 'Eq';
        store.dispatch(Actions.recordCatalogSearchConditions(categoryId, tenantOperator));
        let params = {
            categoryId: categoryId,
            pageIndex: 0,
            tenant: tenant,
            tenantOperator: tenantOperator
        };
        store.dispatch(getCatalogModels(params));
    }

    handleChangeCategoryId(categoryId: string, secondCategories: Array<any>) {
        //1.通过随机数的变化,重置分页数据
        let random = Math.random();
        store.dispatch(Actions.resetCatalogPageIndex(random));
        //2.记录选中的分类id并获取Catalog的模型数据进行填充
        // 并且记录category第二级之后的menu tree
        const tenant = 'jtljia', tenantOperator = 'Eq';
        store.dispatch(Actions.recordCatalogSearchConditions(categoryId, tenantOperator));
        store.dispatch(Actions.recordSecondCategories(secondCategories));
        let params = {
            categoryId: categoryId,
            pageIndex: 0,
            tenant: tenant,
            tenantOperator: tenantOperator
        };
        store.dispatch(getCatalogModels(params));
    }

    onRef(ref) {
        this.childComponet = ref;
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
                    isNotGlobalSearch={true}
                    onSidebarTypeChange={this.handleSidebarTypeChange.bind(this)}
                >
                </SidebarItem>
                <CatalogCategory categories={this.state.categories}
                    showCategories={showCategories}
                    onRef={this.onRef.bind(this)}
                    onChangeCategoryId={this.handleChangeCategoryId.bind(this)}>
                </CatalogCategory>
            </div>
        );
    }
}