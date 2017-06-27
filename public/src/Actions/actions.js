export const GOT_TODOS = 'GOT_TODOS';
export function gotTodos(json) {
    return {
        type: GOT_TODOS,
        payload: json
    }
}

export const ADDED_TODO = 'ADDED_TODO';
export function addedTodo(json) {
    return {
        type: ADDED_TODO,
        payload: json
    }
}

export const EDIT_TODO = 'EDIT_TODO';
export function editTodo(_id) {
    return {
        type: EDIT_TODO,
        payload: _id
    }
}

export const SAVED_TODO = 'SAVED_TODO';
export function savedTodo(json) {
    return {
        type: SAVED_TODO,
        payload: json
    }
}

export const CANCEL_TODO = 'CANCEL_TODO';
export function cancelTodo(_id) {
    return {
        type: CANCEL_TODO,
        payload: _id
    }
}

export const DELETED_TODO = 'DELETED_TODO';
export function deletedTodo(json) {
    return {
        type: DELETED_TODO,
        payload: json
    }
}