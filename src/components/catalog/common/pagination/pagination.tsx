import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import * as ReactPaginate from 'react-paginate';
import './pagination.scss';
/**
 * @description: 分页组件状态
 * @forcePage: 重置选中的页数
 * @jumpPageIndex: 记录跳转的页面
 */
interface IPaginationStates {
    forcePage: number,
    jumpPageIndex: number,
    pageRandom: number
}

export default class Pagination extends React.Component<any, IPaginationStates> {
    constructor(props) {
        super(props);
        this.state = {
            forcePage: 0,
            jumpPageIndex: 1,
            pageRandom: 0
        };
        store.subscribe(() => {
            if (store.getState().catalog.pageRandom !== this.state.pageRandom) {
                this.setState({
                    pageRandom: store.getState().catalog.pageRandom,
                    forcePage: 0,
                    jumpPageIndex: 1,
                });
            }
        });
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    changePage(pageObj) {
        this.setState({
            jumpPageIndex: parseInt(pageObj.selected) + 1,
            forcePage: parseInt(pageObj.selected)
        });
    }

    changeJumpPage(e) {
        let value = e.target.value;
        this.setState({
            jumpPageIndex: value
        });
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            let value;
            if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) <= 0) {
                value = 1
            } else {
                value = parseInt(e.target.value);
            }

            this.setState({
                forcePage: value - 1
            });
        }
    }

    jumpToSpecifiedPage() {
        let pageIndex;
        if (isNaN(Number(this.state.jumpPageIndex)) || Number(this.state.jumpPageIndex) <= 0) {
            pageIndex = 1
        } else {
            pageIndex = Number(this.state.jumpPageIndex);
        }
        
        this.setState({
            forcePage: pageIndex - 1
        });
    }

    render() {
        return (
            <div className="pagination-container">
                <ReactPaginate
                    pageCount={30}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    forcePage={this.state.forcePage}
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    containerClassName={"pagination-control"}
                    previousClassName={"prev-class"}
                    nextClassName={"next-class"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
                    onPageChange={this.changePage.bind(this)}>
                </ReactPaginate>
                <div className="jump-container">
                    <span className="title">跳至</span>
                    <div className="box-area">
                        <div className="jump-page">
                            <div className="page-info">
                                <input type="text" className="input-control" 
                                    value={this.state.jumpPageIndex} 
                                    onChange={this.changeJumpPage.bind(this)}
                                    onKeyPress={this.handleKeyPress.bind(this)}/>
                                <span className="name">页</span>
                                <span className="jump-btn" onClick={this.jumpToSpecifiedPage.bind(this)}>跳转</span>
                            </div>
                        </div>
                        <span className="dot-bottom"></span>
                    </div>
                </div>
            </div>
        );
    }
}