"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lru_map_1 = require("lru_map");
class CatalogCache {
    constructor() {
        this.lruLimit = 1000;
        this.pageContext = new lru_map_1.LRUMap(this.lruLimit);
    }
    getPageContext(cacheId) {
        return this.pageContext.get(cacheId);
    }
    setPageContext(cacheId, cacheData) {
        this.pageContext.set(cacheId, cacheData);
    }
    static getInstance() {
        CatalogCache._instance = CatalogCache._instance ||
            new CatalogCache();
        return CatalogCache._instance;
    }
}
exports.default = CatalogCache;
//# sourceMappingURL=catalogcache.js.map