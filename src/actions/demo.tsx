/**
 * @component actions
 * @description demo动作和函数
 **/

import * as constants from '../constants/demo';

export interface IncrementEnthusiasm {
	type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
	type: constants.DECREMENT_ENTHUSIASM;
}

export type All = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
	return {
		type: constants.INCREMENT_ENTHUSIASM
	}
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
	return {
		type: constants.DECREMENT_ENTHUSIASM
	}
}