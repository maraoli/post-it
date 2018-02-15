// Cria um button com tudo que ele precisa e returna

import React from 'react'

// let props ={
//     className: 'note__control',
//     type: 'button',
//     onClick: () => {}
// }

// FORMA 1:
// recebo os filhos do botão tbm nos parametros
function FormButton(props, children) {
    // (nome da tag , atributos , filhos)
    // o children podia ser props.children tbm
    return React.createElement('button', props, children)
}

// // *********** SEM REACT:
// // props param
// function FormButton(props) {
//     let formButton = document.createElement('button');
    
//     // destructuring
//     formButton.setAttribute('class', props.className);
//     formButton.setAttribute('type', props.type);
    
//     formButton.addEventListener('click', props.click);

//     // inner - dentro da tag <button>SeiLa</button>
//     formButton.innerHTML = props.children;

    
//     return formButton;
// }


// FORMA 1 -continuacao:
export default FormButton;

// FORMA 2:
// so uma linha eu omito o nome da função e é só uma linha de code.
// export default (props, children) => React.createElement('button', props, children);