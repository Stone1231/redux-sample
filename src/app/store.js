import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import counter2Reducer from '../features/counter2/reducers'
import {combineReducers, createStore} from "redux";

// import todoReducer from "../features/todos/reducers/index";
// import todomvcReducer from "../features/todomvc/reducers/index";
// import visibilityFilter from "../features/todos/reducers/visibilityFilter";
// import todos from "../features/todos/reducers";

import {todos, visibilityFilter} from "../features/todos/reducers/index";
import {todosMvc, visibilityFilterMvc} from "../features/todomvc/reducers/index";

// const reducer= {
//   counter: counterReducer
// }
// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     counter2: counter2Reducer,
//     todos: todos,
//     visibilityFilter:visibilityFilter,
//   },
// });

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    // todosMvc,
    // visibilityFilterMvc,
})

const store = createStore(rootReducer)

export default store;