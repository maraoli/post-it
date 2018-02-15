// Cria um button com tudo que ele precisa e returna

// props param
function FormButton(props) {
    let formButton = document.createElement('button');
    
    // destructuring
    formButton.setAttribute('class', props.className);
    formButton.setAttribute('type', props.type);
    
    formButton.addEventListener('click', props.click);

    // inner - dentro da tag <button>SeiLa</button>
    formButton.innerHTML = props.children;

    
    return formButton;
}

export default FormButton;
