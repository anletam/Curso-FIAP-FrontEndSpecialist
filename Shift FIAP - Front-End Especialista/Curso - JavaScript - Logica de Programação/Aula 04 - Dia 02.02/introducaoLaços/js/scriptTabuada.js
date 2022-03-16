    function calcularTabuada() {

        let numTabu = parseInt(document.getElementById("numero").value);
        let i = 1;
        let result = "";
        let res;

        while (i <= 10) {
            res = numTabu * 1;
            result += res + "<br>";
            i++;
        }
    }

    document.getElementById(resultadoTabuada).innerHTML = result;