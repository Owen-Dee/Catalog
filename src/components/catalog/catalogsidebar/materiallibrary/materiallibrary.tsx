import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import CatalogCategory from '../../common/catalogcategory/catalogcategory';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import { CatalogSidebarType, CatalogContentType } from '../../../../entity/catalogentity';
import { getCatalogModels } from '../../../../actions/catalog';
import CatalogService from '../../utils/catalogservice';
import './materiallibrary.scss';
/**
 * @description: 组件MaterialLibrary对应的属性
 * @sidebarType: sidebar 类型
 * @onSidebarTypeChange: 监听sidebar 类型的改变
 */
interface IMaterialLibraryProps {
    sidebarType: string,
    onSidebarTypeChange: (val) => void,
}
/**
 * @description: 组件MaterialLibrary对应的state
 * @sidebarType: sidebar 类型('字符串')
 */
interface IMaterialLibraryStates {
    categories: Array<any>
}

export default class MaterialLibrary extends React.Component<IMaterialLibraryProps, IMaterialLibraryStates> {
    //保存子组件,用来调用子组件中的方法
    childComponet: any;
    constructor(props: IMaterialLibraryProps) {
        super(props);
        this.state = {
            categories: [],
        };
        this.childComponet = null;
    }

    componentWillMount() {
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

    handleSidebarTypeChange() {
        //1.如果在[素材库]下,点击[素材库]按钮,不做任何改变
        if (this.props.sidebarType === CatalogSidebarType.MaterialLibrary) {
            return;
        }
        //2.如果不在[素材库]下,点击[素材库]按钮,[素材库]按钮被激活
        this.props.onSidebarTypeChange(CatalogSidebarType.MaterialLibrary);
        //3.重置子组件[CatalogCategory]下拉按钮的激活状态
        let categoryId = '';
        if (this.state.categories.length > 0) {
            categoryId = this.state.categories[1].id;
            let activeMenuId = '',
                activeIndex = 1;
            this.childComponet.resetActiveMenu(activeMenuId, activeIndex);
        }
        //4.加载Catalog Content组件模板
        store.dispatch(Actions.changeCatalogType(CatalogContentType.CatalogModel));
        //5.通过随机数的变化,重置分页数据
        let random = Math.random();
        store.dispatch(Actions.resetCatalogPageIndex(random));
        //6.记录选中的分类id并获取Catalog的模型数据进行填充
        const tenant = 'jtljia', tenantOperator = '!Eq';
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
        const tenant = 'jtljia', tenantOperator = '!Eq';
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
        let showCategories = this.props.sidebarType === CatalogSidebarType.MaterialLibrary;

        return (
            <div className="material-library">
                <SidebarItem sidebarMenuName="素材库"
                    normalImg="./material.svg"
                    activeImg="./material_light.svg"
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