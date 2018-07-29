/**
 * @component actions
 * @description catalog动作和函数
 **/
import * as constants from '../constants/catalog';
import CatalogService from '../components/catalog/utils/catalogservice';
//=======1========
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
//=======2========
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
//=======3========
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
//=======4========
export interface ICatalogRequest {
	type: constants.CATALOG_MODELS_REQUEST,
	payLoad: boolean
}

export function changeCatalogRequestState(isFecting: boolean): ICatalogRequest {
	return {
		type:  constants.CATALOG_MODELS_REQUEST,
		payLoad: isFecting
	}
}

//=======5========
export interface ICatalogReceive {
	type: constants.CATALOG_MODELS_RECEIVE,
	modelsData: Array<any>,
	isFecting: boolean
}

export function changeCatalogReceiveState(modelsData: Array<any>, isFecting: boolean): ICatalogReceive {
	return {
		type:  constants.CATALOG_MODELS_RECEIVE,
		modelsData: modelsData,
		isFecting: isFecting
	}
}
//=======6========
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
		let isFecting = true;
		dispatch(changeCatalogRequestState(isFecting));
		const catalogService = CatalogService.getInstance();
		catalogService.getCatalogModels(params).then(modelsData => {
			isFecting = false;
			dispatch(changeCatalogReceiveState(modelsData, isFecting));
		}).catch(error => {
			console.error('getCatalogModels error:' + error);
		});
	}
}

export type All = ICatalogType 
				| IPageIndex 
				| ICategoryId
				| ICatalogRequest
				| ICatalogReceive;