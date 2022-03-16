function paraCelsius(f) {
    let c = (5 / 9) * (f - 32);
    alert(`Temperatura em graus C=${c.toString}`);
}

function paraFahrenheit(c) {
    let f = (c * 9 / 5) + 32;
    alert(`Temperatura em graus F=${f.toString}`);
}

function principal() {
    let temp = parseFloat(document.getElementById("grausF").value);
    let escala = document.getElementById("escala").value;

    if (escala == "F") {
        paraCelsius(temp);
    } else {
        paraFahrenheit(temp);
    }
}


//Com retorno

function paraCelsius(f) {
    let c = (5 / 9) * (f - 32);
    return c;
}

function paraFahrenheit(c) {
    let f = (c * 9 / 5) + 32;
    return f;
}

function principal() {
    let temp = parseFloat(document.getElementById("grausF").value);
    let escala = document.getElementById("escala").value;
    let tempConvertida = 0;

    if (escala == "F") {
        tempConvertida = paraCelsius(temp);
        alert(`Temperatura em graus C=${tempConvertida.toString()}`);
    } else {
        tempConvertida = paraFahrenheit(temp);
        alert(`Temperatura em graus F=${tempConvertida.toString()}`);
    }
}


// Função auto-invocavel
// não precisa ser chamada para rodar
// funciona bem para casos em que a função tem que rodar
// Como uma rotina

(function() {
    alert("Executei sem ser chamada.");
})();

function principal() {

}

//Objeto arguments

//Jeito antigo
function efetuarVenda(valorCompra, cupomDesconto, frete) {
    let valorFinal = (valorCompra - cupomDesconto) + frete;
}

//arguments é um array
//que consegue receber tds os argumentos, e guarda dentro dos vetores

function frutas() {
    let texto;
    for (let i = 0; i < arguments.length; i++) {
        texto += (arguments[i] + "<br>");
    }
}

frutas("Laranja", "Maça", "Kiwi", "Mamao", "Pera");


//Operador REST
//Operador rest é: ...
//Só pode ser colocada no ultimo parametro
//Depois do ... vira um array e td dps vira vetor


function frutas(a, ...b) {
    alert(a);
    alert(b);

}

frutas("Laranja", "Maça", "Kiwi", "Mamao", "Pera");

//A vale laranja

//B[0]=Maça
//B[1]=Kiwi
//B[c]=Mamao


//Parametro Padrão
//Se vc estabelecer um valor para ele, o parametro vai receber um parametro que vc passou
//Se eu não passar nd, ele assume o valor padrão
//O valor que vc passou é mais forte

function retorna(a = 2) {
    return a;
}

alert(retorna(3)); //exibe 3
alert(retorna()); //exibe 2


// Array parametrizado, ou seja, os elementos do array receberam nome
// Então ele virou um objeto
// posso exibir um objeto inteiro como parametro
// /n quebra linha

const pessoa = {
    nome: "Andreia",
    idade: 45
}

function exibir(x) {
    alert(`${nome}, ${idade}`);
}

exibir(pessoa);


//Variaveis podem trabalhar com escopo de função

function minhaFuncao() {
    let minhaVariavel = "Variavel no escopo da funcao"
    return minhaVariavel;
}

alert(minhaFuncao());

alert(minhaVariavel()); //let não funciona fora do escopo da função


//variavel global, sem let-var-const
//acessivel fora da função 

function minhaFuncao() {
    minhaVariavel = "Variavel no escopo da funcao"
    return minhaVariavel;
}

alert(minhaVariavel());