export interface Catalog {
	catalogType: string,
	modelsObj: object
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	Catalog: Catalog,
}