import * as React from 'react';
let PerfectScrollbar = require('react-perfect-scrollbar');
import 'react-perfect-scrollbar/dist/css/styles.css';
import './expandconditions.scss';

export default class ExpandConditions extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="expand-conditions">
                <PerfectScrollbar>
                    <div className="condition-item">
                        <div className="title">
                            风格
                        </div>
                        <div className="split-line"></div>
                        <div className="style-items">
                            <span className="item">
                                不限
                            </span>
                            <span className="item">
                                现代
                            </span>
                            <span className="item">
                                美式
                            </span>
                            <span className="item">
                                地中海
                            </span>
                            <span className="item">
                                欧式
                            </span>
                            <span className="item">
                                日式
                            </span>
                            <span className="item">
                                田园
                            </span>
                        </div>
                    </div>
                    <div className="condition-item">
                        <div className="title">
                            颜色
                        </div>
                        <div className="split-line"></div>
                        <div className="style-items">
                            <span className="item">
                                不限
                            </span>
                            <span className="item">
                                白色
                            </span>
                            <span className="item">
                                黄色
                            </span>
                            <span className="item">
                                红色
                            </span>
                            <span className="item">
                                绿色
                            </span>
                            <span className="item">
                                紫色
                            </span>
                            <span className="item">
                                褐色
                            </span>
                        </div>
                    </div>
                    <div className="condition-item">
                        <div className="title">
                            品牌
                        </div>
                        <div className="split-line"></div>
                        <div className="style-items">
                            <div className="brand-item">
                                飞利浦
                            </div>
                            <div className="brand-item">
                                博德
                            </div>
                            <div className="brand-item">
                                施耐特
                            </div>
                            <div className="brand-item">
                                德邦
                            </div>
                            <div className="brand-item">
                                索菲亚
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        );
    }
}