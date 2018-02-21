// Aki ele cria tudo que um input precisa ter.

import React from 'react'

// FORMA 1 - menos melhor
// essa n tem childen
function FormInput(props){(
    // 20/02
    /*
    SEM SPREAD
    {<input  className={props.className}
            
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onChange={props.defaultValue}
    />}*/

    // COM SPREAD
    <input {...props}/>
)}

export default FormInput;