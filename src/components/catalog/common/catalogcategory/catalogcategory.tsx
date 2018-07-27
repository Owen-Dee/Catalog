import * as React from 'react';
import CatalogSubmenu from '../catalogsubmenu/catalogsubmenu';
import { ICatalogCategoryProps, ICatalogCategoryStates } from '../../../../entity/catalogentity';
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
        this.props.onChangeCategoryId(category.id);
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
        this.setState({
            activeMenuId: categoryId,
            activeIndex: activeIndex,
            menuIndex: -1,
        });
        this.props.onChangeCategoryId(categoryId);
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