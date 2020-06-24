import React from 'react'
import Counter from './components/Counter'
import { useSelector, useDispatch } from 'react-redux';

// const selectValue = (state) => { return state.counter2};
// 同上
const selectValue = state => state.counter2;

export default function CounterApp() {
    const value = useSelector(selectValue);
    const dispatch = useDispatch();
    return (
        <Counter
            value={value}
            onIncrement={() => dispatch({ type: 'INCREMENT' })}
            onDecrement={() => dispatch({ type: 'DECREMENT' })}
        />
    )
}
