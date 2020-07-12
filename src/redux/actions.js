import { CREATE_TASK, CHANGE_FILTER, UPDATE_TASK, DELETE_TASK, CLEAR_COMPLETED, SAVE_EDIT, ALL_DONE } from "./types";

export const createTask = task => ({
    type: CREATE_TASK,
    payload: task,
});

export const changeFilter = filter => ({
    type: CHANGE_FILTER,
    payload: filter,
});

export const updateTask = id => ({
    type: UPDATE_TASK,
    payload: id,
});

export const deleteTask = id => ({
    type: DELETE_TASK,
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
})
