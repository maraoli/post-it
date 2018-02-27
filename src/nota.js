export default class Nota {
    constructor(novaPosicao, novoTitulo, novoTexto, novoEditando = false /*icone = null*/) {
        this._posicao = novaPosicao;
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = novoEditando;
    }

    get posicao() {
        return this._titulo;
    }

    set posicao(novaPosicao) {
        this._posicao = novaPosicao;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }

    get texto() {
        return this._texto;
    }

    set texto(novoTexto) {
        this._texto = novoTexto;
    }

    get editando() {
        return this._editando;
    }

    set editando(novoEditando) {
        this._editando = novoEditando;
    }

    // 20/02 
    estaCadastrando() {
        return this.posicao === undefined;
    }

    estaVisualizando() {
        return this.posicao !== undefined && !this.editando
    }

    estaAlterando() {
        return this.posicao !== undefined && this.editando
    }
}