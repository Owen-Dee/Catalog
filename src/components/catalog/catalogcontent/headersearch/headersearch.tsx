import * as React from 'react';
import ExpandConditions from '../../common/expandconditions/expandconditions';
import store from '../../../../store/index';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './HeaderSearch.scss';

interface IHeaderSearchStates {
    categoryId: string,
    secondMenuName: string,
    thirdMenuName: string,
    secondCategories: Array<any>,
    thirdCategories: Array<any>
}

export default class HeaderSearch extends React.Component<any, IHeaderSearchStates> {
    textInput: any;
    unsubscribe: any;
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            categoryId: '',
            secondMenuName: '',
            thirdMenuName: '',
            secondCategories: [],
            thirdCategories: []
        };
        // this.unsubscribe = store.subscribe(() => {
        //     if (this.state.categoryId !== store.getState().catalog.categoryId) {
        //         this.setState({
        //             categoryId: store.getState().catalog.categoryId,
        //             secondCategories: store.getState().catalog.secondCategories
        //         });
        //         setTimeout(() => {
        //             this.initStates();
        //         }, 0);
        //     }
        // });
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(() => {
            if (this.state.categoryId !== store.getState().catalog.categoryId) {
                this.setState({
                    categoryId: store.getState().catalog.categoryId,
                    secondCategories: store.getState().catalog.secondCategories
                });
                // setTimeout(() => {
                //     this.initStates();
                // }, 0);
            }
        });
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentWillUpdate() {
        this.textInput.current.focus();
    }

    componentWillUnmount() {
        this.unsubscribe(); // 解除监听。
    }

    initStates() {
        let clickFirstMenu = true; // 点击第一级category menu
        let secondCategories = [...this.state.secondCategories];
        if (secondCategories.length === 0) { // 第一级category menu没有子category
            let item = {
                id: this.state.categoryId,
                categories: [],
                name: '全部'
            };

            secondCategories.push(item);
            let thirdCategories = [];
            thirdCategories.push(item);
            this.setState({
                secondMenuName: '全部',
                thirdMenuName: '全部',
                secondCategories: secondCategories,
                thirdCategories: thirdCategories
            });
        } else { // 有子category       
            for (let i = 0; i < secondCategories.length; i++) {
                if (this.state.categoryId === secondCategories[i].id) { // 如果点击的是第二级category menu
                    let secondItem = {
                        id: secondCategories[i].parentId,
                        categories: [],
                        name: '全部' 
                    };
                    secondCategories.push(secondItem); // 将父节点作为【全部】分类添加进来
                    var thirdCategories = [...secondCategories[i].categories];
                    // 设置第三级数据
                    let thirdItem = {
                        id: secondCategories[i].id,
                        categories: [],
                        name: '全部' 
                    };
                    thirdCategories.push(thirdItem);
                    this.setState({
                        secondMenuName: secondCategories[i].name,
                        thirdMenuName: '全部',
                        secondCategories:  secondCategories,
                        thirdCategories: thirdCategories
                    });
                    clickFirstMenu = false;

                    break;
                } else { // 如果点击的是第三级category menu
                    let thirdCategories = [...secondCategories[i].categories];
                    for (let j = 0; j < thirdCategories.length; j++) {
                        if (this.state.categoryId === thirdCategories[j].id) {
                            let secondItem = {
                                id: secondCategories[i].parentId,
                                categories: [],
                                name: '全部' 
                            };
                            secondCategories.push(secondItem); // 将父节点作为【全部】分类添加进来
                            // 设置第三级数据
                            let thirdItem = {
                                id: secondCategories[i].id,
                                categories: [],
                                name: '全部' 
                            };
                            thirdCategories.push(thirdItem);
                            this.setState({
                                secondMenuName: secondCategories[i].name,
                                thirdMenuName: thirdCategories[j].name,
                                secondCategories: secondCategories,
                                thirdCategories: thirdCategories
                            });
                            clickFirstMenu = false;

                            break;
                        }
                    }
                }
            }

            if (clickFirstMenu) { // 点击第一级category menu
                var thirdCategories = [];
                let item = {
                    id: secondCategories[0].parentId,
                    categories: [],
                    name: '全部' 
                };
                secondCategories.push(item); // 将父节点作为【全部】分类添加进来
                thirdCategories.push(item);
                this.setState({
                    secondMenuName: '全部',
                    thirdMenuName: '全部',
                    secondCategories:  secondCategories,
                    thirdCategories: thirdCategories
                });
            }
        }
    }

    getSecondMenuList() {
        debugger
        const menuList = this.state.secondCategories.map(category => {
            return <div className="item" key={category.id}>{category.name}</div>
        });
        let secondMenuList = <div className="condition-item">
                                <div className="name-control">
                                    <div className="name">{this.state.secondMenuName}</div>
                                    <span className="dot-bottom"></span>
                                    <span className="dot-top"></span>
                                </div>
                                <div className="items">
                                    <PerfectScrollbar>
                                        {menuList}
                                    </PerfectScrollbar>
                                </div>
                            </div>;

        return (
            secondMenuList
        )
    }

    render() {
        const secondMenuList = this.getSecondMenuList();
        return (
            <div className="header-search">
                <div className="search-control">
                    <input className="search-input" placeholder="名称" ref={this.textInput} />
                    <img src={require('./img/search.svg')} alt="" />
                </div>
                <div className="select-conditions">
                    <div className="condition-item">
                        <div className="name-control">
                            <div className="name">4.0套餐</div>
                            <span className="dot-bottom"></span>
                            <span className="dot-top"></span>
                        </div>
                        <div className="items">
                            <PerfectScrollbar>
                                <div className="item">5.0套餐</div>
                                <div className="item">4.0套餐</div>
                                <div className="item">3.1套餐</div>
                                <div className="item">3.0套餐</div>
                            </PerfectScrollbar>
                        </div>
                    </div>

                    {secondMenuList}

                    <div className="condition-item">
                        <div className="name-control">
                            <div className="name">波打线</div>
                            <span className="dot-bottom"></span>
                            <span className="dot-top"></span>
                        </div>
                        <div className="items">
                            <PerfectScrollbar>
                                <div className="item">波打线</div>
                                <div className="item">过门石</div>
                                <div className="item">烟道</div>
                                <div className="item">石坎</div>
                            </PerfectScrollbar>
                        </div>
                    </div>

                    <div className="expand-conditions-icon">
                        <img src={require('./img/expand.svg')} className="normal" alt=""/>
                        <img src={require('./img/expand-light.svg')} className="light" alt="" />
                    </div>
                </div>
                <ExpandConditions></ExpandConditions>
            </div>
        );
    }
}