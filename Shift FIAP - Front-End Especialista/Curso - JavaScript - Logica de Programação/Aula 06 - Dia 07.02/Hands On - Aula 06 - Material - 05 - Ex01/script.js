let Med = prompt("Digite o medicamento:");
let quantidadeMed = parseInt(prompt("Digite a quantidade desse medicamento: "));
let valorMed = parseFloat(prompt("Digite o valor do remedio: "));

if (quantidadeMed > 1) {
    alert(`Parabens! Na compra desse medicamento, leve 2 por apenas ${Match.floor(quantidadeMed*valorMed)}`);
} else {
    alert(`O valor da sua compra foi ${valorMed}`);
}