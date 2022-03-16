function validarForm() {
    //primerio nome do formulario e o segundo é o campo
    let x = document.forms["meuForm"]["txtNome"].value;
    if (x == "") {
        alert("Preencha o campo nome");
        return false;
    }
}