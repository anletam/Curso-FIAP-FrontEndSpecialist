let IdadeMinima = parseInt(prompt("Qual sua idade: "));

if (IdadeMinima < 12) {
    alert("Voce nao pode jogar");
} else if (IdadeMinima == 12) {
    alert("Voce so pode jogar com a permissoo dos seus pais");
} else {
    alert("Voce pode jogar");
}