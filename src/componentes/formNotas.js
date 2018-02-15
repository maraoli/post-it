// Aqui ele seta todos os atributos de uma nota e 
// cria um Form com ele e retorna.


import React from 'react'

// podemos omitir a extensao .js
import Form from './form';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';
import Nota from  './nota';

// cria e retorna o input form
// tiro o props e recebo notaAtual direto
// sem this. posso converter em arron function
function criaComponenteInputTitulo(notaAlterada){
    const props = {
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
    };
    return React.creatElement(FormInput, props);
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
        defaulValue: notaAlterada.texto,
        onChange: (event)=>{
            notaAlterada.titulo = event.target.value;
        }
    };
    return React.creatElement(FormTextarea,props)
}

function criaComponenteBotaoConcluido(adicionarNota, posicao, notaAlterada){
    const props = {
        className: 'note__control', 
        type: 'button',
        onClick: (event) => {
            props.adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao);
        }
    }
    const children = 'Concluído'
    return React.creatElement('button', props, children);
}

function criaComponenteBotaoRemover(removerNota, posicao){
    const props = {
        className: 'note__control', 
        type: 'button', 
        // remove children
        onClick: event => {
            props.removerNota(event, posicao);
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
// destructuring / immutable
// extract function
// variable shorthand declaration
function FormNotas(props, children) {
    // é uma copia da nota passada nos parametros pra criar os elementos
    let notaAlterada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando);

    let inputTitulo = criaComponenteInputTitulo(notaAlterada);

    let textareaTexto = criaComponenteTextareaTexto(notaAlterada);

    let formNotas;

    let formProps = {
        className: 'note',
        // onClick: click
        // ou:
        // Click: click
    }
    let children;
    let onClick;

    // se a nota estiver editando tem os botões
    if (props.notaAtual.editando) {
        let botaoRemover = criaComponenteBotaoRemover(props.removerNota, props.posicao);

        let botaoConcluido = criaComponenteBotaoConcluido(props.adicionarNota, props.posicao, notaAlterada);

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
    } 
    // se n tiver n tem botoes
    else {
        children = [inputTitulo, textareaTexto];

        click = () => {
            props.editarFormulario(props.posicao);
        }
    }

    formNotas = React.creatElement(Form, formProps, children);

    return formNotas;
}

export default FormNotas;

// ********************SEM REACT
// import Form from './form.js';
// import FormInput from './formInput.js';
// import FormTextarea from './formTextarea.js';
// import FormButton from './formButton.js';

// // destructuring / immutable
// // extract function
// // variable shorthand declaration
// function FormNotas(props) {
//     let formNotas;

//     // criando tags
//     let inputTitulo = new FormInput({
//         className: 'note__title',
//         type: 'text',
//         name: 'titulo',
//         placeholder: 'Título',
//         readonly: !props.notaAtual.editando,
//         value: props.notaAtual.titulo
//     });

//     let textareaTexto = new FormTextarea({
//         className: 'note__body', 
//         name: 'texto', 
//         placeholder: 'Criar uma nota...', 
//         rows: 5, 
//         readonly: !props.notaAtual.editando,
//         children: props.notaAtual.texto
//     });

//     let children;
//     let click;

//     // se a nota estiver editando tem os botões
//     if (props.notaAtual.editando) {
//         let buttonRemover = new FormButton({
//             className: 'note__control', 
//             type: 'button', 
//             children: '<i class="fa fa-times" aria-hidden="true"></i>',
//             click: event => {
//                 props.removerNota(event, props.posicao);
//             }
//         });

//         let buttonConcluido = new FormButton({
//             className: 'note__control', 
//             type: 'button', 
//             // caso do botão concluido
//             children: 'Concluído',
//             click: () => {
//                 props.adicionarNota(inputTitulo, textareaTexto, formNotas, props.posicao);
//             }
//         });

//         children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
//     } 
//     // se n tiver n tem botoes
//     else {
//         children = [inputTitulo, textareaTexto];

//         click = () => {
//             props.editarFormulario(props.posicao);
//         }
//     }

//     formNotas = new Form({
//         className: 'note',
//         children: children,
//         click: click
//     });

//     return formNotas;
// }

// export default FormNotas;