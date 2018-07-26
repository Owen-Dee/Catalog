"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../../../api/service");
const catalogcache_1 = require("./catalogcache");
class CatalogService {
    constructor() {
        this.service = service_1.default.getInstance();
        this.catalogCache = catalogcache_1.default.getInstance();
    }
    getCategories(params) {
        return this.service.getCategories(params).then((result) => {
            return result;
        }).catch((error) => {
            console.error('Search Categories error:' + error);
        });
    }
    getCatalogModels(categoryId) {
        return this.service.getCatalogModels(categoryId).then((result) => {
            return result;
        }).catch((error) => {
            console.error('Search Catalog Models error:' + error);
        });
    }
    static getInstance() {
        CatalogService._instance = CatalogService._instance ||
            new CatalogService();
        return CatalogService._instance;
    }
}
exports.default = CatalogService;
//# sourceMappingURL=catalogservice.js.map