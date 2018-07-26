"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("../../../store/index");
const catalogabstractfactory_1 = require("../utils/catalogabstractfactory");
require("./catalogcontent.scss");
class CatalogContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogType: index_1.default.getState().catalog.catalogType
        };
        index_1.default.subscribe(() => {
            this.setState({
                catalogType: index_1.default.getState().catalog.catalogType
            });
        });
    }
    componentWillMount() {
        let name = index_1.default.getState().catalog.catalogType;
        console.log('CatalogContent componentWillMount:' + name);
    }
    componentDidUpdate() {
        let name = index_1.default.getState().catalog.catalogType;
        console.log('CatalogContent componentDidUpdate:' + name);
    }
    render() {
        let contentType = index_1.default.getState().catalog.catalogType;
        let ContentComponent = catalogabstractfactory_1.default.getModule(contentType);
        return (React.createElement("div", { className: "catalog-content" },
            React.createElement(ContentComponent, null)));
    }
}
exports.default = CatalogContent;
//# sourceMappingURL=catalogcontent.js.map