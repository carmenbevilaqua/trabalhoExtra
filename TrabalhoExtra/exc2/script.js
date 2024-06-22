let ladoX = document.querySelector("#ladoX")
let ladoY = document.querySelector("#ladoY")
let ladoZ = document.querySelector("#ladoZ")
let btVerificar = document.querySelector("#btVerificar")
let h3Resultado = document.querySelector("#h3Resultado")

function verificarTriangulo(){
    let x = Number(ladoX.value)
    let y = Number(ladoY.value)
    let z = Number(ladoZ.value)

    if(x === y && y === z){
        h3Resultado.textContent = "Triângulo quilátero"
    } else if(x === y || y === z || x === z){
        h3Resultado.textContent = "Triângulo Isósceles"
    } else {
        h3Resultado.textContent = "Trângulo Escaleno"
    }
}
btVerificar.onclick = function(){
    verificarTriangulo();
}