// fazer swite case pras actions

import {ADICIONAR_NOTA, REMOVER_NOTA, HABILITAR_NOTA, ALTERAR_NOTA} from './actions'

const estadoInicial ={
    notas: []
}

export default function postitApp(estadoAtual = estadoInicial, acao){
    switch(acao.type){
        // concat
        case ADICIONAR_NOTA:
            const estadoNovo;
            return estadoNovo;
        // map , funcao filter
        case REMOVER_NOTA:
            const estadoNovo;
            return estadoNovo;
        // map
        case HABILITAR_NOTA:
            const estadoNovo;
            return estadoNovo;
        // map
        case ALTERAR_NOTA:
            const estadoNovo;
            return estadoNovo;
    }
}

const adicionarNota = (listaDeNotas, novaNota) =>{
    return listaDeNotas = listaDeNotas.concat(novaNota)
}

const removerNota = (listaDeNotas, removeNota, posicao) =>{
    listaDeNotas.filter(function(removeNota, posicao ,listaDeNotas){
        return listaDeNotas
    })
}

const habilidarNota = (listaDeNotas, notaHabilitada)=>{
    listaDeNotas.map(function(){
        return notaHabilitada.editando === true
    })
}

const alterarNota = (listaDeNotas, notaEditada) =>{
    listaDeNotas.map(function(){
        return notaEditada.editando === false
    })
}

