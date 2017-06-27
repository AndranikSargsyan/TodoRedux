import {gotTodos, 
        addedTodo, 
        savedTodo,
        deletedTodo} from './actions';

export function getTodos() {
    const url = '/api/todos';
    const options = { method: 'get', credentials: 'include' };
    
    return dispatch => {
        return fetch(url, options)
            .then(response => response.json(),
                 error => console.log('An error occured.', error))
            .then(json => dispatch(gotTodos(json)));
    }
}

export function addTodo(text) {
    const url = '/api/todos';
    const options =  {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text})
    };

    return dispatch => {
        return fetch(url, options)
            .then(response => response.json(),
                 error => console.log('An error occured.', error))
            .then(json => dispatch(addedTodo(json)));
    }
}

export function saveTodo(_id, text) {
    const url = `/api/todos/${_id}`;
    const options =  {
        method: 'PUT',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: text})
    };

    return dispatch => {
        return fetch(url, options)
            .then(response => response.json(),
                 error => console.log('An error occured.', error))
            .then(json => dispatch(savedTodo(json)));
    }
}

export function deleteTodo(_id) {
    const url = `/api/todos/${_id}`;
    const options = { method: 'DELETE', credentials: 'include' };

    return dispatch => {
        return fetch(url, options)
            .then(response => response.json(),
                 error => console.log('An error occured.', error))
            .then(json => dispatch(deletedTodo(json)));
    }
}