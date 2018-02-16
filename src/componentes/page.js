// 16/02/2018

// MAIN

import React from 'react'
import Nota from '../nota'
import SecaoNotas from './sectionNotas'
import FormNotas from './formNotas'

// sessao notas e montaFromNotas usam essas 3 funcoes por isso deixamos fora
// recortei as 3 do index
const editarFormulario = posicao => listaNotas.edita(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {

    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    }

    else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

const removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}

function montaFormNotas(){
    const props ={
        posicao: null, 
        // ou undefined, ou nem passa esse parametro
        // titulo e texto da nova nota estao vazios
        notaAtual: new Nota('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editaFormulario: editarFormulario
        // ou assim, pq como elas tem mesmo nome o ES6 permite
        // adicionarNota,
        // removerNota,
        // editaFormulario
    }

    return React.createElement(FromNotas, props)
}

function montaSectionNotas(){
    const props ={
        // da maneira nova:
        listaNotas,
        adicionarNota,
        removerNota,
        editarFormulario
    }

    return React.createElement(,props)
}

function Page(){
    const props = {className: 'container'}

    let formNotas = montaFormNotas()
    let sectionNotas = montaSectionNotas()
    const children = [formNotas, sectionNotas]

    return React.createElement('main', props, children)
}

export default Page