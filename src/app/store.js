// import { configureStore } from '@reduxjs/toolkit';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import counter from '../features/counter/counterSlice';
import counter2 from '../features/counter2/reducers/index';
import {todos, visibilityFilter} from "../features/todos/reducers/index";
import {todos as todosMvc, visibilityFilter as visibilityFilterMvc} from "../features/todomvc/reducers/index";
import {todos as todosUndo, visibilityFilter as visibilityFilterUndo} from "../features/todos-with-undo/reducers/index";
import {cart, products} from "../features/shopping-cart/reducers/index";
import treeView from "../features/tree-view/reducers/index";

const rootReducer = combineReducers({
    counter,
    counter2,
    todos,
    visibilityFilter,
    todosMvc,
    visibilityFilterMvc,
    todosUndo,
    visibilityFilterUndo,
    cart,
    products,
    treeView,
})

const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// }

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)
// const store = createStore(rootReducer)

export default store;