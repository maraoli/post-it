// Aki ele cria uma tag form com tufo que ela precisa ter,
// inclusive filhos

import React form 'react'

// FORMA 2 - the best way!
// children é uma array - react entende q a array precisa ser upada elemento por elemento
export default (props, children) => React.creatElement('form', props, children)