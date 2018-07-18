import axios from 'axios';

export default class CatalogService{
    categoryUrl: string;

    constructor() {
        this.categoryUrl = 'http://dev-service.jtl3d.com/api/catalog/CatalogV2/SearchCategories';
    }

    static _instance;

    getCategories(params) {
        let url = this.categoryUrl + '?' + params;
        let method = 'get';
        return axios({
            url: url,
            method: method,
            responseType: 'json',
        }).catch(err => {
            console.log('request error, HTTP CODE: ', err.response.status);
            return Promise.reject(err);
        });
    }

    static getInstance() {
        CatalogService._instance = CatalogService._instance ||
            new CatalogService();

        return CatalogService._instance;
    }
}