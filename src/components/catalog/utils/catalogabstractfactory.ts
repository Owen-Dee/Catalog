import HouseDesign from '../catalogcontent/housedesign/housedesign';
import GlobalSearchMaterial from '../catalogcontent/globalsearchmaterial/globalsearchmaterial';
import Hydropower from '../catalogcontent/hydropower/hydropower';
import CatalogModel from '../catalogcontent/catalogmodel/catalogmodel';
import { CatalogContentType } from '../../../entity/catalogentity';

const ComponentModules = {};
ComponentModules[CatalogContentType.HouseDesign] = HouseDesign;
ComponentModules[CatalogContentType.GlobalSearchMaterial] = GlobalSearchMaterial;
ComponentModules[CatalogContentType.Hydropower] = Hydropower;
ComponentModules[CatalogContentType.CatalogModel] = CatalogModel;

class CatalogAbstractFactory {
    constructor() {}

    static types = {};

    static registerModule(modulesObject: object) {
        for (let key in modulesObject) {
            CatalogAbstractFactory.types[key] = modulesObject[key];
        }
    }

    static getModule(type: string) {
        return CatalogAbstractFactory.types[type] 
            ? CatalogAbstractFactory.types[type] 
            : ComponentModules[CatalogContentType.HouseDesign] ;
    }
}

CatalogAbstractFactory.registerModule(ComponentModules);

export default CatalogAbstractFactory;