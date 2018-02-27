// Aqui é o lugar onde utilizamos o 
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import redutor from './reducers'
import Page from './componentes/page'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let store = createStore(redutor, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('root')
)