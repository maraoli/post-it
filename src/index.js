// *************** TEACHER CODE (com adaptações pro meu codigo)

import ListaNotas from './listaNotas.js';
import FormNotas from './componentes/formNotas.js';

let secao = document.getElementsByClassName('nova-nota')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new ListaNotas(observaMudancasNaLista);

const atualizarSecao = secao => {
    // remove todos os filhos existentes na função.
    // secao é um elemento do dom real, e ele vai dar erro pq so le dom virtual
    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    }

    // sobe as novas notas uma por uma.
    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);

        // property shorthand
        // funções usadas no form para cada nota
        const props = {
            posicao: posicao, 
            notaAtual: notaAtual, 
            editarFormulario: editarFormulario, 
            adicionarNota: adicionarNota, 
            removerNota: removerNota
        };
        // appendChild - add um nó filho no pai
        secao.appendChild(new FormNotas(props));
    }
}

// São as funções que um "formulario" precisa ter
// por isso que "repete".
const editarFormulario = posicao => listaNotas.edita(posicao);

// esse é o unico code que precisa ser inicializado de inicio
// por isso tem window lá em baixo.
const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    // se a nota já existe so atualiza
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    }
    // se ela n existe atualize
    else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

const removerNota = (evento, posicao) => {
    // o stopPropagation() evita que ao clicar no x o formulario.edita tbm seja acionado.
    evento.stopPropagation();
    listaNotas.remove(posicao);
}

// o adiciona recebe window pq ele é a unica função chamada fora dos codes JS, no HTML no caso.
// funções inner tbm precisam disso.
window.adicionarNota = adicionarNota;




