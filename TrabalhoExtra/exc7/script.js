function calcularValor() {
    let codigo = parseInt(document.getElementById("codigo").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let resultado = document.getElementById("resultado");

    let preco;

    if (codigo === 1) {
        preco = 11.00;
    } else if (codigo === 2) {
        preco = 8.50;
    } else if (codigo === 3) {
        preco = 8.00;
    } else if (codigo === 4) {
        preco = 9.00;
    } else if (codigo === 5) {
        preco = 10.00;
    } else if (codigo === 6) {
        preco = 4.50;
    } else {
        resultado.textContent = "Código inválido";
        return;
    }

    let valorTotal = preco * quantidade;
    resultado.textContent = `O valor total a ser pago é R$${valorTotal.toFixed(2)}`;
}