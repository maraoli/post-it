// Aqui ele seta todos os atributos de uma nota e 
// cria um Form com ele e retorna.

import React from 'react'

import Form from './form';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';
import Nota from  '../nota';

function criaComponenteInputTitulo(notaCopiada){
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !notaCopiada.editando,
        defaultValue: notaCopiada.titulo,
        onChange: (event) => {
            notaCopiada.titulo = event.target.value;
        }
    }
    // tem posicao e não esta editando
    if(notaCopiada.posicao !== undefined && !notaCopiada.editando){
        props.readOnly = true
    }
    // OU if (notaCopiada.estaVisualizando())
    // função visualisando esta no nota.js
    return <FormInput {...props} />
}

// notaCopiada = notaEditada = notaAlterada
function criaComponenteTextareaTexto(notaAlterada){
    const props ={
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        readOnly: !notaAlterada.editando,
        // children viro value que vira defaultValue
        defaultValue: notaAlterada.texto,
        onChange: (event)=>{
            notaAlterada.titulo = event.target.value;
        }
    }
    // 20/02
    // função visualisando esta no nota.js
    if (notaAlterada.estaVisualizando()){
        props.readOnly = true
    }
    // new way:
    return <FormTextarea {...props} />
    // old way:
    //  return React.createElement(FormTextarea,props)
}

function criaComponenteBotaoConcluido(adicionarNota, posicao, notaAlterada){
    const props = {
        className: 'note__control', 
        type: 'button',
        onClick: event => {
            adicionarNota(notaAlterada.titulo, notaAlterada.texto, notaAlterada.posicao)
            event.target.form.reset()
        }
    }
    const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>
}

function criaComponenteBotaoRemover(removerNota, posicao){
    const props = {
        className: 'note__control', 
        type: 'button', 
        // remove children
        onClick: event => {
            event.stopPropagation()
            removerNota(event, posicao)
        }
    };

    // n precisa de crase, filho vem pra cá

    // way 1:
    // const children = <i class="fa fa-times" aria-hidden="true"></i>
    // way 2 :
    const children = React.createElement('i', {
        className: 'fa fa-times',
        'aria-hidden': true,
    });
    
    return <FormButton {...props}>{children}</FormButton> 
}

function FormNotas({notaAtual, posicao, adicionarNota, removerNota, editarFormulario}) {
    
    // é uma copia da nota passada nos parametros pra criar os elementos
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando);

    let inputTitulo = criaComponenteInputTitulo(notaAlterada, posicao);
    let textareaTexto = criaComponenteTextareaTexto(notaAlterada, posicao);
    let botaoRemover = criaComponenteBotaoRemover(removerNota, posicao);
    let botaoConcluido = criaComponenteBotaoConcluido(adicionarNota, posicao, notaAlterada);

    let props = {
        className: 'note',
    };
 
    return (
        <Form {...props}>
        {/*ou : <Form className="note">*/}

            {/*IF EM FORMA DE EXPRESSAO: ULTIMA EXPRESSAO É O Q RETORNA E AS OUTRAS SAO CONDICOES*/}
            {/* way 1: */}
            {posicao!== undefined && notaAlterada.editando && botaoRemover}
            {/* way 2: - esta no nota.js */}
            {/* {notaCopiada.estaAlterando() && botaoRemover} */}
            {/* way 3?: {children}*/}

            {inputTitulo}
            {textareaTexto}
            
            {/*aparece se cadastro ou editando*/}
            {(notaAlterada.estaCadastrando() || notaAlterada.estaAlterando()) && botaoConcluido}
        </Form>
    )
}

export default FormNotas;