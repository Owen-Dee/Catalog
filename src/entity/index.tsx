export interface demo {
	languageName: string,
	enthusiasmLevel: number
}

/**
 * @StoreState: 全局state
 */
export interface StoreState {
	demo: demo
}