import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './catalogmodel.scss';

interface ICatalogModelStates {
    modelsData: Array<any>
}

export default class CatalogModel extends React.Component<any, ICatalogModelStates> {
    constructor(props) {
        super(props);
        this.state = {
            modelsData: []
        };
        store.subscribe(() => {
            this.setState({
                modelsData: store.getState().catalog.modelsData
            });
        });
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    getList() {
        debugger
        const arrs = this.state.modelsData? this.state.modelsData : [];
        const list = arrs.map(arr => {
            return <div key={arr.id}>{arr.name}</div>
        });

        return (
            list
        );
    }

    render() {
        const list = this.getList();
        return (
            <div className="catalog-model">
                <div className="header-search">
                    <div className="search-control">
                        <input className="search-input" placeholder="名称" />
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

                        <div className="condition-item">
                            <div className="name-control">
                                <div className="name">瓷砖</div>
                                <span className="dot-bottom"></span>
                                <span className="dot-top"></span>
                            </div>
                            <div className="items">
                                <PerfectScrollbar>
                                    <div className="item">瓷砖</div>
                                    <div className="item">入户门套</div>
                                    <div className="item">筒灯</div>
                                    <div className="item">地板</div>
                                </PerfectScrollbar>
                            </div>
                        </div>

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

                        <div className="expand-conditions">
                            <img src={require('./img/expand.svg')} className="normal" alt=""/>
                            <img src={require('./img/expand-light.svg')} className="light" alt="" />
                        </div>
                    </div>
                </div>
                <PerfectScrollbar>
                    {list}
                </PerfectScrollbar>
            </div>
        );
    }
}