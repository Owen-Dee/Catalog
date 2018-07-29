import { All } from '../actions/catalog';
import { Catalog } from '../entity/storeentity';
import * as Constants from '../constants/catalog';
import { CatalogContentType } from '../entity/catalogentity';

const initState = {
	catalogType: CatalogContentType.GlobalSearchMaterial,
	modelsData: [],
	pageRandom: 0,
	categoryId: '',
	isFecting: false
};

export function changeCatalogType(state: Catalog = initState, action: All): Catalog {
	switch (action.type) {
		case Constants.CHANGE_CATALOG_TYPE:
			return {
				...state,
				catalogType: action.payLoad
			};
		case Constants.RESET_CATALOG_PAGEINDEX:
			return {
				...state,
				pageRandom: action.payLoad
			};
		case Constants.RECORD_SELECTED_CATEGORY_ID:
			return {
				...state,
				categoryId: action.payLoad
			}
		case Constants.CATALOG_MODELS_REQUEST:
			return {
				...state,
				isFecting: action.payLoad
			}
		case Constants.CATALOG_MODELS_RECEIVE:
			return {
				...state,
				modelsData: action.modelsData,
				isFecting: action.isFecting
			}
		default:
			break;
	}

	return state;
}