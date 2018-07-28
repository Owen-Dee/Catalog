import * as React from 'react';
import store from '../../../../store/index';
import * as Actions from '../../../../actions/catalog';
import * as ReactPaginate from 'react-paginate';
import './pagination.scss';

interface IPaginationProps {
    pageCount: number,
    onChangePageIndex: (val) => void
}

/**
 * @description: 分页组件状态
 * @forcePage: 重置选中的页数
 * @jumpPageIndex: 记录跳转的页面
 */
interface IPaginationStates {
    forcePage: number,
    jumpPageIndex: number,
    pageRandom: number,
    pageRange: number,
    marginPages: number
}

export default class Pagination extends React.Component<IPaginationProps, IPaginationStates> {
    constructor(props: IPaginationProps) {
        super(props);
        this.state = {
            forcePage: 0,
            jumpPageIndex: 1,
            pageRandom: 0,
            pageRange: 3,
            marginPages: 1
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

    changePage(pageObj) {
        // 1.forcePage的值必须设置,如果不设置,forcePage始终是默认值0.
        // 2.当点击其他的分类按钮时,store.getState().catalog.pageRandom的值会发生变化.
        // 3.此时store.subscribe()会监听到pageRandom的变化,然后会重新设置pageRandom,forcePage,jumpPageIndex的值.
        // 4.而forcePage重置后的值仍为0,没有发生改变,分页的数据便不会被重置.
        this.setState({
            jumpPageIndex: parseInt(pageObj.selected) + 1,
            forcePage: parseInt(pageObj.selected) 
        });

        this.props.onChangePageIndex(parseInt(pageObj.selected));
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

            this.props.onChangePageIndex(parseInt(e.target.value) - 1);
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

        this.props.onChangePageIndex(pageIndex - 1);
    }

    render() {
        let paginationStyle = this.props.pageCount > 0 ? {display: 'block'} : {display: 'none'};
        return (
            <div className="pagination-container" style={paginationStyle}>
                <ReactPaginate
                    pageCount={this.props.pageCount}
                    pageRangeDisplayed={this.state.pageRange}
                    marginPagesDisplayed={this.state.marginPages}
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