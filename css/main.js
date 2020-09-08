import {Funciones} from "./funciones.js";
let text = "Hola como estas?";

let fuctions = new Funciones();

console.log("Numero de caracteres: "+fuctions.caracteresTexto(text));
console.log("Texto selecionado: "+fuctions.recorteTexto(text,4));
console.log("Texto separado: "+fuctions.separarTexto(text,' '));
console.log("Repiticion de texto: "+fuctions.repetirTexto(text,3));