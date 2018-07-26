"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const housedesign_1 = require("../catalogcontent/housedesign/housedesign");
const globalsearchmaterial_1 = require("../catalogcontent/globalsearchmaterial/globalsearchmaterial");
const hydropower_1 = require("../catalogcontent/hydropower/hydropower");
const catalogmodel_1 = require("../catalogcontent/catalogmodel/catalogmodel");
const catalogentity_1 = require("../../../entity/catalogentity");
const ComponentModules = {};
ComponentModules[catalogentity_1.CatalogContentType.HouseDesign] = housedesign_1.default;
ComponentModules[catalogentity_1.CatalogContentType.GlobalSearchMaterial] = globalsearchmaterial_1.default;
ComponentModules[catalogentity_1.CatalogContentType.Hydropower] = hydropower_1.default;
ComponentModules[catalogentity_1.CatalogContentType.CatalogModel] = catalogmodel_1.default;
class CatalogAbstractFactory {
    constructor() { }
    static registerModule(modulesObject) {
        for (let key in modulesObject) {
            CatalogAbstractFactory.types[key] = modulesObject[key];
        }
    }
    static getModule(type) {
        return CatalogAbstractFactory.types[type]
            ? CatalogAbstractFactory.types[type]
            : ComponentModules[catalogentity_1.CatalogContentType.HouseDesign];
    }
}
CatalogAbstractFactory.types = {};
CatalogAbstractFactory.registerModule(ComponentModules);
exports.default = CatalogAbstractFactory;
//# sourceMappingURL=catalogabstractfactory.js.map