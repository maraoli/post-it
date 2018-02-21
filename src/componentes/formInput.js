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
    
// **********************SEM REACT
// props param
// function FormInput(props) {
//     let formInput = document.createElement('input');
    
//     // destructuring
//     formInput.setAttribute('class', props.className);
//     formInput.setAttribute('type', props.type);
//     formInput.setAttribute('name', props.name);
//     formInput.setAttribute('value', props.value);
//     formInput.setAttribute('placeholder', props.placeholder);

//     // qualquer valor é true
//     //  so se tiver read
//     if (props.readonly) {
//         formInput.setAttribute('readonly', true);
//     }
    
//     return formInput;
// }

// export default FormInput;