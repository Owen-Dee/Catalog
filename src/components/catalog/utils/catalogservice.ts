import Service from '../../../api/service';
import CatalogCache from './catalogcache';

interface ISearchConditions {
    categoryId: string,
    pageIndex: number
}

export default class CatalogService {
    service: any;
    catalogCache: any;
    eachRequestCount: number;
    static _instance;

    constructor() {
        this.eachRequestCount = 20;                  //每次向服务查询的数据数目
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

    getSearchConditions(params: ISearchConditions) {
        let skip = params.pageIndex * this.eachRequestCount;
        let conditions = {
            Skip: skip,
            Limit: this.eachRequestCount,
            CatalogMenuId: params.categoryId,
            PackageId: '',
            CategoryId: '',
            BrandId: '',
            Color: '',
            Style: '',
            Facets: '',
            tenantOperator: 'jtljia',
            Tenant: '!Eq',
            Keywords: ''
        };

        return conditions;
    }

    getCatalogModels(params: ISearchConditions) {
        let conditions = this.getSearchConditions(params);
        return this.service.getCatalogModels(conditions).then((result) => {
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