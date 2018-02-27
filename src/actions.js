export const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
export const REMOVER_NOTA = 'REMOVER_NOTA'
export const HABILITAR_EDICAO = 'HABILITAR_EDICAO'
export const ALTERAR_NOTA = 'ALTERAR_NOTA'

export const LOGA_USUARIO = 'LOGA_USUARIO'
export const DESLOGA_USUARIO = 'DESLOGA_USUARIO'

export function adicionarNota(titulo, texto){
    postNota(titulo, texto)
    
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

export function logaUsuario(usuario){
    return(
        type: LOGA_USUARIO,
    )
}

export function deslogaUsuario(usuario){
    return(
        type: DESLOGA_USUARIO,
    )
}