import Service from '../../../api/service';
import CatalogCache from './catalogcache';

export default class CatalogService {
    service: any;
    catalogCache: any;
    static _instance;

    constructor() {
        this.service = Service.getInstance();
        this.catalogCache = CatalogCache.getInstance();
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