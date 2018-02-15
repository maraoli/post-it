// Aki ele cria uma tag form com tufo que ela precisa ter,
// inclusive filhos

import React form 'react'

// FORMA 2 - the best way!
// children é uma array - react entende q a array precisa ser upada elemento por elemento
export default (props, children) => React.creatElement('form', props, children)

// // ***************** SEM REACT
// // props param
// function Form(props) {
//     let form = document.createElement('form');

//     // destructuring
//     form.setAttribute('class', props.className);
    
//     // forEach
//     // upa os filhos
//     for (var i = 0; i < props.children.length; i++) {
//         form.appendChild(props.children[i]);
//     }

//     // edita formulario
//     if (props.click) {
//         form.addEventListener("click", props.click);
//     }
    
//     return form;
// }

// export default Form;