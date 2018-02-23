// Aqui é o lugar onde utilizamos o 
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import redutor from './reducers'
import Page from './componentes/page'

let store = createStore(redutor)


ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('root')
)