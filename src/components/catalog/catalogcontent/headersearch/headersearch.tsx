import * as React from 'react';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './HeaderSearch.scss';

export default class HeaderSearch extends React.Component<any, any> {
    textInput: any;
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentWillUpdate() {
        this.textInput.current.focus();
    }

    render() {
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
        );
    }
}