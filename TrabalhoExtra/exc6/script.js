let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");
let mediaSaldo = document.querySelector("#mediaSaldo");

function calcularCredito() {

    let saldo = Number(mediaSaldo.value);
    let credito = 0;

    if (saldo >= 0 && saldo <= 200) {
        credito = 0;
    } else if (saldo > 200 && saldo <= 400) {
        credito = saldo * 0.20;
    } else if (saldo > 400 && saldo <= 600) {
        credito = saldo * 0.30;
    } else if (saldo > 600) {
        credito = saldo * 0.40;
    }

    h3Resultado.innerHTML = "Saldo médio: R$ " + mediaSaldo.value + "<br>" +
                        "Crédito: R$ " + credito.toFixed(2);
}
btCalcular.onclick = function(){
    calcularCredito();
}