import React from 'react'
import ReactDOM from 'react-dom'
import Page from './componentes/page'

// componente inserido , elemento DOM inserido ( dom real) 
ReactDOM.render(
    // props = null
    React.creatElement(Page, null),
    document.getElementById('root')
)