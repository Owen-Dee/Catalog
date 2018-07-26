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
	payLoad: Array<any>
}
/**
 * @description: 更改catalog模型数据
 * @param modelsData : 包含了头部查询信息,模型信息,分页信息
 */
export function changeCatalogModels(modelsData: Array<any>): ICatalogModels {
	return {
		type: constants.CHANGE_CATALOG_MODELS,
		payLoad: modelsData
	}
}

export interface IPageIndex {
	type: constants.RESET_CATALOG_PAGEINDEX,
	payLoad: number
}
/**
 * @description: 重置catalog分页数据
 * @param random : 随机数
 */
export function resetCatalogPageIndex(random: number): IPageIndex {
	return {
		type: constants.RESET_CATALOG_PAGEINDEX,
		payLoad: random
	}
}

export function getCatalogModels(categoryId: string) {
	return (dispatch) => {
		const catalogService = CatalogService.getInstance();
		catalogService.getCatalogModels(categoryId).then(result => {
			if (!result || !result.data.items) {
				dispatch(changeCatalogModels([]))
			}

			let modelsData = [];
			modelsData['models'] = result.data.items;
			modelsData['total'] = result.data.total;
			dispatch(changeCatalogModels(modelsData));
		}).catch(error => {
			console.error('getCatalogModels error:' + error);
		});
	}
}

export type All = ICatalogType | ICatalogModels | IPageIndex;