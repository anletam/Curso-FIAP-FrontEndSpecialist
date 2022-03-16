function ExibindoNumeros() {

    let n1 = parseInt(document.getElementById("numeroUm").value);
    let n2 = parseInt(document.getElementById("numeroDois").value);
    let quantidadePares = 0;
    let i = n1 + 1;


    if (n1 < n2) {
        do {
            //verificar se o numero é par
            if (i % 2 == 0) {
                quantidadePares++;
            }
            i++
        }
        while (i <= n2 - 1);

        document.getElementById("resultNumeros").innerHTML = res.toString();
    } else {
        document.getElementById("resultNumeros").innerHTML = "O primeiro numero deve ser o menor que o segundo";
    }

}