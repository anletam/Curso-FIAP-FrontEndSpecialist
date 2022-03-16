function CalculandoFatorial() {

    let num = parseInt(document.getElementById("numero").value);
    let respFatorial = 1;
    let i = 1;

    while (i <= num) {
        respFatorial = respFatorial *= i;
        i++;
    }

    document.getElementById("respFatorial").innerHTML = respFatorial.toString();

}