let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let numero4 = document.querySelector("#numero4");
let numero5 = document.querySelector("#numero5");

function mostrarOrdemDecrescente() {
    let numeros = [
        Number(numero1.value), 
        Number(numero2.value), 
        Number(numero3.value), 
        Number(numero4.value), 
        Number(numero5.value),
    ]; 
    
    numeros.sort((a, b) => b - a);

    h3Resultado.textContent = "Números em ordem decrescente: " + numeros.join(", ");
}

btVerificar.onclick = function() {
    mostrarOrdemDecrescente();
}
