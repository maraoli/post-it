// fazer swite case pras actions
// recebemos as coisa atraves do acao.

import {ADICIONAR_NOTA, REMOVER_NOTA, HABILITAR_NOTA, ALTERAR_NOTA} from './actions'

const estadoInicial ={
    notas: []
}

export default function postitApp(estadoAtual = estadoInicial, acao){
    switch(acao.type){
        // concat
        case ADICIONAR_NOTA:
            // passado pelo action os parametros, no add nota
            const notaNova = new Nota(acao.titulo, acao.texto)
            const estadoNovo ={
                notas: estadoAtual.notas.concat(novaNota)
            };
            return estadoNovo;
        // map , funcao filter
        case REMOVER_NOTA:
            const estadoNovo ={
                // filter exe funcao pra cada item da lista , é declarativo , com for dentro
                notas: estadoAtual.notas.filter((nota, posicao) =>{
                    return posicao!==acao.posicao
                })
            };
            return estadoNovo;
        // map - qual item tenho q inserir na lista
        case HABILITAR_NOTA:
            const estadoNovo ={
                notas: estadoAtual.notas.map((nota, posicao) =>{
                    if(posicao === acao.posicao){
                        //ou:  return {...nota,editando: true}
                        return new Nota(nota.titulo, nota.texto, true)
                    }
                    return nota

                    //  ou return posicao === acao.posicao ? new Nota(nota.titulo, nota.texto, true) : nota
                })
            }
            return estadoNovo;
        // map
        case ALTERAR_NOTA:
            const estadoNovo = {
                notas: estadoAtual.notas.map((nota, posicao) =>{
                    if(posicao === acao.posicao){
                        return new Nota(acoa.titulo, acao.texto, false)
                    }
                    else{
                        return nota
                    }
                })
            };
            return estadoNovo;

        default:
            return state
    }
}

/* my code bugado :(
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
*/