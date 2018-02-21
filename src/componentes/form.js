// Aki ele cria uma tag form com tufo que ela precisa ter,
// inclusive filhos

import React from 'react'

// o filho é passado dentro do props
const Form = props => React.creatElement('form', props /*props.children*/)

export default Form
// standart JS n usa ;