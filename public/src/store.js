import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import todosReducer from './Reducers/todosReducer';

const store = createStore(
    todosReducer,
    applyMiddleware(
        thunkMiddleware
    ));

export default store;
