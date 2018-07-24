/**
 * @description: catalog对应的接口数据
 * @catalogType: catalog类型
 * @modelsData: 模型数据集合
 */
export interface Catalog {
	catalogType: string,
	modelsData: Array<any>
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	Catalog: Catalog,
}