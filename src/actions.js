// colocar acões que ...são 4

// add note:

/* const ADICIONAR_NOTA = 'ADICIONAR_NOTA'

{
    type: ADICIONAR_NOTA
    titulo: '?',
    texto: '?'
}

const REMOVER_NOTA = 'REMOVER_NOTA'

{
    type: REMOVER_NOTA,
    posicao: '?'
}

const HABILITAR_EDICAO = 'HABILITAR_EDICAO'

{
    type: HABILITAR_EDICAO,
    posicao: '?'
}

const ALTERAR_NOTA = 'ALTERAR_NOTA'

{
    type: ALTERAR_NOTA,
    posicao: '?',
    titulo: '?',
    texto: '?'
}

*/

// Exemplo de funções action creator:

// function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     text
//   }
// }

// ************************ ACTION 

export const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
export const REMOVER_NOTA = 'REMOVER_NOTA'
export const HABILITAR_EDICAO = 'HABILITAR_EDICAO'
export const ALTERAR_NOTA = 'ALTERAR_NOTA'

export function adicionarNota(titulo, texto){
    return(
        type: ADICIONAR_NOTA,
        titulo,
        texto
    )
}

export function removerNota(titulo, texto){
    return(
        type: REMOVER_NOTA,
        posicao
    )
}

export function habilitarNota(titulo, texto){
    return(
        type: HABILITAR_NOTA,
        posicao
    )
}

export function alterarNota(posicao, titulo, texto){
    return(
        type: ALTERAR_NOTA,
        posicao,
        titulo,
        texto
    )
}

// ************************ REDUTORES

// retorna o novo estado da aplicação
// stado - se muda eu preciso atulizar, precisa estar no estado