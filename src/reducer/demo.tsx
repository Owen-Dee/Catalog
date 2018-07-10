import { All } from '../actions/demo';
import { demo } from '../entity';
import * as Constants from '../constants/demo';

const initState = {
	enthusiasmLevel: 1,
	languageName: 'TypeScript',
};

export function enthusiasm(state: demo = initState, action: All): demo {
	switch (action.type) {
		case Constants.INCREMENT_ENTHUSIASM:
			return {
				...state,
				enthusiasmLevel: state.enthusiasmLevel + 1
			};
			break;
		case Constants.DECREMENT_ENTHUSIASM:
			return {
				...state,
				enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
			};
			break;
		default:
			break;
	}

	return state;
}