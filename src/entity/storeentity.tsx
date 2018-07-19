export interface Catalog {
	catalogType: string
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	Catalog: Catalog
}