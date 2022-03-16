function validarForm() {
    let qntBaralho = document.getElementById("qntBaralho").value;

    let valorBaralho = 25.00;
    let Calculo = qntBaralho / valorBaralho;

    document.getElementById("resultadoValor").innerHTML = Calculo;


}