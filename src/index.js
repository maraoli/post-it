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




