import { 
	CREATE_TASK,
	UPDATE_TASK,
	DELETE_TASK, 
	CLEAR_COMPLETED,
	SAVE_EDIT,
	ALL_DONE,
	ALL_UNDONE,
} from './types'

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TASK: 
			return [...state, action.payload];

		case UPDATE_TASK:
			return state.map(t => {
				if (t.id === action.payload) {
					t.done = !t.done;
				}
				return t;
			})

		case DELETE_TASK:
			return state.filter(t =>(t.id !== action.payload));

		case CLEAR_COMPLETED:
			return state.filter(t => !t.done);

		case SAVE_EDIT:
			return state.map(t => {
				if (t.id === action.payload.id) {
					t.title = action.payload.title;
				}
				return t;
			})

		case ALL_DONE: 
			return state.map(t => {
				if (t.done === false) {
					t.done = !t.done;
				}

				return t;
			})

		case ALL_UNDONE:
			return state.map(t => {
					if (t.done === true) {
						t.done = !t.done;
					}

					return t;
			})

		default: return state;
	}
}
