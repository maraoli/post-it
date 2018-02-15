/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var notas = [];

function atualizarSecao(proxTag) {

    var template = "";

    for (var i = 0; i < notas.length; i++) {
        if (notas[i].editando) {
            template += '<form class="nova-nota">' + '<button class="remover-nota" onclick="fecharNota(event,' + i + ', this.form.parentElement)">X</button>' + '<input class="nota-titulo" name="titulo" value="' + notas[i].titulo + '"></input>' + '<input class="nota-texto" name="texto" value="' + notas[i].texto + '"></input>' + '<button class="enviar-nota" onclick="atualizarNota( this.form.titulo, this.form.texto, this.form, this.form.nextElementSibling, ' + i + ', this.form.parentElement)">Concluido</button>' + '</form>';
        } else {
            template += '<form class="nova-nota" onclick="newTemplate(' + i + ', this.parentElement)">' + '<button class="remover-nota" onclick="fecharNota(event,' + i + ', this.form.parentElement)">X</button>' + '<p class="titulo-da-nota">' + notas[i].titulo + '</p>' + '<p class="texto-da-nota">' + notas[i].texto + '</p>' + '</form>';
        }

        proxTag.innerHTML = template;
    }
}
window.atualizarSecao = atualizarSecao;

function adicionarNota(recebeTitulo, recebeTexto, recebeForm, recebeProxTag) {
    event.preventDefault();
    var nota = {
        titulo: recebeTitulo.value,
        texto: recebeTexto.value,
        editando: false
    };

    // nota.editando = true;

    notas.push(nota);

    console.log(notas);

    atualizarSecao(recebeProxTag);

    recebeForm.reset();
}
window.adicionarNota = adicionarNota;

function fecharNota(event, eliminarNota, naSecao) {
    // evita a propagação para o pai ( do button filho pro pai form pois button ta dentro do form)
    // event.stopPropagation(); - precisa receber o evento no primeiro parametro
    event.stopPropagation();
    var indice = eliminarNota;
    notas.splice(indice, 1);
    atualizarSecao(naSecao);
}
// window.fecharNota = fecharNota;

function newTemplate(indice, naSecao) {
    notas[indice].editando = true;
    atualizarSecao(naSecao);
}
window.newTemplate = newTemplate;

function atualizarNota(recebeTitulo, recebeTexto, recebeForm, recebeProxTag, i, naSecao) {
    event.preventDefault();
    if (notas[i].editando) {
        notas[i].titulo = recebeTitulo.value;
        notas[i].texto = recebeTexto.value;
        notas[i].editando = false;
        atualizarSecao(naSecao);
        console.log(notas[i]);
    }
}
window.atualizarNota = atualizarNota;

/***/ })
/******/ ]);