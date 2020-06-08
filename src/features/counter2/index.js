import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
// import counter from './reducers'

// const store = createStore(counter)
import store from '../../app/store';

export default (
    <Counter
        // value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
)

// export default render()
// store.subscribe(render)
