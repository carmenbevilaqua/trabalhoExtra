let ipAltura = document.querySelector("#ipAltura")
let ipGenero = document.querySelector("#ipGenero")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcularPeso(){
    let altura = Number(ipAltura.value)
    let genero = ipGenero.value;
    let pesoIdeal;

    if (genero === "masculino"){
        pesoIdeal = (72.7 * altura) - 58;
    }else if(genero === "feminino"){
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    h3Resultado.innerHTML = `O peso ideal é: ${pesoIdeal}kg`;
}
btCalcular.onclick = function(){
    calcularPeso();
}