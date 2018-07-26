"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants = require("../constants/catalog");
const catalogentity_1 = require("../entity/catalogentity");
const initState = {
    catalogType: catalogentity_1.CatalogContentType.GlobalSearchMaterial,
    modelsData: []
};
function changeCatalogType(state = initState, action) {
    switch (action.type) {
        case Constants.CHANGE_CATALOG_TYPE:
            return Object.assign({}, state, { catalogType: action.payLoad });
            break;
        case Constants.CHANGE_CATALOG_MODELS:
            return Object.assign({}, state, { modelsData: action.payLoad });
            break;
        default:
            break;
    }
    return state;
}
exports.changeCatalogType = changeCatalogType;
//# sourceMappingURL=catalog.js.map