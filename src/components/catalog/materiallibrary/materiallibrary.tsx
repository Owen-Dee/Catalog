import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import CatalogSubmenu from '../catalogsubmenu/catalogsubmenu';
import { CatalogSidebarProps, CatalogSidebarCategoryStates, CatalogSidebarType } from '../../../entity/componententity';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './materiallibrary.scss';

export default class MaterialLibrary extends React.Component<CatalogSidebarProps, CatalogSidebarCategoryStates> {
    constructor(props: CatalogSidebarProps) {
        super(props);
        this.state = {
            activeIndex: -1,
            menuIndex: -1,
            categories: [],
            submenuOfftop: '0px'
        };
    }

    getMenuList(categories) {
        const menuList = categories.map((category, index) => {
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
                                ? { display: 'block'} 
                                : { display: 'none' }}>
                            <span></span>
                        </div>
                    </div>
        });

        return (
            menuList
        );
    }

    handleFirstMenuClicked(category, index) {
        this.setState({
            activeIndex: index,
            menuIndex: -1,
        });
    }

    handleFirstMenuEnter(category, index) {
        let categories = [];
        let menuIndex = -1;
        if (category.categories && category.categories.length > 0) {
            categories = category.categories;
            menuIndex = index;
        } 

        let submenuOfftop = (40 * index) + 'px';
        this.setState({
            menuIndex: menuIndex,
            categories: categories,
            submenuOfftop: submenuOfftop
        });
    }

    handleCategoriesLeave() {
        this.setState({
            submenuOfftop: '0px',
            menuIndex: -1
        });
    }

    handleClickSubmenu(activeIndex) {
        this.setState({
            activeIndex: activeIndex,
            menuIndex: -1,
        });
    }

    render() {
        let showCategories = this.props.sidebarType === CatalogSidebarType.MaterialLibrary;
        let categories = [
            {
                "name": "硬装",
                "parentId": "",
                "logo": "",
                "icon": "",
                "emphasis": "",
                "thumbnail": "",
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 10,
                "categories": [
                    {
                        "name": "栏杆",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 4,
                        "categories": [
                            {
                                "name": "玻璃栏杆",
                                "parentId": "1cd5247a-e9a0-f066-f5d9-af2deb274075",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "0393d370-d0d5-75a8-27fd-167574a23d16",
                                "status": 1
                            },
                            {
                                "name": "木制栏杆",
                                "parentId": "1cd5247a-e9a0-f066-f5d9-af2deb274075",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "124b8b57-1fd0-9816-c6c6-965cc969a913",
                                "status": 1
                            },
                            {
                                "name": "石材栏杆",
                                "parentId": "1cd5247a-e9a0-f066-f5d9-af2deb274075",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "57388fd5-b0df-e586-e0be-43de235b0b5e",
                                "status": 1
                            },
                            {
                                "name": "金属栏杆",
                                "parentId": "1cd5247a-e9a0-f066-f5d9-af2deb274075",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "069193e2-de52-f516-c2c2-c6dd050be47b",
                                "status": 1
                            }
                        ],
                        "id": "1cd5247a-e9a0-f066-f5d9-af2deb274075",
                        "status": 1
                    },
                    {
                        "name": "楼梯",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "直跑楼梯",
                                "parentId": "CD96E708-ED47-4FDD-816E-66645240F46E",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "7c8e708a-0c52-0bc1-41da-b754a31d7383",
                                "status": 1
                            },
                            {
                                "name": "转角楼梯",
                                "parentId": "CD96E708-ED47-4FDD-816E-66645240F46E",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "35cac4e2-06c7-2ee2-785c-d2be7d2e3ab5",
                                "status": 1
                            },
                            {
                                "name": "弧形楼梯",
                                "parentId": "CD96E708-ED47-4FDD-816E-66645240F46E",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "65dc956a-f79e-e075-3e6f-3f50cb7d39e0",
                                "status": 1
                            }
                        ],
                        "id": "CD96E708-ED47-4FDD-816E-66645240F46E",
                        "status": 1
                    },
                    {
                        "name": "壁炉",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "1a07d7e3-68f9-7dad-b9c2-f469d02b001a",
                        "status": 1
                    },
                    {
                        "name": "门窗",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 10,
                        "categories": [
                            {
                                "name": "室内门",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "3e7abf61-1d7e-43da-9f94-32b48a936801",
                                "status": 1
                            },
                            {
                                "name": "移门",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "598df1e4-7037-4248-9bd8-dcb69bb768e3",
                                "status": 1
                            },
                            {
                                "name": "入户门",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "9b065589-d680-487a-b366-b24012189819",
                                "status": 1
                            },
                            {
                                "name": "折叠门",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "41025115-a47e-44ce-8398-b9225f94f6e6",
                                "status": 1
                            },
                            {
                                "name": "平开窗",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "6b8637f3-f4a5-4c53-971d-6b5ebda8fa00",
                                "status": 1
                            },
                            {
                                "name": "落地窗",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "808feca0-85ff-40de-a15d-50706453085d",
                                "status": 1
                            },
                            {
                                "name": "飘窗",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "353fb0d3-bb32-470a-8bd5-3833ee0d8204",
                                "status": 1
                            },
                            {
                                "name": "推拉窗",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "efd4924c-1e82-4275-8105-9fadab9d3c03",
                                "status": 1
                            },
                            {
                                "name": "装饰窗",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d809aa80-7778-40c1-b623-9a6b9dd7f981",
                                "status": 1
                            },
                            {
                                "name": "门套",
                                "parentId": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "89b31a91-ef8c-1fa3-d250-210099991a8e",
                                "status": 1
                            }
                        ],
                        "id": "b25d8c4d-ca28-4d99-ade5-f2a11b5d15ac",
                        "status": 1
                    },
                    {
                        "name": "地面",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "地砖",
                                "parentId": "8B3D739F-EDF6-408D-91A9-C5850D26E37E",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "0D7AF323-F9E6-4770-A6C8-78D83E3EA07E",
                                "status": 1
                            },
                            {
                                "name": "地板",
                                "parentId": "8B3D739F-EDF6-408D-91A9-C5850D26E37E",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "26CE3CF9-29FC-4885-9AEC-AA06A0DF56A7",
                                "status": 1
                            },
                            {
                                "name": "地台",
                                "parentId": "8B3D739F-EDF6-408D-91A9-C5850D26E37E",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "558C8548-C21B-4404-9726-9C539D163306",
                                "status": 1
                            }
                        ],
                        "id": "8B3D739F-EDF6-408D-91A9-C5850D26E37E",
                        "status": 1
                    },
                    {
                        "name": "顶面",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "吊顶模型",
                                "parentId": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "0F452420-5EBC-42A3-81F0-84ABA2D38D9A",
                                "status": 1
                            },
                            {
                                "name": "集成扣板",
                                "parentId": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "9D814D80-A3AB-437A-B3A0-176EB36BB0CE",
                                "status": 1
                            },
                            {
                                "name": "顶角线",
                                "parentId": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "19A61B08-968B-437C-A0F0-1BE6B8DAADD3",
                                "status": 1
                            },
                            {
                                "name": "欧式花盘",
                                "parentId": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "AF6D6136-305D-4A21-A12A-721F8DABA52E",
                                "status": 1
                            },
                            {
                                "name": "顶面涂料-墙纸-木饰面",
                                "parentId": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "8FA193A1-C1BC-45C9-A1CE-960D88BE92FE",
                                "status": 1
                            },
                            {
                                "name": "衣架",
                                "parentId": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "899068fc-daf9-837e-6b60-4f52609fbaeb",
                                "status": 1
                            }
                        ],
                        "id": "47614FCD-F285-4D91-BCE9-FDEB889AA353",
                        "status": 1
                    },
                    {
                        "name": "墙面",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "墙纸",
                                "parentId": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "E181BC9F-C4C6-4A23-BDE0-097E507713FC",
                                "status": 1
                            },
                            {
                                "name": "墙砖",
                                "parentId": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "0246538F-1309-42F8-966E-76433D67BB0A",
                                "status": 1
                            },
                            {
                                "name": "墙漆-涂料",
                                "parentId": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "E2102CC4-AD01-4295-9F76-A9250C580052",
                                "status": 1
                            },
                            {
                                "name": "木饰面墙",
                                "parentId": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "540094d1-b92e-4092-b6c3-1ed826c3e18d",
                                "status": 1
                            },
                            {
                                "name": "护墙板",
                                "parentId": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "ffac6c3d-88a8-4c76-9667-8b898344021e",
                                "status": 1
                            },
                            {
                                "name": "踢脚线-顶角线",
                                "parentId": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "1f61a721-636f-4b1b-9e82-d7bfda2f09c2",
                                "status": 1
                            }
                        ],
                        "id": "7DCCD2E3-6313-4C75-85C8-CC8A4A70C92A",
                        "status": 1
                    },
                    {
                        "name": "背景墙",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "电视背景墙",
                                "parentId": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "04eeb7c7-c9ce-41ec-bd03-6d15c9d245ac",
                                "status": 1
                            },
                            {
                                "name": "沙发背景墙",
                                "parentId": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "32807452-a7a7-429e-adda-696389148ffc",
                                "status": 1
                            },
                            {
                                "name": "餐厅背景墙",
                                "parentId": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a6c0b914-e580-4d8a-a5dd-f5a9c5fc17cd",
                                "status": 1
                            },
                            {
                                "name": "卧室背景墙",
                                "parentId": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "825908f4-71bd-48f5-acd1-7fc7b4e51edf",
                                "status": 1
                            },
                            {
                                "name": "形象墙",
                                "parentId": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "f83597f0-840c-491a-9fcb-ceec68bece80",
                                "status": 1
                            },
                            {
                                "name": "背景墙DIY",
                                "parentId": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d50af539-eec3-a9f6-a422-e0a4a022fe5f",
                                "status": 1
                            }
                        ],
                        "id": "cc9ce8d2-e3a7-4b5d-8754-518cc92236e5",
                        "status": 1
                    },
                    {
                        "name": "橱柜",
                        "parentId": "820A2440-A6E4-4F57-9C4F-507F062B2C1D",
                        "logo": "",
                        "icon": "",
                        "emphasis": "",
                        "thumbnail": "",
                        "tenants": null,
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "橱柜组合",
                                "parentId": "99e52f9c-48d6-4548-c067-a86687b57ea9",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d487a023-5a67-4c77-a2fc-454b6d4d8e90",
                                "status": 1
                            },
                            {
                                "name": "单元上柜",
                                "parentId": "99e52f9c-48d6-4548-c067-a86687b57ea9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b616add0-a824-4724-b036-737e05d7073d",
                                "status": 1
                            },
                            {
                                "name": "单元下柜",
                                "parentId": "99e52f9c-48d6-4548-c067-a86687b57ea9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "2bbe9166-9f36-4164-b851-194cd79bcb7a",
                                "status": 1
                            }
                        ],
                        "id": "6ec1e16f-7815-4e8c-b292-6ae81a29ae98",
                        "status": 1
                    },
                    {
                        "name": "水电",
                        "parentId": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 4,
                        "categories": [
                            {
                                "name": "冷热水",
                                "parentId": "37417ac2-5b98-441c-a52f-319061082dfb",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 2,
                                "categories": [
                                    {
                                        "name": "水管",
                                        "parentId": "6aced11d-10c2-4d30-93b1-f9328fc697c7",
                                        "logo": "",
                                        "icon": null,
                                        "emphasis": null,
                                        "thumbnail": null,
                                        "tenants": null,
                                        "type": 0,
                                        "childcount": 0,
                                        "categories": [

                                        ],
                                        "id": "ba06764c-f648-4566-bfec-940aaecc1a70",
                                        "status": 1
                                    },
                                    {
                                        "name": "水阀",
                                        "parentId": "6aced11d-10c2-4d30-93b1-f9328fc697c7",
                                        "logo": "",
                                        "icon": null,
                                        "emphasis": null,
                                        "thumbnail": null,
                                        "tenants": null,
                                        "type": 0,
                                        "childcount": 0,
                                        "categories": [

                                        ],
                                        "id": "cafaebf3-e1bf-4712-8889-ce7d9ac5e386",
                                        "status": 1
                                    }
                                ],
                                "id": "6aced11d-10c2-4d30-93b1-f9328fc697c7",
                                "status": 1
                            },
                            {
                                "name": "开关插座",
                                "parentId": "37417ac2-5b98-441c-a52f-319061082dfb",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 1,
                                "categories": [
                                    {
                                        "name": "强电",
                                        "parentId": "e5989dc0-076c-ef9e-2428-18fb3765b471",
                                        "logo": "",
                                        "icon": null,
                                        "emphasis": null,
                                        "thumbnail": null,
                                        "tenants": null,
                                        "type": 0,
                                        "childcount": 4,
                                        "categories": [
                                            {
                                                "name": "开关",
                                                "parentId": "7360180a-3cab-477d-945c-ad84365c4936",
                                                "logo": "",
                                                "icon": null,
                                                "emphasis": null,
                                                "thumbnail": null,
                                                "tenants": null,
                                                "type": 0,
                                                "childcount": 0,
                                                "categories": [

                                                ],
                                                "id": "acae4fca-736e-4c16-a5e6-2d78f568cf8d",
                                                "status": 1
                                            },
                                            {
                                                "name": "插座",
                                                "parentId": "7360180a-3cab-477d-945c-ad84365c4936",
                                                "logo": "",
                                                "icon": null,
                                                "emphasis": null,
                                                "thumbnail": null,
                                                "tenants": null,
                                                "type": 0,
                                                "childcount": 0,
                                                "categories": [

                                                ],
                                                "id": "ca5a44cb-676f-4f31-8ea5-0905cc640fb3",
                                                "status": 1
                                            },
                                            {
                                                "name": "灯具",
                                                "parentId": "7360180a-3cab-477d-945c-ad84365c4936",
                                                "logo": "",
                                                "icon": null,
                                                "emphasis": null,
                                                "thumbnail": null,
                                                "tenants": null,
                                                "type": 0,
                                                "childcount": 0,
                                                "categories": [

                                                ],
                                                "id": "ecdf1e0a-df27-465d-8211-cedbd10fda7a",
                                                "status": 1
                                            },
                                            {
                                                "name": "配电箱",
                                                "parentId": "7360180a-3cab-477d-945c-ad84365c4936",
                                                "logo": "",
                                                "icon": null,
                                                "emphasis": null,
                                                "thumbnail": null,
                                                "tenants": null,
                                                "type": 0,
                                                "childcount": 0,
                                                "categories": [

                                                ],
                                                "id": "af112fc6-cec4-472e-a2c7-902e5f9f85a5",
                                                "status": 1
                                            }
                                        ],
                                        "id": "7360180a-3cab-477d-945c-ad84365c4936",
                                        "status": 1
                                    }
                                ],
                                "id": "e5989dc0-076c-ef9e-2428-18fb3765b471",
                                "status": 1
                            },
                            {
                                "name": "五金水龙头",
                                "parentId": "37417ac2-5b98-441c-a52f-319061082dfb",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "569e43f7-c21b-53e3-ba2e-41f6e6f2bdbf",
                                "status": 1
                            },
                            {
                                "name": "天然气表",
                                "parentId": "37417ac2-5b98-441c-a52f-319061082dfb",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": [
                                    "jtljia"
                                ],
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d9000410-c4a2-8566-34b5-5e76ceef5da3",
                                "status": 1
                            }
                        ],
                        "id": "37417ac2-5b98-441c-a52f-319061082dfb",
                        "status": 1
                    }
                ],
                "id": "FD8C6DAC-E6E5-4DDC-A7C7-A9C70DE89955",
                "status": 1
            },
            {
                "name": "家具",
                "parentId": "",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 7,
                "categories": [
                    {
                        "name": "沙发",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "组合沙发",
                                "parentId": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "5cf54c85-b013-5684-00f1-49651b886165",
                                "status": 1
                            },
                            {
                                "name": "多人沙发",
                                "parentId": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "4476def8-1235-2681-4f7a-a058e79fca09",
                                "status": 1
                            },
                            {
                                "name": "双人沙发",
                                "parentId": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "488a89e9-ba30-86a3-64ca-9d84917877ac",
                                "status": 1
                            },
                            {
                                "name": "单人沙发",
                                "parentId": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "3a19e7dc-c1b1-624b-9195-1c7c2b3e64ce",
                                "status": 1
                            },
                            {
                                "name": "沙发凳",
                                "parentId": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b7194173-7f5d-fec0-e54e-e6659eebe284",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "7f85d09c-9357-591d-feb2-d741b8153e9e",
                                "status": 1
                            }
                        ],
                        "id": "0a8b731a-7b98-6f75-b933-a8995fd08ae1",
                        "status": 1
                    },
                    {
                        "name": "床类",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "组合床",
                                "parentId": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "e9ac2a24-048f-1e0e-1dd4-e0e918bd92af",
                                "status": 1
                            },
                            {
                                "name": "双人床",
                                "parentId": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "3b839d31-ebc0-7e95-db5d-302470dbef28",
                                "status": 1
                            },
                            {
                                "name": "单人床",
                                "parentId": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "7e142561-5479-ced5-f83b-4f52e3ab3608",
                                "status": 1
                            },
                            {
                                "name": "高低床",
                                "parentId": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "6cdefca4-ef62-3671-f16e-9abfab89b8b6",
                                "status": 1
                            },
                            {
                                "name": "儿童床",
                                "parentId": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "88569cff-0270-72ec-4722-9faf3ac5f162",
                                "status": 1
                            },
                            {
                                "name": "榻榻米",
                                "parentId": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "6cd8138e-ecdf-b2d6-07ab-68a5a32d9039",
                                "status": 1
                            }
                        ],
                        "id": "06ff597f-e9ff-0a1d-3752-61940d6dae8c",
                        "status": 1
                    },
                    {
                        "name": "凳子/椅子",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 8,
                        "categories": [
                            {
                                "name": "靠背椅",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "f032d924-d46a-288f-f194-a43a3260a37d",
                                "status": 1
                            },
                            {
                                "name": "凳子",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "40363543-65dd-3bdb-ce34-1397863c655d",
                                "status": 1
                            },
                            {
                                "name": "餐椅",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "3fb3bb29-823c-e9fe-f4c9-eb1b7bf760f3",
                                "status": 1
                            },
                            {
                                "name": "吧台椅",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "bc40bc7c-cfba-7c1a-f70d-0afa594bbdf8",
                                "status": 1
                            },
                            {
                                "name": "躺椅",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "55f8837e-87e4-6ba4-ba34-4cd2f7aa5cca",
                                "status": 1
                            },
                            {
                                "name": "贵妃椅",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a67048da-fa71-2403-828d-929b89f41efd",
                                "status": 1
                            },
                            {
                                "name": "床尾凳",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "2f6342f0-c1a5-b787-bb59-4d2b6f844cc4",
                                "status": 1
                            },
                            {
                                "name": "户外桌椅",
                                "parentId": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "ca483c55-1175-06a1-03d8-1f93dbb9bb8d",
                                "status": 1
                            }
                        ],
                        "id": "8ee5598f-93f0-259b-c177-9ddcfc93d287",
                        "status": 1
                    },
                    {
                        "name": "柜架",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 15,
                        "categories": [
                            {
                                "name": "电视柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "94105629-6c53-e16d-4d1b-d3e72a335d5c",
                                "status": 1
                            },
                            {
                                "name": "衣柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b57c995c-2c14-2fec-a30e-ade569d13aa0",
                                "status": 1
                            },
                            {
                                "name": "床头柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d60352f0-2efc-5a06-7fab-ddeeb37cff0f",
                                "status": 1
                            },
                            {
                                "name": "书柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "06c1a7e9-ee87-ded2-3963-55366712c9c2",
                                "status": 1
                            },
                            {
                                "name": "餐边柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b15cc8ef-dde7-15b6-661e-04419d76928f",
                                "status": 1
                            },
                            {
                                "name": "储物柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b922ec21-d751-a3db-e86d-200ffc2f2ff4",
                                "status": 1
                            },
                            {
                                "name": "酒柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a8a36826-41ac-13b1-a411-dc9109cb91f8",
                                "status": 1
                            },
                            {
                                "name": "玄关柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "961bfddc-aaf1-5aa8-bdf1-8a4d28af262b",
                                "status": 1
                            },
                            {
                                "name": "鞋柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "827febc9-1db3-6d36-59c0-d3b8f9344b38",
                                "status": 1
                            },
                            {
                                "name": "斗柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "af7caf39-e2d1-815e-9eee-8662e9ff6400",
                                "status": 1
                            },
                            {
                                "name": "壁柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "76354696-6e2d-f5fe-1020-d9a206fe4c9b",
                                "status": 1
                            },
                            {
                                "name": "洗衣机柜",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "6bc4322c-90b2-f9f8-ebf9-ad9c1dd2d501",
                                "status": 1
                            },
                            {
                                "name": "衣帽架",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "e3e98e70-b428-b88b-789b-00d9ad8ead09",
                                "status": 1
                            },
                            {
                                "name": "置物架",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "678ffc2a-e374-8724-db52-a91622cb519f",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "88f79948-287c-d3ea-353a-6d452d9259a9",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "01cdbf65-b933-dde4-4619-da4bd75572cc",
                                "status": 1
                            }
                        ],
                        "id": "88f79948-287c-d3ea-353a-6d452d9259a9",
                        "status": 1
                    },
                    {
                        "name": "桌几",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 7,
                        "categories": [
                            {
                                "name": "餐桌",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "2bd40c66-5989-d76b-d9a7-12f2489412a0",
                                "status": 1
                            },
                            {
                                "name": "书桌",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "300705f2-5eee-f061-5bef-fac9d7b5146f",
                                "status": 1
                            },
                            {
                                "name": "茶几",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a04ba996-49f3-a975-5724-4b8abe8050e7",
                                "status": 1
                            },
                            {
                                "name": "边几",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "01e09522-1702-9128-7fcc-721d8e485ddc",
                                "status": 1
                            },
                            {
                                "name": "玄关案几",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "47e44276-6cc6-aa41-2a92-59b8a50cd789",
                                "status": 1
                            },
                            {
                                "name": "吧台",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "7e53ab96-aa0d-f91b-5175-3e6fe9834d86",
                                "status": 1
                            },
                            {
                                "name": "梳妆台",
                                "parentId": "54a9faa8-2652-c69b-6e07-566f38755d81",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "243aa8ca-b98b-3af2-86a8-87d5e707f1c2",
                                "status": 1
                            }
                        ],
                        "id": "54a9faa8-2652-c69b-6e07-566f38755d81",
                        "status": 1
                    },
                    {
                        "name": "桌椅组合",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "餐桌椅",
                                "parentId": "053afb00-3cd4-0b1e-a9c7-7463c0d8024f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "8270b3e6-9dc9-ba11-be69-ebd577162b19",
                                "status": 1
                            },
                            {
                                "name": "书桌椅组合",
                                "parentId": "053afb00-3cd4-0b1e-a9c7-7463c0d8024f",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d4c0957d-617a-4c18-8dd1-82a7e5177bcc",
                                "status": 1
                            },
                            {
                                "name": "休闲桌椅",
                                "parentId": "053afb00-3cd4-0b1e-a9c7-7463c0d8024f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "62edbb50-0481-1efb-e40a-70911495b6a4",
                                "status": 1
                            }
                        ],
                        "id": "053afb00-3cd4-0b1e-a9c7-7463c0d8024f",
                        "status": 1
                    },
                    {
                        "name": "榻",
                        "parentId": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "fa08d300-cf70-10f8-d0a8-d1918071a921",
                        "status": 1
                    }
                ],
                "id": "814b9d61-93f6-35ce-f091-4988a3b513ea",
                "status": 1
            },
            {
                "name": "厨卫",
                "parentId": "",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 8,
                "categories": [
                    {
                        "name": "厨房配件",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "厨具",
                                "parentId": "cca7264a-473f-b433-d01f-7839c44400c1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "13068d59-f9f7-ac32-5bb7-154dccc5984b",
                                "status": 1
                            },
                            {
                                "name": "餐具",
                                "parentId": "cca7264a-473f-b433-d01f-7839c44400c1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d429a6f5-b7cb-2b58-d63e-bc034faa7d39",
                                "status": 1
                            },
                            {
                                "name": "摆/挂件",
                                "parentId": "cca7264a-473f-b433-d01f-7839c44400c1",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "de96441e-db2b-da49-df51-1e60aa72bf99",
                                "status": 1
                            }
                        ],
                        "id": "cca7264a-473f-b433-d01f-7839c44400c1",
                        "status": 1
                    },
                    {
                        "name": "浴室柜",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "4b3ee03d-5146-a35f-1191-c28f30e3ff00",
                        "status": 1
                    },
                    {
                        "name": "淋浴房",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "f474e797-cd12-a800-064d-57f642538a4d",
                        "status": 1
                    },
                    {
                        "name": "浴缸",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "dc621200-9d2a-2437-f9c9-de252a0a2cbb",
                        "status": 1
                    },
                    {
                        "name": "卫浴配件",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 4,
                        "categories": [
                            {
                                "name": "浴霸",
                                "parentId": "47f4aeb2-466a-9a55-1fad-974d5e07b3ec",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b6a81f03-211b-422b-ab13-d88330496d3c",
                                "status": 1
                            },
                            {
                                "name": "拖把池",
                                "parentId": "47f4aeb2-466a-9a55-1fad-974d5e07b3ec",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "125ea82d-a6cd-40f5-8e91-f4915242ca9e",
                                "status": 1
                            },
                            {
                                "name": "五金",
                                "parentId": "47f4aeb2-466a-9a55-1fad-974d5e07b3ec",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "5356b7b3-0ae7-42c3-a8b6-4af098960a90",
                                "status": 1
                            },
                            {
                                "name": "浴室镜",
                                "parentId": "47f4aeb2-466a-9a55-1fad-974d5e07b3ec",
                                "logo": "",
                                "icon": "",
                                "emphasis": "",
                                "thumbnail": "",
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "13d989aa-5b96-42e6-9f80-1c3cee8815e5",
                                "status": 1
                            }
                        ],
                        "id": "47f4aeb2-466a-9a55-1fad-974d5e07b3ec",
                        "status": 1
                    },
                    {
                        "name": "花洒",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "5b19583c-f1dc-d5ff-eb7a-6d2a9f468d03",
                        "status": 1
                    },
                    {
                        "name": "座便器",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "3daf9309-5ed0-565e-0dc5-79cc521fb49a",
                        "status": 1
                    },
                    {
                        "name": "金螳螂浴室柜",
                        "parentId": "64e4527c-994d-a14d-d72f-e96526de82d9",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "27f3f27e-d62a-439f-6228-b6af59cf99e4",
                        "status": 1
                    }
                ],
                "id": "64e4527c-994d-a14d-d72f-e96526de82d9",
                "status": 1
            },
            {
                "name": "家饰",
                "parentId": "",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 6,
                "categories": [
                    {
                        "name": "布艺软装",
                        "parentId": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "窗帘",
                                "parentId": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "6e11f3ee-fc33-2954-1a84-1aa95dbcacd4",
                                "status": 1
                            },
                            {
                                "name": "地毯",
                                "parentId": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "1e44a4d2-cdd7-ee51-7ae7-18f84f9e8627",
                                "status": 1
                            },
                            {
                                "name": "抱枕/靠垫",
                                "parentId": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "13a93548-1a71-1de9-5567-8470edf70df7",
                                "status": 1
                            },
                            {
                                "name": "服饰衣服",
                                "parentId": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "316b8535-f3d3-d017-409f-8ec34fdf700a",
                                "status": 1
                            },
                            {
                                "name": "桌旗搭巾",
                                "parentId": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "34a935d4-77dd-7b4d-9687-82179fa9e478",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a7afd76c-d9ce-f3d8-4288-7db069652d55",
                                "status": 1
                            }
                        ],
                        "id": "92e3d861-7a97-e6ea-4cb2-e0cb5fcc5f02",
                        "status": 1
                    },
                    {
                        "name": "装饰摆件",
                        "parentId": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "雕塑类",
                                "parentId": "4fa26e1d-11e1-48c0-300f-96feed42249c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "82ce6bb1-fb77-188a-e81a-0d3b677cdb64",
                                "status": 1
                            },
                            {
                                "name": "其他装饰",
                                "parentId": "4fa26e1d-11e1-48c0-300f-96feed42249c",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "703f2e4d-eed1-37b6-a1ff-5c62a78b5844",
                                "status": 1
                            }
                        ],
                        "id": "4fa26e1d-11e1-48c0-300f-96feed42249c",
                        "status": 1
                    },
                    {
                        "name": "墙饰艺术",
                        "parentId": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 5,
                        "categories": [
                            {
                                "name": "装饰画",
                                "parentId": "4789b8b1-70d4-a808-916b-8a90e5a442cc",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d4cea50a-b832-995a-4077-be1df3cb6342",
                                "status": 1
                            },
                            {
                                "name": "照片墙",
                                "parentId": "4789b8b1-70d4-a808-916b-8a90e5a442cc",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "7dd17470-26bf-c3cf-6ce6-df15e5e5ba44",
                                "status": 1
                            },
                            {
                                "name": "挂件",
                                "parentId": "4789b8b1-70d4-a808-916b-8a90e5a442cc",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b9e28998-f3a8-9246-941a-3bf4a18c792c",
                                "status": 1
                            },
                            {
                                "name": "涂鸦贴画",
                                "parentId": "4789b8b1-70d4-a808-916b-8a90e5a442cc",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "74a4d01e-2a9f-6443-b80a-37baaac8844c",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "4789b8b1-70d4-a808-916b-8a90e5a442cc",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "2a403141-8884-e90d-af3a-ed26553a03e0",
                                "status": 1
                            }
                        ],
                        "id": "4789b8b1-70d4-a808-916b-8a90e5a442cc",
                        "status": 1
                    },
                    {
                        "name": "家具饰品",
                        "parentId": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 6,
                        "categories": [
                            {
                                "name": "壁架",
                                "parentId": "5872de63-9ad5-14a7-80c0-72ec77509921",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "2f284754-d260-8335-81be-70d2c1641e5b",
                                "status": 1
                            },
                            {
                                "name": "装饰镜",
                                "parentId": "5872de63-9ad5-14a7-80c0-72ec77509921",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "f6ad76a0-bd28-5511-51e1-b57c1d696c54",
                                "status": 1
                            },
                            {
                                "name": "屏风",
                                "parentId": "5872de63-9ad5-14a7-80c0-72ec77509921",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "97ddfbbb-f96b-0f0c-500d-593c19221e8c",
                                "status": 1
                            },
                            {
                                "name": "花架",
                                "parentId": "5872de63-9ad5-14a7-80c0-72ec77509921",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d653a1e8-da5a-1c47-2821-3ebdf38508af",
                                "status": 1
                            },
                            {
                                "name": "试衣镜",
                                "parentId": "5872de63-9ad5-14a7-80c0-72ec77509921",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d95cbf98-c860-bbf3-7054-263c1468645f",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "5872de63-9ad5-14a7-80c0-72ec77509921",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "7b32ab29-740a-63be-cac3-9bee90377ea4",
                                "status": 1
                            }
                        ],
                        "id": "5872de63-9ad5-14a7-80c0-72ec77509921",
                        "status": 1
                    },
                    {
                        "name": "植物花艺",
                        "parentId": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 5,
                        "categories": [
                            {
                                "name": "绿植",
                                "parentId": "f29ee19a-b9da-2808-8803-67f883b782c2",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "8132ca65-1393-6288-5feb-aaeefc3d817e",
                                "status": 1
                            },
                            {
                                "name": "花卉",
                                "parentId": "f29ee19a-b9da-2808-8803-67f883b782c2",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "cba2158f-3730-6011-cc78-386a4a0cdb97",
                                "status": 1
                            },
                            {
                                "name": "鱼缸",
                                "parentId": "f29ee19a-b9da-2808-8803-67f883b782c2",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "b08480c5-8c35-c3e7-4734-f1a25d1ddd01",
                                "status": 1
                            },
                            {
                                "name": "干枝",
                                "parentId": "f29ee19a-b9da-2808-8803-67f883b782c2",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "f74d373e-a4f6-9780-5824-f3ca7e2c53e2",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "f29ee19a-b9da-2808-8803-67f883b782c2",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d571ecc0-d2e1-eab5-d8f7-aa46c2095463",
                                "status": 1
                            }
                        ],
                        "id": "f29ee19a-b9da-2808-8803-67f883b782c2",
                        "status": 1
                    },
                    {
                        "name": "生活娱乐",
                        "parentId": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 5,
                        "categories": [
                            {
                                "name": "儿童玩具",
                                "parentId": "e1e07b06-e6de-972c-3d9f-3c50af31dba5",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "ab183438-2f57-9212-5902-f35831286a1c",
                                "status": 1
                            },
                            {
                                "name": "书籍杂志",
                                "parentId": "e1e07b06-e6de-972c-3d9f-3c50af31dba5",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "bc52c1c6-6476-2ef7-88e7-ae958de85e0f",
                                "status": 1
                            },
                            {
                                "name": "健身器材",
                                "parentId": "e1e07b06-e6de-972c-3d9f-3c50af31dba5",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "396b39ec-7ec0-9598-3558-fc8d1be8dc30",
                                "status": 1
                            },
                            {
                                "name": "乐器",
                                "parentId": "e1e07b06-e6de-972c-3d9f-3c50af31dba5",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "9e29f762-8668-cc28-9c36-16dac1401530",
                                "status": 1
                            },
                            {
                                "name": "美术用品",
                                "parentId": "e1e07b06-e6de-972c-3d9f-3c50af31dba5",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a3e47e90-40ce-2f19-2ba8-9dbf4d66d0ab",
                                "status": 1
                            }
                        ],
                        "id": "e1e07b06-e6de-972c-3d9f-3c50af31dba5",
                        "status": 1
                    }
                ],
                "id": "c06a4c82-5e0f-7d49-6167-ae17449637bb",
                "status": 1
            },
            {
                "name": "家电",
                "parentId": "",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 3,
                "categories": [
                    {
                        "name": "生活电器",
                        "parentId": "52b6fb7c-c943-9a53-6519-bc3a9a278c5f",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 7,
                        "categories": [
                            {
                                "name": "电视",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "0d382895-4126-761f-7074-6825d9123215",
                                "status": 1
                            },
                            {
                                "name": "空调",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "43d165cc-d383-cc27-6e83-7f0a87c01604",
                                "status": 1
                            },
                            {
                                "name": "冰箱",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d6b2ac81-e18a-2e63-9e9e-4da0d83a619c",
                                "status": 1
                            },
                            {
                                "name": "洗衣机",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "9bca7cae-69ed-34d7-880f-b7b1ea299cba",
                                "status": 1
                            },
                            {
                                "name": "电热水器",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "0c27bf92-0577-d67e-f9f3-ca089825b7ff",
                                "status": 1
                            },
                            {
                                "name": "饮水机",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "84658e60-7d97-986d-5f93-c0cf48d5eb10",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "bca08dd5-58c6-a0a3-9404-72b4019f919b",
                                "status": 1
                            }
                        ],
                        "id": "49c20bf7-6423-240b-9247-77c4f98bd25f",
                        "status": 1
                    },
                    {
                        "name": "厨房电器",
                        "parentId": "52b6fb7c-c943-9a53-6519-bc3a9a278c5f",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 9,
                        "categories": [
                            {
                                "name": "油烟机",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "8b6f479e-eb2c-0357-13a8-0c7af3cb096f",
                                "status": 1
                            },
                            {
                                "name": "集成灶",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "1030b851-6d90-ee74-ce1a-f765630be015",
                                "status": 1
                            },
                            {
                                "name": "微波炉",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "caa2ee63-c682-c7b3-0709-f61bcfb74113",
                                "status": 1
                            },
                            {
                                "name": "消毒柜",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d37af9c8-3d77-26f7-c250-e148def14185",
                                "status": 1
                            },
                            {
                                "name": "净水器",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "8cb1947c-776f-1854-c1fd-d75a305fae8b",
                                "status": 1
                            },
                            {
                                "name": "洗碗机",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "1633afb5-c448-314b-4f81-fab85e9a8f3e",
                                "status": 1
                            },
                            {
                                "name": "烤箱",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "a6919bcd-e42b-7be4-04dc-b27b2a0b0091",
                                "status": 1
                            },
                            {
                                "name": "燃气热水器",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "dfe983c2-9c31-d4af-2c77-abc1c56a1ea6",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "e8703de6-947d-8685-fc38-415e1833a75e",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "cbd039b0-01fd-6b75-1e6d-9529ec4f453a",
                                "status": 1
                            }
                        ],
                        "id": "e8703de6-947d-8685-fc38-415e1833a75e",
                        "status": 1
                    },
                    {
                        "name": "影音数码",
                        "parentId": "52b6fb7c-c943-9a53-6519-bc3a9a278c5f",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "电脑",
                                "parentId": "6919d0f3-2832-3a6b-6969-c872f17dd220",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "8156ae89-32b3-e782-89af-b241e9e3b995",
                                "status": 1
                            },
                            {
                                "name": "影音设备",
                                "parentId": "6919d0f3-2832-3a6b-6969-c872f17dd220",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "d0bb12db-43ff-266b-f5cc-57da35196696",
                                "status": 1
                            },
                            {
                                "name": "其他",
                                "parentId": "6919d0f3-2832-3a6b-6969-c872f17dd220",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "1dc15aff-3e6d-4cf0-e0b9-2a42d5637e1c",
                                "status": 1
                            }
                        ],
                        "id": "6919d0f3-2832-3a6b-6969-c872f17dd220",
                        "status": 1
                    }
                ],
                "id": "52b6fb7c-c943-9a53-6519-bc3a9a278c5f",
                "status": 1
            },
            {
                "name": "照明",
                "parentId": "",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 7,
                "categories": [
                    {
                        "name": "吊灯",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "11875bd3-76d9-e158-8688-19f2e527e496",
                        "status": 1
                    },
                    {
                        "name": "台灯",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "36994f01-c95d-90aa-08f1-6a76a0e818ad",
                        "status": 1
                    },
                    {
                        "name": "落地灯",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "71420bd3-8717-8c4b-d2d5-9b9c622534d9",
                        "status": 1
                    },
                    {
                        "name": "壁灯",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "10078696-ebc0-bbf2-493a-2da32ce48501",
                        "status": 1
                    },
                    {
                        "name": "吸顶灯",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "a3b5251b-1d9d-d9db-31c1-f4a25d2e3c75",
                        "status": 1
                    },
                    {
                        "name": "射灯/筒灯",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "ebfb0bd2-ec41-813d-45fe-647137e97702",
                        "status": 1
                    },
                    {
                        "name": "补光",
                        "parentId": "d682e332-46da-2958-7c54-c968759ceac0",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "点光源",
                                "parentId": "c60f45ec-98b7-1436-1c86-a32397ee9b63",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "f50c80c8-e22f-4651-a069-8fb6366bced7",
                                "status": 1
                            },
                            {
                                "name": "面光源",
                                "parentId": "c60f45ec-98b7-1436-1c86-a32397ee9b63",
                                "logo": "",
                                "icon": null,
                                "emphasis": null,
                                "thumbnail": null,
                                "tenants": null,
                                "type": 0,
                                "childcount": 0,
                                "categories": [

                                ],
                                "id": "064b0703-98ac-48f4-b9bb-27678ac06231",
                                "status": 1
                            }
                        ],
                        "id": "c60f45ec-98b7-1436-1c86-a32397ee9b63",
                        "status": 1
                    }
                ],
                "id": "d682e332-46da-2958-7c54-c968759ceac0",
                "status": 1
            },
            {
                "name": "材料",
                "parentId": "",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "qu"
                ],
                "type": 0,
                "childcount": 6,
                "categories": [
                    {
                        "name": "布料",
                        "parentId": "7772709a-bd61-43f3-944d-baab9c872561",
                        "logo": null,
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "9c7c6f43-9401-4510-b9da-9fa761978360",
                        "status": 1
                    },
                    {
                        "name": "皮革",
                        "parentId": "7772709a-bd61-43f3-944d-baab9c872561",
                        "logo": null,
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "bff88528-98d8-40fe-aa16-8171c0b02453",
                        "status": 1
                    },
                    {
                        "name": "木饰面",
                        "parentId": "7772709a-bd61-43f3-944d-baab9c872561",
                        "logo": null,
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "8187bdd6-3c76-4c5f-90d5-017f63f8734e",
                        "status": 1
                    },
                    {
                        "name": "石料",
                        "parentId": "7772709a-bd61-43f3-944d-baab9c872561",
                        "logo": null,
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": null,
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "9d19a031-c419-45c5-a9cb-2f520fcd7fd3",
                        "status": 1
                    },
                    {
                        "name": "装饰画贴图",
                        "parentId": "7772709a-bd61-43f3-944d-baab9c872561",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "qu"
                        ],
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "e020aea2-c824-9d40-3026-b289850c11b0",
                        "status": 1
                    },
                    {
                        "name": "地毯贴图",
                        "parentId": "7772709a-bd61-43f3-944d-baab9c872561",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "qu"
                        ],
                        "type": 0,
                        "childcount": 0,
                        "categories": [

                        ],
                        "id": "c9474b20-f8a7-083e-0db6-657998a196e7",
                        "status": 1
                    }
                ],
                "id": "7772709a-bd61-43f3-944d-baab9c872561",
                "status": 1
            }
        ];
        let menuList = this.getMenuList(categories);

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
                    style={showCategories ? { display: 'block'} : { display: 'none' }}
                    onMouseLeave={this.handleCategoriesLeave.bind(this)}>
                    <PerfectScrollbar>
                        {menuList}
                    </PerfectScrollbar>
                    <CatalogSubmenu categories={this.state.categories}
                        menuIndex={this.state.menuIndex}
                        submenuOfftop={this.state.submenuOfftop}
                        onSubmenuClick={this.handleClickSubmenu.bind(this)}>
                    </CatalogSubmenu>
                </div>
            </div>
        );
    }
}