import { All } from '../actions/catalog';
import { Catalog } from '../entity/storeentity';
import * as Constants from '../constants/catalog';
import { CatalogContentType } from '../entity/catalogentity';

const initState = {
	catalogType: CatalogContentType.GlobalSearchMaterial,
	modelsData: [],
	pageRandom: 0,
	categoryId: '',
    isFetching: false,
	tenantOperator: 'Eq',
	secondCategories: []
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
                isFetching: action.payLoad
			}
		case Constants.CATALOG_MODELS_RECEIVE:
			return {
				...state,
				modelsData: action.modelsData,
                isFetching: action.isFetching
			}
		case Constants.RECORD_CATALOG_SEARCH_CONDITIONS:
			return {
				...state,
				categoryId: action.categoryId,
				tenantOperator: action.tenantOperator
			}
		case Constants.RECORD_SECOND_CATEGORIES:
			return {
				...state,
				secondCategories: action.payLoad
			}
		default:
			break;
	}

	return state;
}