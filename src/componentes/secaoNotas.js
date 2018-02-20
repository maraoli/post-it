// DESAFIO 15/02/18
import React from 'react'

import Section from './section'
import FormNotas from './formNotas'

// sabe da lista de notas - props
// cada item tem um for, filho cria form notas, insere no children fa função,
// retorna o elemento react

function SecaoNotas({listaNotas,adicionarNota,removerNota, editarFormulario}){
    const props = {
        className: 'nova-nota'
    }
    
    // 16/02/2018

    // aqui ele faz um for escondido:
    const children = props.listaNotas.pegaTodos().map((notaAtual, posicao) => (
        montaUmFormNota(posicao, props)
    ));

    return React.creatElement(Section, props, children);
}

export default SecaoNotas;