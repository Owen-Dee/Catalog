"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactPaginate = require("react-paginate");
require("./pagination.scss");
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forcePage: 0,
            jumpPageIndex: 1
        };
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    changePage(pageIndex) {
        this.setState({
            jumpPageIndex: parseInt(pageIndex) + 1
        });
    }
    changeJumpPage(e) {
        let value = ;
        if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) <= 0) {
            value = 1;
        }
        else {
            value = parseInt(e.target.value);
        }
        this.setState({
            jumpPageIndex: value
        });
    }
    jumpPage(e) {
        if (e.key === 'Enter') {
            let value;
            if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) <= 0) {
                value = 1;
            }
            else {
                value = parseInt(e.target.value);
            }
            this.setState({
                forcePage: value - 1
            });
        }
    }
    render() {
        return (React.createElement("div", { className: "pagination-container" },
            React.createElement(ReactPaginate, { pageCount: 30, pageRangeDisplayed: 3, marginPagesDisplayed: 1, forcePage: this.state.forcePage, previousLabel: "<", nextLabel: ">", breakLabel: "...", containerClassName: "pagination-control", previousClassName: "prev-class", nextClassName: "next-class", pageClassName: "page-item", activeClassName: "active", onPageChange: this.changePage.bind(this) }),
            React.createElement("div", { className: "jump-container" },
                React.createElement("span", { className: "title" }, "\u8DF3\u81F3"),
                React.createElement("div", { className: "box-area" },
                    React.createElement("div", { className: "jump-page" },
                        React.createElement("div", { className: "page-info" },
                            React.createElement("input", { type: "text", className: "input-control", value: this.state.jumpPageIndex, onChange: this.changeJumpPage.bind(this), onKeyPress: this.jumpPage.bind(this) }),
                            React.createElement("span", { className: "name" }, "\u9875"),
                            React.createElement("span", { className: "jump-btn", onClick: this.jumpPage.bind(this) }, "\u8DF3\u8F6C"))),
                    React.createElement("span", { className: "dot-bottom" })))));
    }
}
exports.default = Pagination;
//# sourceMappingURL=pagination.js.map