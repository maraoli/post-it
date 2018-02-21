// Aki ele cria uma tag form com tufo que ela precisa ter,
// inclusive filhos

import React from 'react'

// o filho é passado dentro do props
const Form = ({children, ...props}) =>{
    <form {...props}>
          {children}
    </form>
}

export default Form
// standart JS n usa ;