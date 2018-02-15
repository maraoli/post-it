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

// ************SEM REACT

// props param
// function FormTextarea(props) {
//     let formTextarea = document.createElement('textarea');

//     // destructuring
//     formTextarea.setAttribute('class', props.className);
//     formTextarea.setAttribute('name', props.name);
//     formTextarea.setAttribute('rows', props.rows);
//     formTextarea.setAttribute('placeholder', props.placeholder);

//     // qualquer valor é true
//     if (props.readonly) {
//         formTextarea.setAttribute('readonly', true);
//     }
    
//     formTextarea.innerHTML = props.children;

//     return formTextarea;
// }

// export default FormTextarea;