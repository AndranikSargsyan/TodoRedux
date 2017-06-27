import { GOT_TODOS,
        ADDED_TODO,
        EDIT_TODO,
        SAVED_TODO,
        CANCEL_TODO,
        DELETED_TODO } from '../Actions/actions.js';

const initialState = { todos: []};

export default function (state = initialState, action) {
    const { type } = action;

    switch(type) {
        case GOT_TODOS:
            return {todos: action.payload}

        case ADDED_TODO:
            return { todos: [ ...state.todos, action.payload ]};

        case EDIT_TODO:
            const todos1 = state.todos.reduce((nextState, todo) => {
                if(todo._id === action.payload) {
                    todo.editing = true;
                }
                return [...nextState, todo];
            }, []);
            return {todos: todos1};

        case SAVED_TODO:
            const todos2 = state.todos.reduce((nextState, todo) => {
                if(todo._id === action.payload._id) {
                    todo.text = action.payload.text;
                    todo.editing = false;
                }
                return [...nextState, todo];
            }, []);
            return {todos: todos2};

        case CANCEL_TODO:
            const todos3 = state.todos.reduce((nextState, todo) => {
                if(todo._id === action.payload) {
                    todo.editing = false;
                }
                return [...nextState, todo];
            }, []);
            return {todos: todos3};

        case DELETED_TODO:
            const todos4 = state.todos.reduce((nextState, todo) => {
                if(todo._id === action.payload._id) {
                    return nextState;
                } else {
                    return [...nextState, todo];
                }
            }, []);
            return {todos: todos4};

        default:
            return state;
    }
}
