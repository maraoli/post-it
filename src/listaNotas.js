// Aqui contem as funções que uma "lista de notas" deve ter e a 
// inicialização de uma lista de notas (constructor)

import Nota from './nota.js';

class ListaNotas {
    constructor(observador) {
        this._listaInterna = [];
        this._observador = observador;
    }

    // aki a nota n existe.
    adiciona(novoTitulo, novoTexto) {
        let nota = new Nota(novoTitulo, novoTexto);
        this._listaInterna.push(nota);
        // pq ela espera receber a lista, que é o this aki.
        this._observador(this);
    }

    remove(posicao, quantidade) {
        this._listaInterna.splice(posicao, 1);
        this._observador(this);
    }

    edita(posicao) {
        this._listaInterna[posicao].editando = true;
        this._observador(this);
    }

    // dif do add - aki a nota já existe
    salva(posicao, novoTitulo, novoTexto) {
        this._listaInterna[posicao].titulo = novoTitulo;
        this._listaInterna[posicao].texto = novoTexto;
        this._listaInterna[posicao].editando = false;
        this._observador(this);
    }

    pega(posicao) {
        return this._listaInterna[posicao];
    }

    contaTotal() {
        return this._listaInterna.length;
    }
};

export default ListaNotas;