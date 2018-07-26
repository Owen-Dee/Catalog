"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const catalog_1 = require("./catalog");
const rootReducer = redux_1.combineReducers({
    catalog: catalog_1.changeCatalogType,
});
exports.default = rootReducer;
//# sourceMappingURL=reducers.js.map