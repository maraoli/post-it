// Aki ele cria um textarea e com tudo q precisa
// code in the dark - competition

import React from 'react'

// FORMA 1
function FormTextarea(props){
    return React.creatElement('textarea', props);
}

export default FromTextarea;

// FORMA 2
// export default (props, children) => React.createElement('textarea' , props, children)