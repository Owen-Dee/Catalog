"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _redux_4_0_0_redux_1 = require("../../node_modules/_redux@4.0.0@redux");
const _redux_thunk_2_3_0_redux_thunk_1 = require("../../node_modules/_redux-thunk@2.3.0@redux-thunk");
const reducers_1 = require("../reducers/reducers");
const _redux_devtools_extension_2_13_5_redux_devtools_extension_1 = require("../../node_modules/_redux-devtools-extension@2.13.5@redux-devtools-extension");
const StoreConfig = () => {
    return _redux_4_0_0_redux_1.createStore(reducers_1.default, _redux_devtools_extension_2_13_5_redux_devtools_extension_1.composeWithDevTools(_redux_4_0_0_redux_1.applyMiddleware(_redux_thunk_2_3_0_redux_thunk_1.default)));
};
const store = StoreConfig();
exports.default = store;
//# sourceMappingURL=index.js.map