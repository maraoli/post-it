// *************** TEACHER CODE (com adaptações pro meu codigo)

import ListaNotas from './listaNotas.js';
import FormNotas from './componentes/formNotas.js';

let secao = document.getElementsByClassName('nova-nota')[0];

// função que esconde o atualizarSecao na observa.
// o atualizarSecao esta abaixo da chamada.
const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

// Seu parâmetro está no constructor
const listaNotas = new ListaNotas(observaMudancasNaLista);

const atualizarSecao = secao => {
    // remove todos os filhos existentes na função.
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


/* MY OLD CODE
var notas = [];

function atualizarSecao(proxTag){

    var template = "";

    for(var i = 0; i<notas.length; i++){
        if(notas[i].editando){
            template += '<form class="nova-nota">'+
            '<button class="remover-nota" onclick="fecharNota(event,'+i+', this.form.parentElement)">X</button>'+
            '<input class="nota-titulo" name="titulo" value="'+notas[i].titulo+'"></input>'+
            '<input class="nota-texto" name="texto" value="'+notas[i].texto+'"></input>'+
            '<button class="enviar-nota" onclick="atualizarNota( this.form.titulo, this.form.texto, this.form, this.form.nextElementSibling, '+i+', this.form.parentElement)">Concluido</button>'+
            '</form>';
        }
        else{
            template += '<form class="nova-nota" onclick="newTemplate('+i+', this.parentElement)">' +
            '<button class="remover-nota" onclick="fecharNota(event,'+i+', this.form.parentElement)">X</button>'+
            '<p class="titulo-da-nota">'+notas[i].titulo+'</p>'+
            '<p class="texto-da-nota">'+notas[i].texto+'</p>'+
            '</form>';
        }

        proxTag.innerHTML = template;
    }
}
window.atualizarSecao = atualizarSecao;

function adicionarNota( recebeTitulo, recebeTexto, recebeForm, recebeProxTag){
    event.preventDefault();
    var nota = {
        titulo: recebeTitulo.value,
        texto: recebeTexto.value,
        editando: false,
    };

    // nota.editando = true;

    notas.push(nota);

    console.log(notas);

    atualizarSecao(recebeProxTag);

    recebeForm.reset();
}
window.adicionarNota = adicionarNota;

function fecharNota(event, eliminarNota, naSecao){
    // evita a propagação para o pai ( do button filho pro pai form pois button ta dentro do form)
    // event.stopPropagation(); - precisa receber o evento no primeiro parametro
    event.stopPropagation();
    var indice = eliminarNota;
    notas.splice( indice , 1);
    atualizarSecao(naSecao);
}
// window.fecharNota = fecharNota;

function newTemplate(indice, naSecao){
    notas[indice].editando = true;
    atualizarSecao(naSecao);
}
window.newTemplate = newTemplate;

function atualizarNota(recebeTitulo, recebeTexto, recebeForm, recebeProxTag , i, naSecao){
    event.preventDefault();
    if(notas[i].editando){
        notas[i].titulo = recebeTitulo.value;
        notas[i].texto = recebeTexto.value;
        notas[i].editando = false;
        atualizarSecao(naSecao);
        console.log(notas[i]);
    }
}
window.atualizarNota = atualizarNota;
*/



