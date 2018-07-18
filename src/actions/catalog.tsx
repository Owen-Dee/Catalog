/**
 * @component actions
 * @description demo动作和函数
 **/

import * as constants from '../constants/catalog';

export interface ICatalogType {
	type: constants.CHANGE_CATALOG_TYPE;
}

export function changeCatalogType(): ICatalogType {
	return {
		type: constants.CHANGE_CATALOG_TYPE
	}
}

export type All = ICatalogType;