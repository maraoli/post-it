// função construtora de objetos input

function FormInput(){
    let inputTitulo = document.createElement('input');

    inputTitulo.setAttribute('class', 'note__title');
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('name', 'titulo');
    inputTitulo.setAttribute('value', notaAtula.titulo);
    inputTitulo.setAttribute('placeholder', 'Titulo');

    return inputTitulo;
}

export default FormInput;