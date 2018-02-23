import React from 'react'
import { connect } from 'react-redux'

import {adicionarNota, removerNota, habilitarEdicao, alterarNota} from '../../actions'
import Page from './index'

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

// way 1
// retorno uma lista de notas / props pro page
const mapStateToProps = state => (
    {listaNotas: state => {listaNotas: state.notas}}
)

// way 2
// const mapStateToProps = state => {listaNotas: state.notas}

//dispara as acoes, retorna um componente que page espera, es um objeto
const mapDispatchToProps = dispatch => (
    {    
        // essas funções vem do form notas
        adicionarNota: (titulo, texto, formulario, posicao) => {
            if(posicao === undefined){
                // função addnota esta no action
                dispatch(adicionarNota(titulo, texto))
                formulario.reset()
            }
            else{
                dispatch(alterarNota(posicao, titulo, texto))
            }
        },

        removerNota: (evento, posicao) =>{
            evento.stopPropagation()
            dispatch(removerNota(posicao))
        },

        editarFormulario: posicao =>{
            // importado lá em cima
            dispatch(habilitarEdicao(posicao))
        }
    }
)

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer