// Cria um button com tudo que ele precisa e returna

import React from 'react'

// way 1
const FormButton = (children, ...props) =>(
    <button {...props}>
        {children}
    </button>
)

export default FormButton;

// way 2
// export default ({ children, ...props }) => <button {...props}>{children}</button>