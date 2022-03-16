let numTabu = parseInt(prompt("Digite um numero para ver a tabuada do mesmo:"));
let resultadoTabu;

//Com while

let i = 1;
while (i <= 10) {
    resultadoTabu = numTabu * 1;
    document.write(resultadoTabu.toString() + "<br>");
    i++;
}

//Com do:while (ele vai rodando até dar o valor do while)
//Quando você precisar que o conteudo do seu loop seja executado pelo menos uma vez

do {
    resultadoTabu = numTabu * 1;
    document.write(resultadoTabu.toString() + "<br>");
    i++;
} while (i <= 10);

//Condição: PARA (FOR)
//Quando não tem variação de valores

for (let i = 1; i <= 10; i++) {
    resultadoTabu = numTabu * 1;
    document.write(resultadoTabu.toString() + "<br>");
}



// Sem While

// resultadoTabu = numTabu * 1;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 2;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 3;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 4;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 5;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 6;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 7;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 8;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 9;
// document.write(resultadoTabu.toString() + "<br>");
// resultadoTabu = numTabu * 10;
// document.write(resultadoTabu.toString() + "<br>");