/**
 * @component actions
 * @description demo动作和函数
 **/

import * as constants from '../constants/catalog';

export interface ICatalogType {
	type: constants.CHANGE_CATALOG_TYPE,
	value: string
}

export function changeCatalogType(catalogType: string): ICatalogType {
	return {
		type: constants.CHANGE_CATALOG_TYPE,
		value: catalogType
	}
}

export type All = ICatalogType;