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