import * as React from 'react';
import SidebarItem from '../sidebaritem/sidebaritem';
import CatalogCategory from '../catalogcategory/catalogcategory';
import { ICatalogSidebarProps, CatalogSidebarType } from '../../../entity/componententity';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './tenant.scss';

export default class Tenant extends React.Component<ICatalogSidebarProps, any> {
    constructor(props: ICatalogSidebarProps) {
        super(props);
    }

    render() {
        let tenant = 'jtljia';
        let normalImg, activeImg;
        if (tenant === 'jtljia') {
            normalImg = './' + tenant + '.svg';
            activeImg = './' + tenant + '_light.svg';
        }

        let showCategories = this.props.sidebarType === CatalogSidebarType.Tenant;
        let categories = [
            {
                "name": "客餐厅",
                "parentId": "cfa923b1-1777-0ed3-2132-77dce6add0fe",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "jtljia"
                ],
                "type": 0,
                "childcount": 4,
                "categories": [
                    {
                        "name": "瓷砖",
                        "parentId": "dcfb1b08-9b3a-6bdc-4c01-d06ffc6c1281",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "客餐厅大地砖",
                                "parentId": "0a26cd96-6055-cd01-4537-c56e41c637e5",
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
                                "id": "15c87afc-422b-d277-9d09-81baba48a775",
                                "status": 1
                            },
                            {
                                "name": "波打线",
                                "parentId": "0a26cd96-6055-cd01-4537-c56e41c637e5",
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
                                "id": "4563a6b6-56fd-6b41-9361-a9cc4a1abedc",
                                "status": 1
                            },
                            {
                                "name": "过门石",
                                "parentId": "0a26cd96-6055-cd01-4537-c56e41c637e5",
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
                                "id": "dbcf3442-8cfc-9fe8-4777-7d41ce916cff",
                                "status": 1
                            }
                        ],
                        "id": "0a26cd96-6055-cd01-4537-c56e41c637e5",
                        "status": 1
                    },
                    {
                        "name": "入户门套",
                        "parentId": "dcfb1b08-9b3a-6bdc-4c01-d06ffc6c1281",
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
                        "id": "75c5bb8a-5380-ad75-1a84-4768181c5ff5",
                        "status": 1
                    },
                    {
                        "name": "个性化背景墙方案",
                        "parentId": "dcfb1b08-9b3a-6bdc-4c01-d06ffc6c1281",
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
                        "id": "ecc4aaed-231a-b5bb-f11d-26526267fdf7",
                        "status": 1
                    },
                    {
                        "name": "筒灯/射灯",
                        "parentId": "dcfb1b08-9b3a-6bdc-4c01-d06ffc6c1281",
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
                        "id": "a9f32d27-5c2a-5c1b-b221-a8c1d36db2ad",
                        "status": 1
                    }
                ],
                "id": "dcfb1b08-9b3a-6bdc-4c01-d06ffc6c1281",
                "status": 1
            },
            {
                "name": "卧室",
                "parentId": "cfa923b1-1777-0ed3-2132-77dce6add0fe",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "jtljia"
                ],
                "type": 0,
                "childcount": 5,
                "categories": [
                    {
                        "name": "地板",
                        "parentId": "85bd4583-a126-06a3-a56a-de0d629d8e66",
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
                        "id": "0272f4bf-69b3-06ac-a5d3-14c516f7f46a",
                        "status": 1
                    },
                    {
                        "name": "卧室门",
                        "parentId": "85bd4583-a126-06a3-a56a-de0d629d8e66",
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
                        "id": "3ad58029-8717-cf29-06a8-6697955a8ae9",
                        "status": 1
                    },
                    {
                        "name": "石材",
                        "parentId": "85bd4583-a126-06a3-a56a-de0d629d8e66",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 1,
                        "categories": [
                            {
                                "name": "窗台板",
                                "parentId": "beff87cf-872b-e29a-5ee8-e5702a453bf5",
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
                                "id": "4878b475-bf14-2e79-c8f0-8b4b9738e397",
                                "status": 1
                            }
                        ],
                        "id": "beff87cf-872b-e29a-5ee8-e5702a453bf5",
                        "status": 1
                    },
                    {
                        "name": "过门石",
                        "parentId": "85bd4583-a126-06a3-a56a-de0d629d8e66",
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
                        "id": "109f43ef-53e3-8c33-9592-de81c4a48bb4",
                        "status": 1
                    },
                    {
                        "name": "筒灯/射灯",
                        "parentId": "85bd4583-a126-06a3-a56a-de0d629d8e66",
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
                        "id": "202262e8-be25-a93b-a3dd-e3700c8e45ca",
                        "status": 1
                    }
                ],
                "id": "85bd4583-a126-06a3-a56a-de0d629d8e66",
                "status": 1
            },
            {
                "name": "厨卫",
                "parentId": "cfa923b1-1777-0ed3-2132-77dce6add0fe",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "jtljia"
                ],
                "type": 0,
                "childcount": 10,
                "categories": [
                    {
                        "name": "瓷砖",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 5,
                        "categories": [
                            {
                                "name": "墙砖",
                                "parentId": "475035b3-7bc7-2568-4bb4-1339cc4110d3",
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
                                "id": "ac489caf-c0dd-5b46-9a7c-69c08c09095c",
                                "status": 1
                            },
                            {
                                "name": "地砖",
                                "parentId": "475035b3-7bc7-2568-4bb4-1339cc4110d3",
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
                                "id": "63e1d703-1b6b-6d7f-5e5f-057e06bc7e98",
                                "status": 1
                            },
                            {
                                "name": "过门石",
                                "parentId": "475035b3-7bc7-2568-4bb4-1339cc4110d3",
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
                                "id": "2a7f927c-a275-6488-8380-62bccc1e434b",
                                "status": 1
                            },
                            {
                                "name": "卫生间马赛克装饰砖",
                                "parentId": "475035b3-7bc7-2568-4bb4-1339cc4110d3",
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
                                "id": "b8805c51-3e55-efda-e4c4-38af30d60ab4",
                                "status": 1
                            },
                            {
                                "name": "厨房地面波打线",
                                "parentId": "475035b3-7bc7-2568-4bb4-1339cc4110d3",
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
                                "id": "78847520-1b0b-06a6-9ab8-4c8d211c6430",
                                "status": 1
                            }
                        ],
                        "id": "475035b3-7bc7-2568-4bb4-1339cc4110d3",
                        "status": 1
                    },
                    {
                        "name": "门",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 3,
                        "categories": [
                            {
                                "name": "卫生间玻璃门",
                                "parentId": "efb8cdaf-5be3-75e4-dbaf-fff28ac36d05",
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
                                "id": "d4977da3-3322-4c4b-afb7-d5e6b77549cd",
                                "status": 1
                            },
                            {
                                "name": "厨房木质移门",
                                "parentId": "efb8cdaf-5be3-75e4-dbaf-fff28ac36d05",
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
                                "id": "a2517b35-56c1-6db9-61e9-cfdb4b777fc7",
                                "status": 1
                            },
                            {
                                "name": "厨房合金移门",
                                "parentId": "efb8cdaf-5be3-75e4-dbaf-fff28ac36d05",
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
                                "id": "838c8915-bbd4-ba1c-cf6c-94943f28303a",
                                "status": 1
                            }
                        ],
                        "id": "efb8cdaf-5be3-75e4-dbaf-fff28ac36d05",
                        "status": 1
                    },
                    {
                        "name": "吊顶",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 4,
                        "categories": [
                            {
                                "name": "吊顶扣板",
                                "parentId": "427580a8-a677-baac-5044-9db2b24e4479",
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
                                "id": "34bbd545-b46e-7727-7161-d68ea17d4b17",
                                "status": 1
                            },
                            {
                                "name": "多功能取暖器",
                                "parentId": "427580a8-a677-baac-5044-9db2b24e4479",
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
                                "id": "4712ecfb-84c5-f3de-871d-d2b475b7dbc4",
                                "status": 1
                            },
                            {
                                "name": "集成照明",
                                "parentId": "427580a8-a677-baac-5044-9db2b24e4479",
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
                                "id": "1ad589cb-c61b-2b7a-028e-97d4ca4c8433",
                                "status": 1
                            },
                            {
                                "name": "镜前射灯",
                                "parentId": "427580a8-a677-baac-5044-9db2b24e4479",
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
                                "id": "acd31942-1309-9ca8-e7cb-5f9c27c1d244",
                                "status": 1
                            }
                        ],
                        "id": "427580a8-a677-baac-5044-9db2b24e4479",
                        "status": 1
                    },
                    {
                        "name": "卫浴洁具",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 4,
                        "categories": [
                            {
                                "name": "座便器",
                                "parentId": "10059698-ca08-f61f-4560-97d03066135e",
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
                                "id": "8646bbe1-7d4a-9297-0234-0037e12f9338",
                                "status": 1
                            },
                            {
                                "name": "蹲便器",
                                "parentId": "10059698-ca08-f61f-4560-97d03066135e",
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
                                "id": "b188f52f-403d-8c63-cb14-a7ad8e701a7c",
                                "status": 1
                            },
                            {
                                "name": "龙头",
                                "parentId": "10059698-ca08-f61f-4560-97d03066135e",
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
                                "id": "18b9bb4e-aa84-a8bd-74c0-6b1cdbd52d21",
                                "status": 1
                            },
                            {
                                "name": "花洒",
                                "parentId": "10059698-ca08-f61f-4560-97d03066135e",
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
                                "id": "f2484825-0258-f67a-f925-ee2425a30619",
                                "status": 1
                            }
                        ],
                        "id": "10059698-ca08-f61f-4560-97d03066135e",
                        "status": 1
                    },
                    {
                        "name": "卫浴五金",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 5,
                        "categories": [
                            {
                                "name": "毛巾架",
                                "parentId": "76bdec4a-5368-f918-f612-9ef9ab852889",
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
                                "id": "8f3ec493-7353-6f42-b4b8-1c5c84ce5e5d",
                                "status": 1
                            },
                            {
                                "name": "马桶刷架",
                                "parentId": "76bdec4a-5368-f918-f612-9ef9ab852889",
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
                                "id": "069b659b-264a-c391-1c33-05856b847935",
                                "status": 1
                            },
                            {
                                "name": "厕所架",
                                "parentId": "76bdec4a-5368-f918-f612-9ef9ab852889",
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
                                "id": "c28d7c21-a8cf-1bf7-31ba-ae8e7281e32b",
                                "status": 1
                            },
                            {
                                "name": "浴巾架",
                                "parentId": "76bdec4a-5368-f918-f612-9ef9ab852889",
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
                                "id": "0431adb9-25cc-62bf-5bf2-16ce774ff032",
                                "status": 1
                            },
                            {
                                "name": "转角篮",
                                "parentId": "76bdec4a-5368-f918-f612-9ef9ab852889",
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
                                "id": "2c8e96b1-9f98-94db-1644-9540af212f7c",
                                "status": 1
                            }
                        ],
                        "id": "76bdec4a-5368-f918-f612-9ef9ab852889",
                        "status": 1
                    },
                    {
                        "name": "浴室柜",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "金螳螂家专属定制",
                                "parentId": "109c55b1-b5fe-eb85-69e9-9df33d5d9515",
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
                                "id": "f02c7c90-514d-9843-5046-421541bb238b",
                                "status": 1
                            },
                            {
                                "name": "尚高",
                                "parentId": "109c55b1-b5fe-eb85-69e9-9df33d5d9515",
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
                                "id": "a7812d1d-d0e3-8f71-cf1e-ae6989b4512f",
                                "status": 1
                            }
                        ],
                        "id": "109c55b1-b5fe-eb85-69e9-9df33d5d9515",
                        "status": 1
                    },
                    {
                        "name": "淋浴房",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 7,
                        "categories": [
                            {
                                "name": "钻石型",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "b46e3c03-cc9e-bb05-695d-dbc52eedd17a",
                                "status": 1
                            },
                            {
                                "name": "扇型",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "893bd414-876d-9def-e5fe-efa45694be7b",
                                "status": 1
                            },
                            {
                                "name": "直角型",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "3303a736-0db5-9dd4-8fc8-356727cb1294",
                                "status": 1
                            },
                            {
                                "name": "一字无框移门",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "6a0fdd39-8001-fbaa-71be-5a14348d993b",
                                "status": 1
                            },
                            {
                                "name": "一字有框双移门",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "b69409ea-261b-5c82-88e6-c4dc320a07d2",
                                "status": 1
                            },
                            {
                                "name": "一字型联动三移门",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "c788a045-1aef-c479-2302-092cdf56cb81",
                                "status": 1
                            },
                            {
                                "name": "石材底座",
                                "parentId": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
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
                                "id": "6ec15e2d-1778-64a7-fc1c-e128595ada76",
                                "status": 1
                            }
                        ],
                        "id": "4fc539a0-c372-f097-4185-ba17f8b1b4f9",
                        "status": 1
                    },
                    {
                        "name": "防臭地漏",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
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
                        "id": "d5f40379-208a-e6a4-4ac2-dae354a88df3",
                        "status": 1
                    },
                    {
                        "name": "厨房五金",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "水槽及龙头",
                                "parentId": "9c10b5f7-b9cc-b64c-94a7-aee647b21159",
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
                                "id": "c902f260-05c5-a8ce-249b-83909a059972",
                                "status": 1
                            },
                            {
                                "name": "多功能挂墙置物架",
                                "parentId": "9c10b5f7-b9cc-b64c-94a7-aee647b21159",
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
                                "id": "64eb460f-6368-72ff-0309-b45525828cd0",
                                "status": 1
                            }
                        ],
                        "id": "9c10b5f7-b9cc-b64c-94a7-aee647b21159",
                        "status": 1
                    },
                    {
                        "name": "厨电",
                        "parentId": "361e1875-11b6-75c4-d263-e44a0f784050",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "烟机",
                                "parentId": "55805548-ce23-45e5-b671-e44dd506449f",
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
                                "id": "6e88e2b8-a8a8-f7fc-387a-657d69b85b08",
                                "status": 1
                            },
                            {
                                "name": "灶具",
                                "parentId": "55805548-ce23-45e5-b671-e44dd506449f",
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
                                "id": "1b1a0b24-906c-b3ed-0029-e12839eff0ce",
                                "status": 1
                            }
                        ],
                        "id": "55805548-ce23-45e5-b671-e44dd506449f",
                        "status": 1
                    }
                ],
                "id": "361e1875-11b6-75c4-d263-e44a0f784050",
                "status": 1
            },
            {
                "name": "阳台",
                "parentId": "cfa923b1-1777-0ed3-2132-77dce6add0fe",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "jtljia"
                ],
                "type": 0,
                "childcount": 3,
                "categories": [
                    {
                        "name": "阳台地砖",
                        "parentId": "2227fbe5-06c0-99ba-773d-00140b220bf4",
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
                        "id": "44f25123-af82-0bed-1c6e-938497b4d6dd",
                        "status": 1
                    },
                    {
                        "name": "阳台吸顶灯",
                        "parentId": "2227fbe5-06c0-99ba-773d-00140b220bf4",
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
                        "id": "905958ff-45b3-386b-1a17-00d66ef60695",
                        "status": 1
                    },
                    {
                        "name": "五金",
                        "parentId": "2227fbe5-06c0-99ba-773d-00140b220bf4",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "洗衣机龙头",
                                "parentId": "bdb8d053-d38c-eec5-b049-29571caa400f",
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
                                "id": "cc40672f-128a-3903-c98e-f2b6204209d0",
                                "status": 1
                            },
                            {
                                "name": "洗衣机地漏",
                                "parentId": "bdb8d053-d38c-eec5-b049-29571caa400f",
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
                                "id": "2db11f50-815c-8f9c-f533-2094716054fc",
                                "status": 1
                            }
                        ],
                        "id": "bdb8d053-d38c-eec5-b049-29571caa400f",
                        "status": 1
                    }
                ],
                "id": "2227fbe5-06c0-99ba-773d-00140b220bf4",
                "status": 1
            },
            {
                "name": "其他",
                "parentId": "cfa923b1-1777-0ed3-2132-77dce6add0fe",
                "logo": "",
                "icon": null,
                "emphasis": null,
                "thumbnail": null,
                "tenants": [
                    "jtljia"
                ],
                "type": 0,
                "childcount": 5,
                "categories": [
                    {
                        "name": "乳胶漆",
                        "parentId": "12257b6a-2220-8c45-bf38-dd10cfd59166",
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
                        "id": "03e0cfdb-83d8-6ce9-a2d8-0f9a898ff9d9",
                        "status": 1
                    },
                    {
                        "name": "壁纸",
                        "parentId": "12257b6a-2220-8c45-bf38-dd10cfd59166",
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
                        "id": "a855f119-30d9-6d4c-c1e6-c0d67d552e3d",
                        "status": 1
                    },
                    {
                        "name": "踢脚线",
                        "parentId": "12257b6a-2220-8c45-bf38-dd10cfd59166",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "木质踢脚线",
                                "parentId": "ad6a7c10-b1f4-0475-1c80-978e9248573b",
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
                                "id": "34b0ce13-0f34-c770-4274-313c4c36187d",
                                "status": 1
                            },
                            {
                                "name": "瓷砖踢脚线",
                                "parentId": "ad6a7c10-b1f4-0475-1c80-978e9248573b",
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
                                "id": "2098f199-d2cc-cb8c-0ed2-48b89e248fe7",
                                "status": 1
                            }
                        ],
                        "id": "ad6a7c10-b1f4-0475-1c80-978e9248573b",
                        "status": 1
                    },
                    {
                        "name": "开关插座",
                        "parentId": "12257b6a-2220-8c45-bf38-dd10cfd59166",
                        "logo": "",
                        "icon": null,
                        "emphasis": null,
                        "thumbnail": null,
                        "tenants": [
                            "jtljia"
                        ],
                        "type": 0,
                        "childcount": 2,
                        "categories": [
                            {
                                "name": "开关",
                                "parentId": "4b6c7503-54f5-f941-7742-4c54be03baab",
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
                                "id": "726d3cc3-fbc6-096b-3440-3ce163ef0823",
                                "status": 1
                            },
                            {
                                "name": "插座",
                                "parentId": "4b6c7503-54f5-f941-7742-4c54be03baab",
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
                                "id": "d93de2f2-ce94-ecef-b4d3-305437d660ec",
                                "status": 1
                            }
                        ],
                        "id": "4b6c7503-54f5-f941-7742-4c54be03baab",
                        "status": 1
                    },
                    {
                        "name": "哑口套",
                        "parentId": "12257b6a-2220-8c45-bf38-dd10cfd59166",
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
                        "id": "992b0ff8-fdda-9ab4-a27f-7c20bfe8d2fc",
                        "status": 1
                    }
                ],
                "id": "12257b6a-2220-8c45-bf38-dd10cfd59166",
                "status": 1
            }
        ];

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
                <CatalogCategory categories={categories}
                    showCategories={showCategories}>
                </CatalogCategory>
            </div>
        );
    }
}