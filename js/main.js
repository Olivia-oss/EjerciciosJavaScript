import {Funciones1_4} from "./funciones1_4.js";
import {Funciones5_8} from "./funciones5_8.js";
import {Funciones9_11} from "./funciones9_11.js";
import {Funciones12_14} from "./funciones12_14.js";
import {Funciones15_17} from "./funciones15_17.js";

let text = "Hola como estas?";
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

let fuctions1_4 = new Funciones1_4();
let fuctions5_8 = new Funciones5_8();
let fuctions9_11 = new Funciones9_11();
let fuctions12_14 = new Funciones12_14();
let fuctions15_17 = new Funciones15_17();


console.log("Ejercicios 1/4");
fuctions1_4.caracteresTexto(text);
fuctions1_4.recorteTexto(text,9);
fuctions1_4.separarTexto(text,' ')
fuctions1_4.repetirTexto(text,3);
console.log("    ");
console.log("Ejercicios 5/8")
fuctions5_8.invertirTexto(text);
fuctions5_8.numeroPalabras(text);
fuctions5_8.textoPolindromo(text);
fuctions5_8.eliminarPatron(text,"a");
console.log("    ");
console.log("Ejercicios 9/11");
fuctions9_11.numeroRandom500_600();
fuctions9_11.nuemeroCapicua(2002);
fuctions9_11.factorial(5);
console.log();
console.log("Ejercicios 12/14");
fuctions12_14.numeroPrimo(10);
fuctions12_14.parImpar(11);
fuctions12_14.gradosAFahrenheit(0,'c');
console.log("    ");
console.log("Ejercicios 15/17");
fuctions15_17.decimalABinarioViseversa(1010,2);
fuctions15_17.descuento(100,20);
fuctions15_17.fechaanios(new Date(1984,9,23));