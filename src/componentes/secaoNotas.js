// DESAFIO 15/02/18
import React from 'react'

import Section from './section'
import FormNotas from './formNotas'

// sabe da lista de notas - props
// cada item tem um for, filho cria form notas, insere no children fa função,
// retorna o elemento react

function montaUmFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario) {
    const props = {
        key: posicao,
        notaAtual,
        removerNota,
        adicionarNota,
        editarFormulario,
    }

    return <FormNotas key={posicao} {...props} />
}

function SecaoNotas({listaNotas,adicionarNota,removerNota, editarFormulario}){
    const props = {
        className: 'nova-nota'
    }

    const children = props.listaNotas.pegaTodos().map((notaAtual, posicao) => (
        montaUmFormNota(posicao, props)
    ));

    return React.creatElement(Section, props, children);
}

export default SecaoNotas;