import * as React from 'react';
import CatalogSubmenu from '../catalogsubmenu/catalogsubmenu';
let PerfectScrollbar = require('react-perfect-scrollbar');
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './catalogcategory.scss';

/**
 * @description: catalog模型的分类属性
 * @showCategories: 是否显示下拉分类
 * @categories: 分类数据
 */
export interface ICatalogCategoryProps {
    showCategories: boolean,
    categories: Array<any>,
    onChangeCategoryId: (val1, val2?) => void,
    onRef?: (val) => void
}
/**
 * @description: 后台接口获取的category分类,涉及的状态
 * @activeMenuId: 按钮被点击后,记录category id
 * @activeIndex: 按钮被点击激活状态
 * @menuIndex: 鼠标放在按钮上的激活状态
 * @categories: 二级菜单对应的数据
 * @submenuOffsetTop: 二级菜单对应的top值
 */
export interface ICatalogCategoryStates {
    activeMenuId: string,
    activeIndex: number,
    menuIndex: number,
    categories: Array<any>,
    submenuOffsetTop: string
}

export default class CatalogCategory extends React.Component<ICatalogCategoryProps, ICatalogCategoryStates> {
    constructor(props: ICatalogCategoryProps) {
        super(props);
        this.state = {
            activeMenuId: '',
            activeIndex: -1,
            menuIndex: -1,
            categories: [],
            submenuOffsetTop: '0px'
        };
    }

    resetActiveMenu(activeMenuId: string, activeIndex: number) {
        this.setState({
            activeMenuId: activeMenuId,
            activeIndex: activeIndex,
        });
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    getMenuList() {
        const menuList = this.props.categories.map((category, index) => {
            let isActive = this.state.activeIndex === index;
            return <div className="item" key={category.id}
                onMouseEnter={this.handleFirstMenuEnter.bind(this, category, index)}>
                <div className={['first-menu-name',
                                'menu-name',
                                isActive ? 'active' : ''].join(' ')}
                    onClick={this.handleFirstMenuClicked.bind(this, category, index)}>
                    {category.name}
                </div>
                <div className="triangle-border-left"
                    style={(this.state.menuIndex === index)
                        ? { display: 'block' }
                        : { display: 'none' }}>
                    <span></span>
                </div>
            </div>
        });

        return (
            menuList
        );
    }

    handleFirstMenuClicked(category, activeIndex) {
        this.setState({
            activeMenuId: category.id,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        let secondCategories = category.categories ? category.categories : [];
        this.props.onChangeCategoryId(category.id, [...secondCategories]);
    }

    handleFirstMenuEnter(category, index) {
        let categories = [];
        let menuIndex = -1;
        if (category.categories && category.categories.length > 0) {
            categories = category.categories;
            menuIndex = index;
        }

        let submenuOffsetTop = (40 * index) + 'px';
        this.setState({
            menuIndex: menuIndex,
            categories: categories,
            submenuOffsetTop: submenuOffsetTop
        });
    }

    handleCategoriesLeave() {
        this.setState({
            submenuOffsetTop: '0px',
            menuIndex: -1
        });
    }

    handleClickSubmenu(categoryId: string, activeIndex: number) {
        this.setState({
            activeMenuId: categoryId,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        let activeCategory = this.props.categories[activeIndex];
        let secondCategories = activeCategory.categories ? activeCategory.categories : [];
        this.props.onChangeCategoryId(categoryId, [...secondCategories]);
    }

    render() {
        let menuList = this.getMenuList();

        return (
            <div className="category-items"
                style={this.props.showCategories ? { display: 'block'} : { display: 'none' }}
                onMouseLeave={this.handleCategoriesLeave.bind(this)}>
                <PerfectScrollbar>
                    {menuList}
                </PerfectScrollbar>
                <CatalogSubmenu categories={this.state.categories}
                    activeMenuId={this.state.activeMenuId}
                    menuIndex={this.state.menuIndex}
                    submenuOffsetTop={this.state.submenuOffsetTop}
                    onSubmenuClick={this.handleClickSubmenu.bind(this)}>
                </CatalogSubmenu>
            </div>
        );
    }
}