// Aki ele cria tudo que um input precisa ter.

import React from 'react'

// FORMA 1 - menos melhor
// essa n tem childen
function FormInput(props){
    return React.creatElement('input', props)
}

export default FormImput;

// // FORMA 2.1 - melhor
// export default props => React.createElement('input', props)

// // FORMA 2.2
// export default (props) => {
//     return React.createElement('input', props)
// }
