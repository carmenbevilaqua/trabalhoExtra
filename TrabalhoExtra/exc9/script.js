function calculatePayment() {

    let precoProduto = parseFloat(document.getElementById('precoProduto').value);
    let tipoPagamento = document.getElementById('tipoPagamento').value;
    let precoFinal;

    if (isNaN(precoProduto) || precoProduto <= 0) {
        alert('Por favor, insira um preço válido.');
        return;
    }

    if (tipoPagamento === 'a') {
        precoFinal = precoProduto * 0.9;
    } else if (tipoPagamento === 'b') {
        precoFinal = precoProduto * 0.85;
    } else if (tipoPagamento === 'c') {
        precoFinal = precoProduto;
    } else if (tipoPagamento === 'd') {
        precoFinal = precoProduto * 1.1;
    } else {
        alert('Por favor, selecione uma condição de pagamento válida.');
        return;
    }

    document.getElementById('resultado').innerText = "O valor a ser pago é: R$" + precoFinal.toFixed(2);
}