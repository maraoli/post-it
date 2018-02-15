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
export default FormButton;

// FORMA 2:
// so uma linha eu omito o nome da função e é só uma linha de code.
// export default (props, children) => React.createElement('button', props, children);