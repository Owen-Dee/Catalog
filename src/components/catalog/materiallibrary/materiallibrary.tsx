import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import { CatalogSidebarProps, CatalogSidebarStates, CatalogSidebarType } from '../../../entity/componententity';
import './materiallibrary.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default class MaterialLibrary extends React.Component<CatalogSidebarProps, CatalogSidebarStates> {
    constructor(props: CatalogSidebarProps) {
        super(props);
        this.state = {
            display: false,
        };
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
                <div className="category-items"
                    style={showCategories ? { display: 'block' } : { display: 'none' }}>
                    <div className="item">
                        <div className="first-menu-name menu-name">硬装</div>
                        <div className="triangle-border-left">
                            <span></span>
                        </div>
                        <div className="category-submenu">
                            <div className="second-menu">
                                <div className="second-menu-name menu-name">
                                   栏杆 
                                </div>
                                <div className="third-menu">
                                    <div className="third-menu-name menu-name">
                                        玻璃栏杆
                                    </div>
                                    <div className="third-menu-name menu-name">
                                        木质栏杆
                                    </div>
                                    <div className="third-menu-name menu-name">
                                        石材栏杆
                                    </div>
                                    <div className="third-menu-name menu-name">
                                        金属栏杆
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">家具</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">家饰</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">厨卫</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">家电</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">照明</div>
                    </div>
                    <div className="item">
                        <div className="first-menu-name menu-name">材料</div>
                    </div>
                </div>
            </div>
        );
    }
}