// Aqui ele seta todos os atributos de uma nota e 
// cria um Form com ele e retorna.


import React from 'react'

// podemos omitir a extensao .js
import Form from './form';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';
import Nota from  '../nota';

function criaComponenteInputTitulo(notaAlterada){
    const props = {
        key: 'note-comp',
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.titulo,
        // exe func quando o valor do input for alterado
        // receb a tag q sofreu a mudanca
        onChange: (event) => {
            // notaAtual.titulo  = novoTitulo;
            // isso acima n pode pq react n muda os parametros recebidos.
            // target - é a tag q mudo do event recebido
            notaAlterada.titulo = event.target.value;
        }
    }
    // 20/02
    // tem posicao e não esta editando
    if(posicao !== undefined && !notaCopiada.editando){
        props.readOnly = true
    }
    return React.creatElement(FormInput, props);
}

// notaCopiada = notaEditada = notaAlterada
function criaComponenteTextareaTexto(notaAlterada){
    const props ={
        key: 'note-textArea',
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        readOnly: !notaAlterada.editando,
        // children viro value que vira defaultValue
        defaulValue: notaAlterada.texto,
        onChange: (event)=>{
            notaAlterada.titulo = event.target.value;
        }
    }
    // 20/02
    if(posicao !== undefined && !notaCopiada.editando){
        props.readOnly = true
    }
    return React.creatElement(FormTextarea,props)
}

function criaComponenteBotaoConcluido(adicionarNota, posicao, notaAlterada){
    const props = {
        key: 'note-addBotao',
        className: 'note__control', 
        type: 'button',
        onClick: (event) => {
            adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao);
        }
    }
    const children = 'Concluído'
    return React.creatElement(FromButton, props, children);
}

function criaComponenteBotaoRemover(removerNota, posicao){
    const props = {
        key: 'note-removeBotao',
        className: 'note__control', 
        type: 'button', 
        // remove children
        onClick: event => {
            removerNota(event, posicao);
        }
    };

    // n precisa de crase, filho vem pra cá

    // const children = <i class="fa fa-times" aria-hidden="true"></i>
    // OU:
    const children = React.creatElement('i', {
        className: 'fa fa-times',
        'aria-hidden': true,
    });
    return React.creatElement('button', props, children); 
}

// FORMA 1 - DESTRUCTURING
function FormNotas({notaAtual, posicao, adicionarNota, removerNota, editarFormulario}) {

    // FORMA 2 - DESTRUCTURING
    // const {notaAtual, posicao, adicionarNota, removerNota, editarFormulario} = props;

    // é uma copia da nota passada nos parametros pra criar os elementos
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando);

    let inputTitulo = criaComponenteInputTitulo(notaAlterada, posicao);

    let textareaTexto = criaComponenteTextareaTexto(notaAlterada, posicao);
    let botaoRemover = criaComponenteBotaoRemover(removerNota, posicao);
    let botaoConcluido = criaComponenteBotaoConcluido(adicionarNota, posicao, notaAlterada);

    let formNotas;

    let props = {
        className: 'note',
    };
    let children;

    // 20/02/18
    if(posicao === undefined){
        // template de nova nota
        children = [inputTitulo, textareaTexto, buttonConcluido]
    }
    else{
        // se a nota estiver editando tem os botões
        if (notaAlterada.editando) {
            children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
        } 
        // se n tiver n tem botoes
        else {
            children = [inputTitulo, textareaTexto];
            // add onClick dentro do props let acima
            props.onClick = () => {
                editarFormulario(posicao);
            }
        }
    }   
    return React.creatElement(Form, formProps, children);
}

export default FormNotas;