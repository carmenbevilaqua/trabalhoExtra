let salario = document.querySelector("#salario");
let cargo = document.querySelector("#cargo");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#resultado");

function calcularSalario() {
    let salarioAntigo = Number(salario.value);
    let cargoValue = cargo.value;

    let taxasDeAumento = {
        '101': 0.10,
        '102': 0.20,
        '103': 0.30
    };

    let taxaDeAumento = taxasDeAumento[cargoValue] !== undefined ? taxasDeAumento[cargoValue] : 0.40;
    let aumento = salarioAntigo * taxaDeAumento;
    let novoSalario = salarioAntigo + aumento;

    h3Resultado.innerHTML = "Sal&aacuterio antigo: R$ " + salarioAntigo.toFixed(2) + "<br>" +
                            "Novo sal&aacuterio: R$ " + novoSalario.toFixed(2) + "<br>" +
                            "Diferen&ccedila: R$ " + aumento.toFixed(2);
}

btCalcular.onclick = function () {
    calcularSalario();
}
