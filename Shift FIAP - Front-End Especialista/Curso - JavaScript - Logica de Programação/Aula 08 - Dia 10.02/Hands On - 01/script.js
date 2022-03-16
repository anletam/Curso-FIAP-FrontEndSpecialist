let idade = parsetInt(prompt("Digite sua idade"));
alert(verificarIdade(idade));


function verificarIdade(idade) {
    if (idade < 18) {
        return "voce e menor de idade"
    } else {
        return "voce e maior de idade"
    }
}