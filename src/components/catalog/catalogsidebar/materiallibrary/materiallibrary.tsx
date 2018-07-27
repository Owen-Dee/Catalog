import * as React from 'react';
import SidebarItem from '../../common/sidebaritem/sidebaritem';
import CatalogCategory from '../../common/catalogcategory/catalogcategory';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import { ICatalogSidebarProps, ICatalogModelStates, CatalogSidebarType, CatalogContentType } from '../../../../entity/catalogentity';
import { getCatalogModels } from '../../../../actions/catalog';
import CatalogService from '../../utils/catalogservice';
import './materiallibrary.scss';

export default class MaterialLibrary extends React.Component<ICatalogSidebarProps, ICatalogModelStates> {
    //保存子组件,用来调用子组件中的方法
    childComponet: any;
    constructor(props: ICatalogSidebarProps) {
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
        store.dispatch(Actions.recordSelectedCategoryId(categoryId));
        let params = {
            categoryId: categoryId,
            pageIndex: 0
        };
        store.dispatch(getCatalogModels(params));
    }

    handleChangeCategoryId(categoryId) {
        //1.通过随机数的变化,重置分页数据
        let random = Math.random();
        store.dispatch(Actions.resetCatalogPageIndex(random));
        //2.记录选中的分类id并获取Catalog的模型数据进行填充
        store.dispatch(Actions.recordSelectedCategoryId(categoryId));
        let params = {
            categoryId: categoryId,
            pageIndex: 0
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