import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
// import generateTree from './reducers/generateTree'
import Node from './containers/Node'

export default (
    <Node id={0} />
)