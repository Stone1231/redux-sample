import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
import Node from './containers/Node'

import store from "../../app/store"
const tree = generateTree()




// const store = createStore(reducer, tree)
//
// render(
//   <Provider store={store}>
//     <Node id={0} />
//   </Provider>,
//   document.getElementById('root')
// )

export default (
    <Node id={0} counter={tree.counter} parentId={tree.parentId} childIds={tree.childIds} />
)