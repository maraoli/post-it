// DESAFIO 15/02/18
import React from 'react'

import Section from './section'
import FormNotas from './fromNotas'

// sabe da lista de notas - props
// cada item tem um for, filho cria form notas, insere no children fa função,
// retorna o elemento react

function SecaoNotas(props){
    const props = {
        className: 'nova-nota'
    }

    const children = [];
    // Usar contaTotal é diferente de usar .length, n tem length de listaNotas, so de usa lista interna
    for(let i = 0; i<props.listaNotas.contaTotal(); i++){
        const propsFormNotas = {
            posicao: i, 
            notaAtual: props.listaNotas.pega(i), 
            editarFormulario: props.editarFormulario, 
            adicionarNota: props.adicionarNota, 
            removerNota: props.removerNota
        }
        const formNotas = React.creatElement(FormNotas, propsFormNotas); 
        children.push(formNotas);
    } 

    return React.creatElement(Section, props, children);
}

export default SecaoNotas;