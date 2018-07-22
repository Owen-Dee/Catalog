import { All } from '../actions/catalog';
import { Catalog } from '../entity/storeentity';
import * as Constants from '../constants/catalog';
import { CatalogContentType } from '../entity/catalogentity';

const initState = {
	catalogType: CatalogContentType.GlobalSearchMaterial,
	modelsData: []
};

export function changeCatalogType(state: Catalog = initState, action: All): Catalog {
	switch (action.type) {
		case Constants.CHANGE_CATALOG_TYPE:
			return {
				...state,
				catalogType: action.payLoad
			};
			break;
		case Constants.CHANGE_CATALOG_MODELS:
			return {
				...state,
				modelsData: action.payLoad
			};
			break;
		default:
			break;
	}

	return state;
}