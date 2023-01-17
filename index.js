let parrafoInicial = document.getElementById("parrafoinicial");
/* CREAMOS EL EVENTO y LA FUNCIÓN */

console.log(parrafoInicial)
    
parrafoInicial.onclick = function() { 
    cambiaColorAleatorio() 
    }

function cambiaColorAleatorio() {
    
    const colores = [
        "red",
        "blue",
        "black",
        "cyan",
        "yellow"

    ];
    
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)]
}
/*

TIPOS DE DATOS

var -> Modificable, scope global - NO SE RECOMIENDA
let -> Modificable, scope limitado - RECOMENDADA USAR
const -> Constante no modificable - Scope global

*/

/* parrafoInicial ES UNA VARIABLE
document ES UN ATRIBUTO
.getElementById("parrafoinicial") ES UNA FUNCION

/*
CASES
PascalCase - Clases - JavaScript, JAVA

camelCase - variables, funciones, atributos - JavaScript

variable -> parrafoInicial
funcion -> parrafoInicial()
atributo -> parrafoInicial

snake_case - 
Se usa em Python para variables y funciones, para clases en Python se una el PascalCase
*/

