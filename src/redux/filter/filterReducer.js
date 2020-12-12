import { CHANGE_FILTER } from "./types"

const initialState = 'all';

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_FILTER: 
			return action.payload;

		default: return state
	}
}
