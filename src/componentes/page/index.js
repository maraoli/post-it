// MAIN

import React from 'react'

import Nota from '../../nota'
import SecaoNotas from './../secaoNotas'
import FormNotas from './../formNotas'
import ListaNotas from '../../listaNotas'

// form index.js
// const listaNotas = new ListaNotas(observaMudancasNaLista);

function montaFormNotas(adicionarNota,removerNota, editarFormulario){
    const props ={
        key:'form-note',
        posicao: null, 
        notaAtual: new Nota('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editaFormulario: editarFormulario
    }
    return <FormNotas {...props} />
}

function montaSectionNotas(listaNotas,adicionarNota,removerNota, editarFormulario){
    const props ={
        key:'section-notes',
        listaNotas,
        adicionarNota,
        removerNota,
        editarFormulario
    }

    return <SecaoNotas {...props} />
}

// render e setState existem em .Componet
class Page extends React.Component {
    constructor(props){
        super(props);

        this.adicionarNota = this.adicionarNota.bind(this)
        this.removerNota = this.removerNota.bind(this)
        this.editarFormulario = this.editarFormulario.bind(this)
        this.atualizaPagina = this.atualizaPagina.bind(this)

        this.state = {
           listaNotas: new ListaNotas(this.atualizaPagina),
        }
    }

    atualizaPagina(listaNotas){
        console.log('Quem é this?', this);
        this.setState({
            listaNotas: novaLista
        });
    }

    editarFormulario(posicao){
        this.state.listaNotas.edita(posicao);
    }

    adicionarNota(titulo, texto, posicao){
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, titulo, texto);
        }
        else {
            this.state.listaNotas.adiciona(titulo, texto);
        }
    }

    removerNota(evento, posicao){
        evento.stopPropagation();
        this.state.listaNotas.remove(posicao);
    }
    render(){
        const { state, adicionarNota, removerNota, editarFormulario } = this
        const { listaNotas } = state

        const props = {className: 'container'}

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        let sectionNotas = montaSectionNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)

        return (
            <main {...props}>
                {formNotas}
                {sectionNotas}
            </main>
        );
    }
}

export default Page

