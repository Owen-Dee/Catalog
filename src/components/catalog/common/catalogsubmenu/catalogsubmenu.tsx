import * as React from 'react';
import { ICatalogSubmenuProps } from '../../../../entity/catalogentity';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './catalogsubmenu.scss';

export default class CatalogSubmenu extends React.Component<ICatalogSubmenuProps, any> {
    constructor(props: ICatalogSubmenuProps) {
        super(props);
    }

    getSubmenuList() {
        const submenuList = this.props.categories.map((category) => {
            let thirdMenuList = this.getThirdMenuList(category);
            let isMenuActive = this.props.activeMenuId === category.id;
            return <div className="second-menu" key={category.id}>
                        <div className={['second-menu-name', 
            							 'menu-name',
            							 isMenuActive ? 'active' : ''].join(' ')}
	                         onClick={this.handleSubmenuClicked.bind(this, category)}>
                            {category.name}
                        </div>
                        <div className="third-menu">
                            {thirdMenuList}
                        </div> 
                    </div>
        });

        return (
            submenuList
        );
    }

    getThirdMenuList(category) {
        const thirdMenuList = category.categories.map((item) => {
        	let isMenuActive = this.props.activeMenuId === item.id;
            return <div className={['third-menu-name', 
            						'menu-name',
            						isMenuActive ? 'active' : ''].join(' ')}
            			key={item.id}
            			onClick={this.handleSubmenuClicked.bind(this, item)}>
                        {item.name}
                    </div>
        });

        return (
            thirdMenuList
        );
    }

    handleSubmenuClicked(category) {
    	this.props.onSubmenuClick(category.id ,this.props.menuIndex);
    }

    render() {
        let submenuList = this.getSubmenuList();
        let displayStyle = this.props.menuIndex > -1 ? 'block' : 'none';
        return(
           <div className="category-submenu" style={{top: this.props.submenuOffsetTop, display: displayStyle}}>
                <PerfectScrollbar>
                    {submenuList}
                </PerfectScrollbar>
            </div> 
        );
    }
}