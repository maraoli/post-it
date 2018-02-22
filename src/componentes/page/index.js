// MAIN

import React from 'react'

import Nota from '../../nota'
import SecaoNotas from './../secaoNotas'
import FormNotas from './../formNotas'
import ListaNotas from '../../listaNotas'

// form index.js
// const listaNotas = new ListaNotas(observaMudancasNaLista);

function montaFormNotas({adicionarNota,removerNota, editarFormulario}){
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

function montaSectionNotas({listaNotas,adicionarNota,removerNota, editarFormulario}){
    const props ={
        key:'section-notes',
        listaNotas,
        adicionarNota,
        removerNota,
        editarFormulario
    }

    return React.createElement(montaSectionNotas,props)
}

// render e setState existem em .Componet
class Page extends React.Component {
    constructor(props){
        // chama classe pai
        super(props);

        // 20/02
        // bind - função que: vide baixo
        // this sempre se refera a pag clas Page, esse this abaixo represente o class Page
        // render n precisa pq ele n e passado para componentes filhos
        this.adicionarNota = this.adicionarNota.bind(this)
        this.removerNota = this.removerNota.bind(this)
        this.editarFormulario = this.editarFormulario.bind(this)
        this.atualizaPagina = this.atualizaPagina.bind(this)

        this.state = {
           listaNotas: new ListaNotas(this.atualizaPagina),
        }
    }

    // MODO 1 - Nova função atualiza page
    atualizaPagina(listaNotas){
        console.log('Quem é this?', this);
        // state/estado é dados da pagina/componente
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

    // 20/02
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
        // ?
        const { state, adicionarNota, removerNota, editarFormulario } = this
        const { listaNotas } = state

        const props = {className: 'container'}

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        let sectionNotas = montaSectionNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)

        return (
            // <React.Fragment>
            // <img src={srcBackground}/>
            <main {...props}>
                {/*<FormNotas key="form-note"><FormNotas/>*/}
                {formNotas}
                {sectionNotas}
            </main>
        );
    }
}

export default Page

