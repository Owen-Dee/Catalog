/**
 * @description: catalog对应的接口数据
 * @catalogType: catalog类型
 * @modelsData: 模型数据集合
 * @pageRandom: 记录是否重置页面的一个随机数
 * @categoryId: 模型分类id
 * @isFecting: 是否获取数据
 */
export interface Catalog {
	catalogType: string,
	modelsData: Array<any>,
	pageRandom: number,
	categoryId: string,
	isFecting: boolean,
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	Catalog: Catalog,
}