import axios from 'axios'

const http = axios.create({
    baseURL: 'https://limitless-harbor-35826.herokuapp.com'
})

export function postNota(titulo, texto){
    // back dá o parametro do post notas
    return http.post('/notas' , {titulo, texto})
}

export function deleteNota(posicao){
    // return http.delete('/notas', {params: {posicao}})
    return http.delete(`/notas/${posicao}`)
}

export function putNota(posicao,titulo, texto){
    // primeiro parametro:
    // const url= `/notas/${posicao}`
    // segundo parametro é json
    // const json = objeto = {titulo, texto}
    return http.put(`/notas/${posicao}`, {titulo, texto})
}

// formato json: - formato de tranferencia de dados
// {
//     'titulo': 'est',
//     'texto' :'revisar ES6, react, redux etc...'
// }