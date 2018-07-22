import * as React from 'react';
import CatalogSubmenu from '../catalogsubmenu/catalogsubmenu';
import { ICatalogCategoryProps, ICatalogCategoryStates, CatalogSidebarType, CatalogContentType } from '../../../../entity/catalogentity';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import { getCatalogModels } from '../../../../actions/catalog';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './catalogcategory.scss';

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

    getMenuList() {
        const menuList = this.props.categories.map((category, index) => {
            return <div className="item" key={category.id}
                onMouseEnter={this.handleFirstMenuEnter.bind(this, category, index)}>
                <div className={['first-menu-name',
                    'menu-name',
                    this.state.activeIndex === index
                        ? 'active'
                        : ''].join(' ')}
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
        if (this.props.sidebarType === CatalogSidebarType.MaterialLibrary ||
            this.props.sidebarType === CatalogSidebarType.Tenant) {
            store.dispatch(Actions.changeCatalogType(CatalogContentType.CatalogModel));
        }

        this.setState({
            activeMenuId: category.id,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        store.dispatch(getCatalogModels(category.id));
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

    handleClickSubmenu(categoryId, activeIndex) {
        if (this.props.sidebarType === CatalogSidebarType.MaterialLibrary ||
            this.props.sidebarType === CatalogSidebarType.Tenant) {
            store.dispatch(Actions.changeCatalogType(CatalogContentType.CatalogModel));
        }

        this.setState({
            activeMenuId: categoryId,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        store.dispatch(getCatalogModels(categoryId));
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