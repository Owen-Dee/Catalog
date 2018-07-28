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

export interface ICategoryId {
	type: constants.RECORD_SELECTED_CATEGORY_ID,
	payLoad: string
}
/**
 * @description: 记录被选中的category id
 * @param categoryId : 分类id
 */
export function recordSelectedCategoryId(categoryId: string): ICategoryId {
	return {
		type: constants.RECORD_SELECTED_CATEGORY_ID,
		payLoad: categoryId
	}
}


interface ISearchConditions {
	categoryId: string,
	pageIndex: number	
}
/**
 * @description: 获取catalog模型数据
 * @param params : 查询条件集合
 */
export function getCatalogModels(params: ISearchConditions) {
	return (dispatch) => {
		const catalogService = CatalogService.getInstance();
		catalogService.getCatalogModels(params).then(modelsData => {
			dispatch(changeCatalogModels(modelsData));
		}).catch(error => {
			console.error('getCatalogModels error:' + error);
		});
	}
}

export type All = ICatalogType 
				| ICatalogModels 
				| IPageIndex 
				| ICategoryId;