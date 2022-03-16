function fazerLogin() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "123") {
        document.getElementById("resultado").innerHTML = "<font color=#00FF00>Seja bem vindo</font>";
    } else {
        document.getElementById("resultado").innerHTML = "<font color=#FF0000>Login Incorreto</font>";
    }
}