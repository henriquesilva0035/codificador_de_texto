var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function codificar() {
	var texto = textInput.value;

	var resultCod = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");


	document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCod + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}


function decodificar(){

	var texto = textInput.value;

	var resultDeco = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

	document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDeco+ '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}


function copiar(){
	var textoCop = document.getElementById('input-texto');
	textoCop.select('output');
	document.execCommand('copy');
	alert("Texto Copiado");

}