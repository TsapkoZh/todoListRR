import { 
	CREATE_TODO, 
	UPDATE_TODO, 
	DELETE_TODO, 
	CLEAR_COMPLETED, 
	SAVE_EDIT, 
	ALL_DONE, 
	ALL_UNDONE 
} from './types';

export const createTodo = task => ({
	type: CREATE_TODO,
	payload: task,
});

export const updateTodo = id => ({
	type: UPDATE_TODO,
	payload: id,
});

export const deleteTodo = id => ({
	type: DELETE_TODO,
	payload: id,
});

export const clearCompleted = () => ({
	type: CLEAR_COMPLETED,
});

export const saveEdit = (id, title) => ({
	type: SAVE_EDIT,
	payload: {id, title},
});

export const allDone = () => ({
	type: ALL_DONE,
});

export const allUndone = () => ({
	type: ALL_UNDONE,
});
