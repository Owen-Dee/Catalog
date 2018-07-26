/**
 * @description: catalog对应的接口数据
 * @catalogType: catalog类型
 * @modelsData: 模型数据集合
 * @pageRandom: 记录是否重置页面的一个随机数
 */
export interface Catalog {
	catalogType: string,
	modelsData: Array<any>,
	pageRandom: number
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	Catalog: Catalog,
}