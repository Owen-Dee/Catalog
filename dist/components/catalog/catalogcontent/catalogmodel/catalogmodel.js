"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("../../../../store/index");
const headersearch_1 = require("../headersearch/headersearch");
const pagination_1 = require("../../common/pagination/pagination");
let PerfectScrollbar = require('react-perfect-scrollbar');
require("react-perfect-scrollbar/dist/css/styles.css");
require("./catalogmodel.scss");
class CatalogModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelsData: []
        };
        index_1.default.subscribe(() => {
            debugger;
            this.setState({
                modelsData: index_1.default.getState().catalog.modelsData
            });
        });
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    getModelList() {
        const models = this.state.modelsData['models'];
        const arrs = models ? models : [];
        let modelList = '';
        if (arrs.length === 0) {
            return (modelList);
        }
        modelList = models.map(model => {
            return React.createElement("div", { className: "model", key: model.id },
                React.createElement("div", { className: "model-img" },
                    React.createElement("img", { src: model.imagesResize[0] }),
                    React.createElement("div", { className: "favorite-controls" },
                        React.createElement("img", { className: "add", src: require('./img/favorite_normal.svg'), title: "\u6536\u85CF" }),
                        React.createElement("img", { className: "added", src: require('./img/favorite_light.svg'), title: "\u53D6\u6D88\u6536\u85CF" }))),
                React.createElement("div", { className: "description" },
                    React.createElement("span", { className: "name" }, model.name)));
        });
        return (modelList);
    }
    render() {
        const modelList = this.getModelList();
        return (React.createElement("div", { className: "catalog-model" },
            React.createElement(headersearch_1.default, null),
            React.createElement("div", { className: "models-materials" },
                React.createElement(PerfectScrollbar, null, modelList)),
            React.createElement(pagination_1.default, null)));
    }
}
exports.default = CatalogModel;
//# sourceMappingURL=catalogmodel.js.map