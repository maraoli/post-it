// Aki ele cria uma tag form com tufo que ela precisa ter,
// inclusive filhos

import React from 'react'

// way 1:
const Form = ({children, ...props}) =>(
    <form {...props}>
          {children}
    </form>
)


export default Form

// way 2:
// export default ({ children, ...props }) => <form {...props}>{children}</form>

// standarde JS n usa ;