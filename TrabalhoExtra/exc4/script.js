let anoCarro = document.querySelector("#anoCarro");
let valorCarro = document.querySelector("#valorCarro")
let h3Resultado = document.querySelector("#h3Resultado");
let btVerificarTaxa = document.querySelector("#btVerificarTaxa");

function verificarTaxa() {
    let ano = parseInt(anoCarro.value);
    let valor = parseFloat(valorCarro.value);

    let taxa;

    if (ano > 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    let imposto = taxa * valor;
    h3Resultado.innerHTML = "Imposto a pagar: " + imposto.toFixed(2);
}

btVerificarTaxa.onclick = function() {
    verificarTaxa();
}