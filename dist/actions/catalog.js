"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @component actions
 * @description catalog动作和函数
 **/
const constants = require("../constants/catalog");
const catalogservice_1 = require("../components/catalog/utils/catalogservice");
/**
 * @description: 更改catalog类型
 * @param catalogType : 类型值
 */
function changeCatalogType(catalogType) {
    return {
        type: constants.CHANGE_CATALOG_TYPE,
        payLoad: catalogType
    };
}
exports.changeCatalogType = changeCatalogType;
function changeCatalogModels(modelsData) {
    return {
        type: constants.CHANGE_CATALOG_MODELS,
        payLoad: modelsData
    };
}
exports.changeCatalogModels = changeCatalogModels;
function getCatalogModels(categoryId) {
    return (dispatch) => {
        const catalogService = catalogservice_1.default.getInstance();
        catalogService.getCatalogModels(categoryId).then(result => {
            if (!result || !result.data.items) {
                dispatch(changeCatalogModels([]));
            }
            let modelsData = [];
            modelsData['models'] = result.data.items;
            modelsData['total'] = result.data.total;
            dispatch(changeCatalogModels(modelsData));
        }).catch(error => {
            console.error('getCatalogModels error:' + error);
        });
    };
}
exports.getCatalogModels = getCatalogModels;
//# sourceMappingURL=catalog.js.map