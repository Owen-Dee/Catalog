export interface demo {
	languageName: string,
	enthusiasmLevel: number
}

export interface Catalog {
	catalogType: string
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	demo: demo
	Catalog: Catalog
}