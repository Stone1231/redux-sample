import React from 'react'
import { getAllProducts } from './actions'
import App from './containers/App'
import store from "../../app/store"

store.dispatch(getAllProducts());

export default function DisplayApp() {
    return (
        <App />
    )
}