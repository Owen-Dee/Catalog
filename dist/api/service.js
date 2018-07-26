"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Service {
    constructor() {
        this.categoryUrl = 'http://dev-service.jtl3d.com/api/catalog/CatalogV2/';
    }
    baseApi(url, method, data) {
        return axios_1.default({
            url: url,
            method: method,
            data: data,
            responseType: 'json',
        }).catch(err => {
            console.log('request error, HTTP CODE: ', err.response.status);
            return Promise.reject(err);
        });
    }
    getCategories(params) {
        let url = this.categoryUrl + 'SearchCategories?' + params;
        let method = 'get';
        let data = null;
        return this.baseApi(url, method, data);
    }
    getCatalogModels(categoryId) {
        let url = this.categoryUrl + 'SearchProducts';
        let data = {
            BrandId: "",
            CatalogMenuId: categoryId,
            CategoryId: "",
            Color: "",
            Facets: "{}",
            Keywords: "",
            Limit: 100,
            PackageId: "",
            Skip: 0,
            Style: "",
            Tenant: "jtljia",
            tenantOperator: "!Eq"
        };
        let method = 'post';
        return this.baseApi(url, method, data);
    }
    static getInstance() {
        Service._instance = Service._instance ||
            new Service();
        return Service._instance;
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map