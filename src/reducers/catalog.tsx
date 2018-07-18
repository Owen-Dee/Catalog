import { All } from '../actions/catalog';
import { Catalog } from '../entity';
import * as Constants from '../constants/catalog';
import { CatalogSidebarType } from '../entity/componententity';

const initState = {
	catalogType: CatalogSidebarType.GlobalSearch,
};

export function changeCatalogType(state: Catalog = initState, action: All): Catalog {
	switch (action.type) {
		case Constants.CHANGE_CATALOG_TYPE:
			return {
				...state,
				catalogType: state.catalogType + 1
			};
			break;
		default:
			break;
	}

	return state;
}