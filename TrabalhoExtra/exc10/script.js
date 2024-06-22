let h3Resultado = document.querySelector("#h3Resultado")
function calcularSalario() {
    let nivel = parseInt(document.getElementById("nivel").value);
    let qtdAula = parseInt(document.getElementById("qtdAula").value);

    let valorHoraAula;

    if (nivel === 1) {
        valorHoraAula = 12;
    } else if (nivel === 2) {
        valorHoraAula = 17;
    } else if (nivel === 3) {
        valorHoraAula = 25;
    } else {
        alert("Nível de professor inválido. Informe 1, 2 ou 3.");
        return;
    }

    let salario = valorHoraAula * qtdAula * 4.5;

    h3Resultado.innerHTML = `O salário do professor é R$ ${salario.toFixed(2)}`;
}
