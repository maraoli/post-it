// 16/02/2018

// MAIN

import React from 'react'
import Nota from '../nota'
import SecaoNotas from './sectionNotas'
import FormNotas from './formNotas'
import ListaNotas from '../listaNotas'

// form index.js
const listaNotas = new ListaNotas(observaMudancasNaLista);

function montaFormNotas(){
    const props ={
        posicao: null, 
        // ou undefined, ou nem passa esse parametro
        // titulo e texto da nova nota estao vazios
        notaAtual: new Nota('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editaFormulario: editarFormulario
        // ou assim, pq como elas tem mesmo nome o ES6 permite
        // adicionarNota,
        // removerNota,
        // editaFormulario
    }

    return React.createElement(FromNotas, props)
}

function montaSectionNotas(){
    const props ={
        // da maneira nova:
        listaNotas,
        adicionarNota,
        removerNota,
        editarFormulario
    }

    return React.createElement(SectionNotas,props)
}

// render e setState existem em .Componet
class Page extends React.Component {
    constructor(props){
        // chama classe pai
        super(props);
        this.state = {
           listaNotas: new ListaNotas(this.atualizaPagina),
        }
    }

    // MODO 1 - Nova função atualiza page
    atualizaPagina(listaNotas){
        console.log('Quem é this?', this);
        // stado é dados da pagina/componente
        // this é Page
        this.setState({
            listaNotas: novaLista
        });
    }

    // sessao notas e montaFromNotas usam essas 3 funcoes por isso deixamos fora
    // recortei as 3 do index
    editarFormulario(posicao){
        this.state.listaNotas.edita(posicao);
    }

    adicionarNota(inputTitulo, textareaTexto, formulario, posicao){
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
        }
        else {
            this.state.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    removerNota(evento, posicao){
        evento.stopPropagation();
        this.state.listaNotas.remove(posicao);
    }

    // MODO 2
    // atualizaPagina(listaNotas){
    //     const state = {
    //         listaNotas: novaLista
    //     }
    //     this.setState();
    // }

    // o nome precisa ser RENDER pq eu reescrevo um elemento da class pai
    // ele cria a tag main
    // quando atualiza muda a tela
    render(){
        const props = {className: 'container'}

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        let sectionNotas = montaSectionNotas()
        const children = [formNotas, sectionNotas]

        return React.createElement('main', props, children)
    }
}

// function Page(){
//     const props = {className: 'container'}

//     let formNotas = montaFormNotas()
//     let sectionNotas = montaSectionNotas()
//     const children = [formNotas, sectionNotas]

//     return React.createElement('main', props, children)
// }

export default Page