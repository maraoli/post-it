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
        case LISTA_NOTA:
            return acao.lista.map(item =>{
                // editando começa como falso por deful
                return new Nota(item.posicao, item.titulo, item.texto)
            })
        // concat
        case ADICIONAR_NOTA:
            // preciso passa a posicao do backend
            const notaNova = new Nota(acao.titulo, acao.texto, acao.posicao)
            const estadoNovo ={
                notas: estadoAtual.notas.concat(novaNota)
            };
            return estadoNovo;
        // map , funcao filter
        case REMOVER_NOTA:
            const estadoNovo2 ={
                // posicao ta dentro da nota
                notas: estadoAtual.notas.filter((notaAtual) =>{
                    return notaAtual.posicao!==acao.posicao
                })
            };
            return estadoNovo2;
        // map - qual item tenho q inserir na lista
        case HABILITAR_NOTA:
            const estadoNovo3 ={
                notas: estadoAtual.notas.map((notaAtual.posicao) =>{
                    if(notaAtual.posicao === acao.posicao){
                        //ou:  return {...nota,editando: true}
                        return new Nota(notaAtual.posicao, nota.titulo, nota.texto, true)
                    }
                    return nota

                    //  ou return posicao === acao.posicao ? new Nota(nota.titulo, nota.texto, true) : nota
                })
            }
            return estadoNovo3;
        // map
        case ALTERAR_NOTA:
            const estadoNovo4 = {
                notas: estadoAtual.notas.map((notaAtual) =>{
                    if(notaAtual.posicao === acao.posicao){
                        return new Nota(acao.posicao, acao.titulo, acao.texto, false)
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