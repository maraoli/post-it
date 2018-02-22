// Aki ele cria um textarea e com tudo q precisa
// code in the dark - competition

import React from 'react'

// FORMA 1
const FormTextarea = (props) => (
    <textarea {...props}
    />
)

export default FormTextarea;

// FORMA 2:
// export default props => <textarea {...props} />