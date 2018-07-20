/**
 * @component actions
 * @description catalog动作和函数
 **/

import * as constants from '../constants/catalog';
import CatalogService from '../components/catalog/utils/catalogservice';

export interface ICatalogType {
	type: constants.CHANGE_CATALOG_TYPE,
	payLoad: string
}
/**
 * @description: 更改catalog类型
 * @param catalogType : 类型值
 */
export function changeCatalogType(catalogType: string): ICatalogType {
	return {
		type: constants.CHANGE_CATALOG_TYPE,
		payLoad: catalogType
	}
}

export interface ICatalogModels {
	type: constants.CHANGE_CATALOG_MODELS,
	payLoad: object
}

export function changeCatalogModels(modelsObj: object): ICatalogModels {
	return {
		type: constants.CHANGE_CATALOG_MODELS,
		payLoad: modelsObj
	}
}

export function getCatalogModels(categoryId: string) {
	return (dispatch) => {
		const catalogService = CatalogService.getInstance();
		catalogService.getCatalogModels(categoryId).then(result => {
			dispatch(changeCatalogModels(result.data))
		}).catch(error => {
			console.error('getCatalogModels error:' + error);
		});
	}
}

export type All = ICatalogType | ICatalogModels;