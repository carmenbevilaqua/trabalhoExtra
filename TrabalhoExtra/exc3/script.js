let btCalcularNotas = document.querySelector("#btCalcularNotas");
let h3Resultado = document.querySelector("#h3Resultado");
let ipValor = document.querySelector("#valor");

function calcularNotas() {
    let valor = Number(ipValor.value);
    let valorRestante = valor;

    let notas100 = Math.floor(valorRestante / 100);
    valorRestante %= 100;

    let notas50 = Math.floor(valorRestante / 50);
    valorRestante %= 50;

    let notas10 = Math.floor(valorRestante / 10);
    valorRestante %= 10;

    let notas5 = Math.floor(valorRestante / 5);
    valorRestante %= 5;

    let notas1 = Math.floor(valorRestante / 1);

    h3Resultado.innerHTML = `
        Valor informado: R$ ${valor.toFixed(2)} <br>
        Notas necess&aacuterias: <br>
        Notas de R$ 100: ${notas100} <br>
        Notas de R$ 50: ${notas50} <br>
        Notas de R$ 10: ${notas10} <br>
        Notas de R$ 5: ${notas5} <br>
        Notas de R$ 1: ${notas1}
    `;
}

btCalcularNotas.addEventListener('click', calcularNotas);
