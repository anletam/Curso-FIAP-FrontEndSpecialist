function CalculandoIntervalo() {

    let n1 = parseInt(document.getElementById("numeroUm").value);
    let n2 = parseInt(document.getElementById("numeroDois").value);
    let res = 0;

    if (n1 < n2) {
        for (let i = n1 + 1; i < n2; i++) {
            res = res + i;
        }
        document.getElementById("resultCalculo").innerHTML = res.toString();
    } else {
        document.getElementById("resultCalculo").innerHTML = "O primeiro numero deve ser o menor que o segundo";
    }

}