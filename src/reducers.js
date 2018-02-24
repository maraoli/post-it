// ************************ REDUTORES

// retorna o novo estado da aplicação
// stado - se muda eu preciso atulizar, precisa estar no estado

// fazer swite case pras actions
// recebemos as coisa atraves do acao.atributo para modificar

import {ADICIONAR_NOTA, REMOVER_NOTA, HABILITAR_NOTA, ALTERAR_NOTA, LOGA_USUARIO, DESLOGA_USUARIO} from './actions'
import ListaNotas from './listaNotas'

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
            const estadoNovo2 ={
                // filter exe funcao pra cada item da lista , é declarativo , com for dentro
                notas: estadoAtual.notas.filter((nota, posicao) =>{
                    return posicao!==acao.posicao
                })
            };
            return estadoNovo2;
        // map - qual item tenho q inserir na lista
        case HABILITAR_NOTA:
            const estadoNovo3 ={
                notas: estadoAtual.notas.map((nota, posicao) =>{
                    if(posicao === acao.posicao){
                        //ou:  return {...nota,editando: true}
                        return new Nota(nota.titulo, nota.texto, true)
                    }
                    return nota

                    //  ou return posicao === acao.posicao ? new Nota(nota.titulo, nota.texto, true) : nota
                })
            }
            return estadoNovo3;
        // map
        case ALTERAR_NOTA:
            const estadoNovo4 = {
                notas: estadoAtual.notas.map((nota, posicao) =>{
                    if(posicao === acao.posicao){
                        return new Nota(acoa.titulo, acao.texto, false)
                    }
                    else{
                        return nota
                    }
                })
            };
            return estadoNovo4;

        default:
            // return state
            return "state"
    }
}

export default function usuario(estadoAtual = false, acao){
    switch(acao.type){
        case: LOGA_USUARIO:
        case: DESLOGA_USUARIO:
    }
}